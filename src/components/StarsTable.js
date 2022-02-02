import React from 'react';
// import { useEffect, useState } from 'react';

export default function StarsTable({getId: setId, starsList}) {
    // const [starsList, setStarsList] = useState(props.starsList);

    // const populateStars = async () => {
    //     const response = await fetch(`http://localhost:3000/stars`);
    //     const data = await response.json();
    //     setStarsList(data);
    // }

    // useEffect(()=>{
    //     populateStars();
    // },[])

    // const changeFavorite = (id) => async (e) =>{
    //     console.log(id);
    //     const requestOptions = {
    //         method: "PATCH",
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({favorite: e.target.checked})
    //     }
    //     await fetch(`http://localhost:3000/stars/${id}`, requestOptions).then();
    //     populateStars();
    // }

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>surname</th>
                    <th>favorite</th>
                </tr>
            </thead>
            <tbody>
                {starsList.map((star,id) => 
                    <tr key={id}>
                        <td>{star.id}</td>
                        <td><span>{star.name}</span></td>
                        <td><span>{star.surname}</span></td>
                        <td><input type="checkbox" checked={star.favorite} onChange={setId(star.id)}/></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  );
}