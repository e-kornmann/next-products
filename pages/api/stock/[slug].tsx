import clientPromise from "@/Database/MongoConnect";
import type { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query
  if (req.method !== 'GET') {
    res.status(405).send('Method not allowed');
    }
  try {
    const client = await clientPromise;
    const db = client.db('saltdb');
    const col = db.collection('casio_stock');
    const data = await col.findOne({ casio: slug });
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};



