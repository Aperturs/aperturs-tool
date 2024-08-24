import React from "react";
import { useContext } from "react";
import { AppContext } from "@/pages";
import Image from "next/image";

function extractTweetText(tweet: string): string {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const textWithoutUrls = tweet.replace(urlRegex, "");
  const trimmedText = textWithoutUrls.trim();
  return trimmedText;
}

const Content = () => {
  const { fontSize, tweet, cardColor } = useContext(AppContext);

  const photos = tweet?.photos;
  const tweetText = extractTweetText(
    tweet?.text ||
      `Start creating beautiful images of your 
    posts by entering your input link above and sharing it with others.`
  );
  const tweetWithLineBreaks = tweetText.replace(/\n/g, "<br>");

  return (
    <div className="mt-2">
      <p
        className={`${fontSize} mx-2  mb-2 
        opacity-80
        ${cardColor == "Dark" ? "text-gray-100" : "text-gray-800"}
        `}
        dangerouslySetInnerHTML={{ __html: tweetWithLineBreaks }}
      />

      <div className="relative flex transform-gpu snap-x snap-mandatory space-x-4 overflow-x-auto">
        <div className="shrink-0 snap-center sm:w-2" />
        {photos?.map((photo) => (
          <Image
            key={photo.url}
            src={photo.url}
            title={photo.url}
            alt={photo.url}
            width={photo.width}
            height={photo.height}
            className="h-64 w-5/6 shrink-0 snap-center snap-always rounded-xl  object-cover shadow-sm"
          />
        ))}
        <div className="shrink-0 snap-center sm:w-2" />
      </div>
    </div>
  );
};

export default Content;
