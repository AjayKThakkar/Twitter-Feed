import React from 'React';

let displayMessagereply = (event) => alert("please confirm your reply")
let displayMessageretweet = (event) => alert("please confirm your retweet")
let displayMessagelike = (event) => alert("please confirm your like")
let displayMessagemore = (event) => alert("please confirm more")


const Tweet = (props) =>{
return(
  <div className='tweet'>
   <div className='profile picture'>
    <img src ={props.profile_image_url}/>
  </div>

  <h3 className='user-date-info'>
   <div Classname='user-name'>
    {props.username}
   </div>
   {props.screen_name}
   {props.timestamp_ms}
  </h3>

  <p className='tweet-text'>
  {props.text}
  </p>

  <div className='action-icons'>
  <i className="fa fa-reply  big-space" onClick={displayMessagereply} aria-hidden="true"/>

  <i className="fa fa-retweet icon-green lil-space" onClick={displayMessageretweet} aria-hidden="true"/>
  {props.retweet_count}

  <i className="fa fa-heart icon-red lil-space" onClick={displayMessagelike} aria-hidden="true"/>
  {props.favorite_count}

  <i className="fas fa-ellipsis-h big-space" onClick={displayMessagemore}></i>
  </div>
</div>
 )
}

export default Tweet;
