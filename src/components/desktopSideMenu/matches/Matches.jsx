import React from "react";
import "./matches.scss";
import matchesImg from "../../../assets/png/matches.png";
import { useNavigate } from "react-router-dom";

const Matches = () => {
  const navigate = useNavigate();
  return (
    <div className="match_wrapper">
      <p className="match_matches">Matches</p>
      <div className="match_body_content">
        <img
          onClick={() => navigate("/main/home")}
          src={matchesImg}
          alt="matches"
          className="match_body_img"
        />
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
