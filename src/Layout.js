import React from 'react';
import Header from './Header';
import NavBar from './NavBar';

export default function Layout({children}) {
  return (
    <React.Fragment>
    <div className="Layout">
      <div className="container">
        <Header title='Stars Site'/>
        <div className="main">
            <NavBar/>
            <main>
                {children}
            </main>
        </div>
        <footer>footer</footer>
        </div>  
    </div>
    </React.Fragment>
 );
}