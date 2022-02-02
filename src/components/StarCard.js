import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function StarCard({starInfo}) {
let navigate = useNavigate();

  return (
    <div className='card' onClick={(e)=>navigate(`/star/profile/${starInfo.id}`)} >
        <div className='card-left'>
            <h1 className='card-name'>{starInfo.name}<br></br>{starInfo.surname}</h1>
            {starInfo.links !== undefined && 
            <div className='link-list'>
                <h2>Links:</h2>
                {starInfo.links.map((link, id)=>
                <a href={link.url} target="_blank">{link.site}</a>
                )}
            </div>
            }
        </div>
        <div className='profile-image'>
            <img src={starInfo.picture} className="profile-picture"/>
        </div>
        {/* <p>From: {starInfo.from}</p> */}
        </div>
    );
}
