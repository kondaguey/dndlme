/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";

import { AiOutlineArrowDown, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineArrowUp } from 'react-icons/ai';

function Copywriter() {
  const [embedURL] = useState(
    "https://docs.google.com/document/d/e/2PACX-1vSNbfQobuuvkFdfRQLYY04nUAFtjXkzTsaI4CBQ3HBVfnApEJNPb4s5oOPXZ_Sci5FqaScN7mpQGbZb/pub?embedded=true"
  );

  return (
    <div className="copy">
      {/* <div className="copy__header">
        <h1 className="copy__header-title typewriter-font">/copywriter</h1>
        <h2 className="copy__header-subtitle">selected work - transformational / content</h2>
      </div>

      <div className="copy__document">
        <iframe title="pdf" src={embedURL} width="800" height="1150">
       
        </iframe>
        
      </div> 

      <div className="copy__audio">
        <p>
          . . . being that I'm also a proferssional voice actor, I even decided
          to throw in a bonus voiceover of the article for the client. On the
          house.
        </p>
        <audio
          controls
          className="copy__audio-clip"
          src="./media/sample-audio.mp3"
        ></audio>
      </div>

       */}

      <div className="copy__header">
        <h1>/copywriter</h1>
        <h2>ingredients that help: </h2>
        <p>+ tastefully sardonic</p>
        <p>+ natural comedic ability (arguably cannot be taught)</p>
        <p>+ pro actor and improvisor</p>
        <p>+ screenplay writer</p>
        <p>+ 70+ audiobooks narrated</p>
        <p>+ snooty private high school</p>
        <p>+ snootier world-class drama degree</p>
        <p>+ venti in Spanish, grande in Korean</p>
        <p>+ otherwise, here's an everyman <a href="./media/CopywriterResume.pdf" target="_blank"> resume</a></p>
      </div>

      <div className="copy__container">

        <div className="copy__container__circle">

        <span className="copy__container__circle__arrow copy__container__circle__arrow-left"> <AiOutlineArrowLeft /></span>
        <span className="copy__container__circle__arrow copy__container__circle__arrow-up"><AiOutlineArrowUp /></span>
        <span className="copy__container__circle__arrow copy__container__circle__arrow-right"><AiOutlineArrowRight /></span>
        <p className="copy__container__circle__port">portfolio</p>
        <span className="copy__container__circle__arrow copy__container__circle__arrow-down-1"><AiOutlineArrowDown /></span>
        <span className="copy__container__circle__arrow copy__container__circle__arrow-down-2"><AiOutlineArrowDown /></span>
        </div>

        <div className="copy__container__direct">
        <a href="./media/Daniel_Lewis_Direct.pdf" target="_blank"><h2>Direct</h2></a>
        </div>

        <div className="copy__container__transform">
        <a href="./media/Daniel_Lewis_Story.pdf" target="_blank"><h2>Storytelling</h2></a>
        </div>

        <div className="copy__container__creative">
        <a href="/creativewriter"><h1>/creativewriter</h1></a>
        </div>

        <div className="copy__container__content">
        <a href="./media/Daniel_Lewis_Content.pdf" target="_blank"><h2>Content + <br/>SEO</h2></a>
        </div>

        <div className="copy__container__brand">
        <a href="./media/Daniel_Lewis_Brand.pdf" target="_blank"><h2>Brand</h2></a>
        </div>

      </div>

      <div className="copy__feedback">
        <p>client feedback . . .</p>
        <img src="./img/feedback.png" alt="client feedback" />
      </div>
    </div>
  );
}

export default Copywriter;
