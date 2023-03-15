import axios from "axios"
import Head from "next/head"
import Image from "next/image"
import Stripe from "stripe"
import * as Dialog from '@radix-ui/react-dialog'
import { useRouter } from "next/router"
import { useState } from "react"
import { stripe } from "@/lib/stripe"
import { GetStaticPaths, GetStaticProps } from "next"

import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { CartModal } from "@/components/CartModal"

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckout, setIsCreatingCheckout] = useState(false)
  const { isFallback } = useRouter()

  if (isFallback) {
    return <div>loading...</div>
  }

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckout(true)

      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl

    } catch (err) {
      setIsCreatingCheckout(false)

      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} alt='' width={520} height={480} />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>
          <Dialog.Root>
            <Dialog.Trigger asChild >
              <button disabled={isCreatingCheckout}>
                Colocar na sacola
              </button>
            </Dialog.Trigger>

            <CartModal />
          </Dialog.Root>
        </ProductDetails>
      </ProductContainer>
    </>
    
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({ params }) => {
  const productId = params!.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount! / 100),
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1
  }
}