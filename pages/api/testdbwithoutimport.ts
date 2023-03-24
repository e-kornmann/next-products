import { MongoClient } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

const uri = process.env.MONGODB_URI;
const options = {};

const client = new MongoClient(`${uri}`, options);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await client.connect();
    const db = client.db('saltdb');
    const col = db.collection('casio_stock');
    const data = await col.find({}).toArray();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  } finally {
    await client.close();
  }
}
