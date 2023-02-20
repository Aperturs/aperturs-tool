import { NextApiRequest, NextApiResponse } from 'next';
import Twitter from 'twitter-lite';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  const client = new Twitter({
    consumer_key: 'CkpjvoELIUbuvjlLRPu9ZYWYf',
    consumer_secret: 'TyFZvw40nVYlVsCkILrf139OBpb6zlGFL0IYDN5ww8vrl4yaZk',
    access_token_key: '3304494590-AhE0e9FjEDV5wCDoeIGWDFsmdwHZ34rb9OUIQLc',
    access_token_secret: 'b9xTegBk3aJdBeApSzKbrxBA7tvu75yZmM30zAER2sErc',
  });

  const { id } = req.query;

  try {
    const tweet = await client.get('statuses/show', { id });
    res.status(200).json(tweet);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tweet' });
  }    
}
