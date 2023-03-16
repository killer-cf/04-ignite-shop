import { HomeContainer, Product } from '@/styles/pages/home'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import Link from 'next/link'
import Head from 'next/head'

import 'keen-slider/keen-slider.min.css'
import { stripe } from '@/lib/stripe'
import { GetStaticProps } from 'next'
import Stripe from 'stripe'
import { CaretLeft, CaretRight, Handbag } from 'phosphor-react'
import { useState } from 'react'

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number
  }[]
}

export default function Home({ products }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
  },
    created() {
      setLoaded(true)
    },
  })

  const slidesLength = (instanceRef.current?.track.details.slides.length! - 3)
  const disabledArrowLeft = currentSlide === 0 ? " arrow--disabled" : ""
  const disabledArrowRight = currentSlide === slidesLength ? " arrow--disabled" : ""

  return (
    <>
      <Head>
        <title>Home | Ignite shop</title>
      </Head>
      
      <HomeContainer>
        <div ref={sliderRef} className='keen-slider'>
          {products.map(product => {
            return (
              <Link href={`/product/${product.id}`}  key={product.id} prefetch={false}>
                <Product className='keen-slider__slide' >
                  <Image src={product.imageUrl} width={520} height={480} alt="" />

                  <footer>
                    <div>
                      <strong>{product.name}</strong>
                      <span>{product.price}</span>
                    </div>
                    <button>
                      <Handbag size={32} weight='bold' />
                    </button>
                  </footer>
                </Product>
              </Link>
            )
          })}
        </div>
        {loaded && instanceRef.current && (
          <>
            <CaretLeft size={100} weight='thin'
              onClick={() => instanceRef.current?.prev()}
              className={`arrow arrow--left ${disabledArrowLeft}`}
            />
            <CaretRight size={100} weight='thin'
              onClick={() => instanceRef.current?.next()}
              className={`arrow arrow--right ${disabledArrowRight}`}
            />
          </>
        )}
      </HomeContainer>
    </>
    
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount! / 100),
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products
    },

    revalidate: 60 * 60 * 2,
  }
}
