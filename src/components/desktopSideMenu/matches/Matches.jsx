import React from "react";
import "./matches.scss"
import matchesImg from "../../../assets/png/matches.png";


const Matches = () => {
  return (
    <div className="match_wrapper">
      <p className="match_matches">Matches</p>
      <div className="match_body_content">
        <img src={matchesImg} alt="matches" className="match_body_img" />
        <p className="match_body_text1">Start Matching</p>
        <p className="match_body_text2">
          Discover compatible matches by Liking profiles and initiate
          conversation with them directly from this section
        </p>
      </div>
    </div>
  );
};

export default Matches;
