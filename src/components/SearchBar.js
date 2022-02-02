import React from 'react';

export default function SearchBar({input:keyword, onChange:setKeyword}) {
    // console.log(keyword);
//   return (
//     // <input type="text" id="search-input" placeholder="Search" onChange={props.func}/>
//     //   <form>
//     //       <label htmlFor="search-input">Search</label>
//     //       <input type="text" id="search-input" placeholder="Search" value={keyword} onChange={(e)=> setKeyword(e.target.value)}/>
//     //       <button type='submit'>Search</button>
//     //   </form>
//   );

  return (
    <input
     value={keyword}
     placeholder={"search"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}