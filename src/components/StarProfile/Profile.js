import React from 'react';
import "./Profile.css"

export default function Profile({data: starInfo}) {
  console.log(starInfo);
  return (
    <>
    <div className='avatar'>
      <h1 className='avatar-name'>{starInfo.name} {starInfo.surname}</h1>
      <div className='profile-image'>
        <img src={starInfo.picture} className="profile-picture"/>
      </div>
      <p>From: {starInfo.from}</p>
      {starInfo.links !== undefined && 
      <div className='link-list'>
        <h2>Links:</h2>
        {starInfo.links.map((link, id)=>
          <a href={link.url}>{link.site}</a>
        )}
      </div>
      }
    </div>
  </>
  );
}