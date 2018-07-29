import React from 'react';
import Tweet from '../components/Tweet';

const TwitterFeed = (props) => {
  let tweets = props.data.map(tweet => {
   return(
      <Tweet
         key={tweet.id_str}
         username={tweet.user.name}
         screen_name={tweet.user.screen_name}
         profile_image_url={tweet.user.profile_image_url}
         text={tweet.text}
         retweet_count={tweet.retweet_count}
         favorite_count={tweet.favorite_count}
         favorited={tweet.favorited}
         retweeted={tweet.retweeted}
         timestamp_ms={tweet.timestanp_ms}
      />
   )
 });

  return(
    <div>
    {tweets}
    </div>
  )
 };

export default TwitterFeed;
