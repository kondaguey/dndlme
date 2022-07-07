/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import MenuBar from "../components/MenuBar";
import Card from "../components/Card";

function Developer() {
  return (
    <div className="dev">
      <div className="dev__header">
        <h1>/developer</h1>
        <a
          icon="./img/favicon.png"
          href="./media/DeveloperResume.pdf"
          target="_blank"
        >
          <h2>rapidly improving resume</h2>
        </a>
      </div>

      <div className="dev__projects">
        <h2>projects</h2>

        <p className="dev__projects__explainer">
          Portfolio piece no. 1. This website. Cooked from scratch, it's a place
          for me to eagerly apply my craft of development and design. As my
          skills and practice evolve, so will the functionality and look of this
          site.
        </p>

        <Card
          project="Rolling Real Estate"
          image="./img/rolling.png"
          url="https://rolling-real-estate.pages.dev/"
          language="Advanced CSS"
          skill="Advanced Grids"
        />

        <Card
          project="Do I Feel Lucky?"
          image="./img/lucky.png"
          url="https://do-you-feel-lucky.pages.dev/"
          language="Vanilla JavaScript / DOM"
          skill="Game Logic, CSS Grids + Flexbox"
        />
        <Card
          project="Wanderlust"
          image="./img/lust.png"
          url="https://kondaguey.github.io/wanderlust-css-portfolio/public/index.html"
          language="Advanced CSS"
          skill="Flexbox"
        />
        <Card
          project="Natours"
          image="./img/natours.png"
          url="https://kondaguey.github.io/Natours/public/index.html"
          language="Advanced CSS"
          skill="Animations"
        />
        <Card
          project="Keeper App"
          image="./img/keeper.png"
          url="https://kondaguey.github.io/another-keeper-app/"
          language="Intermediate React.js"
          skill="React Hooks "
        />

        <Card
          project=" Under construction"
          image="./img/construction.png"
          language="Advanced React.js, MERN"
          skill="Fullstack Web App Development"
        />

        <Card
          project="Under construction"
          image="./img/construction.png"
          language="Solidity, Motoko"
          skill="Web3 Marketplace and DApp"
        />
      </div>

      <div className="dev__skills">
        <h3>Tech stack for the keen-eyed</h3>
        <div className="dev__skills__skill dev__skills__skill-1">
          <h3>Structure and Styles</h3>
          <img src="./img/tech-logo-1.png" alt="img" />
          <p>
            My styling workflow looks like a nice combo of the{" "}
            <a
              href="https://www.learnhowtoprogram.com/user-interfaces/building-layouts-preprocessors/7-1-sass-architecture"
              target="_blank"
            >
              7-1 Sass file architecture
            </a>{" "}
            with{" "}
            <a href="http://getbem.com/naming/" target="_blank">
              BEM-naming conventions
            </a>
            .
          </p>
        </div>

        <div className="dev__skills__skill dev__skills__skill-2">
          <h3>JS Stack</h3>
          <img src="./img/tech-logo-2.png" alt="img" />
          <p>
            With{" "}
            <a
              href="https://stackoverflow.com/questions/20435653/what-is-vanillajs"
              target="_blank"
            >
              Vanilla Javascript
            </a>{" "}
            down, I chose{" "}
            <a
              href="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
              target="_blank"
            >
              ReactJS
            </a>{" "}
            as my go-to frontend library. I love working with components as it
            helps me tackle a series of smaller problems rather than feeling
            overwhelmed by one large one. Coupled with NodeJS, building
            server-side with Express, I've fallen into a nice stack.
          </p>
        </div>

        <div className="dev__skills__skill dev__skills__skill-3">
          <h3>NoSQL DB Stack</h3>
          <img src="./img/tech-logo-3.png" alt="img" />
          <p>
            Given that I've become quite fond of the{" "}
            <a href="https://www.mongodb.com/mern-stack" target="_blank">
              MERN
            </a>{" "}
            Stack, MondoDB enhanced with Mongoose is my database workflow of
            choice.
          </p>
        </div>

        <div className="dev__skills__skill dev__skills__skill-4">
          <h3>Blockchain / Web3 Stack</h3>
          <img src="./img/tech-logo-4.png" alt="img" />
          <p>
            In addition to{" "}
            <a
              href="https://www.makeuseof.com/what-is-solidity/"
              target="_blank"
            >
              Solidity,
            </a>{" "}
            I'm learning{" "}
            <a
              href="https://www.youtube.com/watch?v=4eSceDOS-Ms"
              target="_blank"
            >
              Motoko
            </a>{" "}
            from the{" "}
            <a href="https://dfinity.org/" target="_blank">
              DFINITY Foundation
            </a>{" "}
            to launch 100% on-chain DApps to the{" "}
            <a
              href="https://www.youtube.com/watch?v=rMuCZuPllEE"
              target="_blank"
            >
              ICP (Internet Computer Protocol)
            </a>
            . I'm exploring with{" "}
            <a href="https://hardhat.org/" target="_blank">
              Hardhat
            </a>{" "}
            and{" "}
            <a href="https://moralis.io/" target="_blank">
              Moralis
            </a>{" "}
            as well.
          </p>
        </div>
      </div>

      <div className="dev__construct">
        <img src="./img/construct.png" alt="construct img" />
      </div>
    </div>
  );
}

export default Developer;
