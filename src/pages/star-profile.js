import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Profile from '../components/StarProfile/Profile';

export default function StarProfile() {
    let params = useParams();
    let id = params.id;
    const [starInfo, setStarInfo] = useState();
    const [loading, setLoading] = useState(true);

    const populateStarInfo = async () => {
        const response = await fetch(`http://localhost:3000/stars/${id}`);
        const data = await response.json();
        setStarInfo(data);
        setLoading(false);
    }

    useEffect(()=>{
        populateStarInfo();
    },[])

    const render = () =>{
        return (
           <Profile data={starInfo}/>
        );
    }

    let content = "";
    if (!loading) {
        content = render();
    }else {
        content = "loading";
    }

  return (
    <>
        {content}
    </>
);
}