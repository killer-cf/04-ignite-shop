import { stripe } from "@/lib/stripe";
import { ImageContainer, ImagesContainer, SuccessContainer } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";

interface SuccessProps {
  customerName: string
  products: {
    name: string
    imageUrl: string
    quantity: number
  }[]
}

export default function Product({ customerName, products }: SuccessProps) {
  const productsQuantities = products?.reduce((total, product) => total += product.quantity , 0)

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite shop</title>

        <meta name="robots" content="noindex" />
      </Head>
      
      <SuccessContainer>
        <h1>Compra efetuada!</h1>

        <ImagesContainer>
          {products?.length > 0 && products.map(product => (
            <ImageContainer key={product.name}>
              <Image src={product.imageUrl} alt='' width={120} height={110} />
            </ImageContainer>
          ))} 
        </ImagesContainer>

        <p>
        Uhuul <strong>{customerName}</strong>, sua compra de {productsQuantities} camisetas já está a caminho da sua casa. 
        </p>

        <Link href='/'>
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {
  if(!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const sessionId = String(query.session_id)


  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  console.log(session.line_items?.data)

  const customerName = session.customer_details?.name

  const products = session.line_items?.data.reduce((acc: any, lineItem) => {
    const product = lineItem.price?.product as Stripe.Product

    return acc = [
    ...acc,
    {
      name: product.name, 
      imageUrl: product.images[0],
      quantity: lineItem.quantity
    }]
  }, [])

  console.log(products)

  return {
    props: {
      customerName,
      products, 
    }
  }
}