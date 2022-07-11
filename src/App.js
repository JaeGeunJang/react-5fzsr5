import React from 'react';
import './style.css';

function HeaderTag(){
  return <header>
  <h1>
    <a href="index.html">WEB</a>
  </h1>
</header>
}

function NavTag(){
  return <nav>
        <ol>
          <li>
            <a href="read/1.html">html</a>
          </li>
          <li>
            <a href="read/2.html">CSS</a>
          </li>
          <li>
            <a href="read/3.html">JavaScript</a>
          </li>
        </ol>
  </nav>
}

function ArtTag(){
  return <article>
        <h2>Welcome</h2>
        hello web!
      </article>
}

export default function App() {
  return (
    <div className="APP">
      <HeaderTag></HeaderTag>

      <NavTag></NavTag>

      <ArtTag></ArtTag>
    </div>
  );
}
