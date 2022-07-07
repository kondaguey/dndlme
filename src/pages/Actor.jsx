import React from "react";

function Actor() {
  return (
    <div className="actor">



      <div className="actor__header">
        <div className="actor__header-title"><h1>/actor</h1></div>
        <span><a className="actor__header-resume" href="./media/ActorResume.pdf" target="_blank"><h2>resume</h2></a></span>
      </div>

      <p className="actor__paragraph">
        I am still accepting some professional voiceover work. Otherwise this dude is on indefinite hiatus as I work on other career aspirations (i.e. development and design). <br /><br />But do check out my resume above if you're curious. {" "}
      </p>
    
    </div>
  );
}

export default Actor;
