/* eslint-disable react/jsx-no-target-blank */
import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="home__milkshake">
        <h1>Greetings</h1>
        <h4>
          I'm Daniel(not Day)Lewis. <br />I do not drink your milkshake.
        </h4>
        <p>(click the milkshake if you need a reference)</p>
        <a
          className="home__milkshake-img"
          href="https://www.youtube.com/watch?v=a5d9BrLN5K4"
          target="_blank"
        >
          <img src="./img/emoji-milkshake.png" alt="milkshake emoji" />
        </a>
      </div>

      <div className="home__select">
        <a className="home__dev" href="/developer" target="_blank">
          <img src="./img/emoji-programmer.png" alt="techie emoji" />
        </a>
        <a className="home__copy" href="/copywriter" target="_blank">
          <img src="./img/emoji-write.png" alt="writing emoji" />
        </a>
        <a className="home__actor" href="/actor" target="_blank">
          <img src="./img/emoji-acting.png" alt="acting emoji" />
        </a>
      </div>
    </div>
  );
}

export default Home;
