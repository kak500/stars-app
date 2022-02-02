import React from 'react';
import SearchBar from '../components/SearchBar';
import StarsTable from '../components/StarsTable';
import { useEffect, useState } from 'react';

export default function Stars({children}) {
    const [starsListDefaut, setStarsListDefaut] = useState([]);
    const [starsList, setStarsList] = useState([]);
    const [input, setInput] = useState('');

    const populateStars = async (mode) => {
        const response = await fetch(`http://localhost:3000/stars`);
        const data = await response.json();
        setStarsList(data);
        setStarsListDefaut(data);
    }

    useEffect(()=>{
        populateStars();
    },[])

    const updateInput = async (input) => {
        const filtered = starsListDefaut.filter(star => {
         return star.name.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        setStarsList(filtered);
    }

    const changeFavorite = (starId) => async (e) =>{
        console.log(starId);
        const requestOptions = {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({favorite: e.target.checked})
        }
        await fetch(`http://localhost:3000/stars/${starId}`, requestOptions).then();
        populateStars();
    } 

  return (
      <div>
          <h1>Stars List</h1>
          <SearchBar input={input} onChange={updateInput}/>
          <StarsTable starsList={starsList} getId={changeFavorite}/>
      </div>
  );
}