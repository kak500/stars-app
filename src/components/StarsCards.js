import React from 'react';
import StarCard from './StarCard';
import "./StarCard.css"

export default function StarsCards({starsList}) {

  return (
      starsList.map((starInfo, id)=>
        <StarCard starInfo={starInfo}/>
      )
  );
}
