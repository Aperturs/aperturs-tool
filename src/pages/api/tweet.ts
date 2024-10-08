import { NextApiRequest, NextApiResponse } from "next";
import { getTweet, type Tweet } from "react-tweet/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  const tweetId = id as string;

  try {
    const tweet = id ? await getTweet(tweetId) : null;

    console.log(tweet);
    res.status(200).json(tweet);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch tweet" });
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
