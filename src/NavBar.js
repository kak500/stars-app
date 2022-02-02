import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
        <ul>
            <li>
              <Link to={'/stars'}>Stars</Link>
            </li>
            <li>
              <Link to={'/stars-gallery'}>Gallery</Link>
            </li>
            <li>nav3</li>
            <li>nav4</li>
        </ul>
    </nav>
  );
}
