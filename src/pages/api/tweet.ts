import { NextApiRequest, NextApiResponse } from 'next';
import Twitter from 'twitter-lite';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  const client = new Twitter({
    consumer_key: '8VXKb4OrknerM2xE6E3RGn6Oy',
    consumer_secret: '1cjA0G1H23YfeERyYE5xZd2qgCoUTJW974RMLDNbemZoqbrbMA',
    access_token_key: '3304494590-X9az48T8BoVhJ6OtJlLM0HRd6eW67LN10HSqPhE',
    access_token_secret: 'nuzYTKTPXVF6L61uQo3MYCqgWhGtKa2zfjRWgNU5Yh7wg',
  });

  const { id } = req.query;

  try {
    const tweet = await client.get('statuses/show', { id, tweet_mode: 'extended', in_reply_to_tweet_id: true });
    res.status(200).json(tweet);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tweet' });
  }    
}


// import { NextApiRequest, NextApiResponse } from 'next';
// import { TwitterApi } from 'twitter-api-v2';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {

//   const client = new TwitterApi({
//     appKey: 'CkpjvoELIUbuvjlLRPu9ZYWYf',
//     appSecret: 'TyFZvw40nVYlVsCkILrf139OBpb6zlGFL0IYDN5ww8vrl4yaZk',
//     accessToken: '3304494590-AhE0e9FjEDV5wCDoeIGWDFsmdwHZ34rb9OUIQLc',
//     accessSecret: 'b9xTegBk3aJdBeApSzKbrxBA7tvu75yZmM30zAER2sErc',
//   });

//   const { id } = req.query;

//   if (!id) {
//     res.status(400).json({ error: 'Missing tweet ID' });
//     return;
//   }

//   try {
//     const { data: tweet, includes } = await client.v2.get(`tweets/${id}`, { 'tweet.fields': 'public_metrics,created_at,attachments' });
//     const { data: user } = includes.users.find((u: any) => u.id === tweet.author_id);
//     const likes = tweet.public_metrics?.like_count || 0;
//     const retweets = tweet.public_metrics?.retweet_count || 0;
//     const replies = tweet.public_metrics?.reply_count || 0;
//     const createdTime = tweet.created_at;
//     const { media_attachments } = tweet.attachments || {};
//     const mediaLinks = media_attachments?.map((m: any) => m.url);

//     const result = {
//       likes,
//       retweets,
//       replies,
//       createdTime,
//       author: {
//         username: user.username,
//         name: user.name,
//         profilePictureUrl: user.profile_image_url_https,
//       },
//       mediaLinks,
//     };

//     res.status(200).json(result);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch tweet metrics' });
//   }
// }


