import React from 'react';
import { useEffect, useState } from 'react';
import StarsCards from '../components/StarsCards';

export default function StarsGallery() {
    const [starsList, setStarsList] = useState([]);

    const populateStars = async () => {
        const response = await fetch(`http://localhost:3000/stars`);
        const data = await response.json();
        setStarsList(data);
    }

    useEffect(()=>{
        populateStars();
    },[])  

  return (
    <div className='cards'>
        <StarsCards starsList={starsList}/>
    </div>
  );
}
