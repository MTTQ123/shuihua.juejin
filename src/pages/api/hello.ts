// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const uri = process.env.MONGODB_URI;
  res.status(200).json({ name: 'John Doe', uri: uri })
}
