// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { stripe } from '@/lib/stripe'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { priceId } = req.body

  if(req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if(!priceId) {
    return res.status(404).json({ error: 'Price not found' })
  }

  const success_url = `${process.env.NEXT_URL}/success`
  const cancel_url = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: success_url,
    cancel_url: cancel_url,
    mode: 'payment',
    line_items: [
      {
        price: priceId, 
        quantity: 1,
      }
    ],
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}
