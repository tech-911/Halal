import React, { useEffect, useState } from "react";
import "./exploreSide.scss";
import ExploreWidget from "../exploreWidget/ExploreWidget";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { baseUrlUserActions } from "../../BaseUrls/base";
import { exploreDataAction } from "../../redux/slices/exploreDataSlice";
import { useNavigate } from "react-router-dom";
import Empty1 from "../../assets/png/emptyStatesImg/Fashion blogging-cuate.png";
import Empty2 from "../../assets/png/emptyStatesImg/Popcorns-amico.png";
const ExploreSide = () => {
  const [toggle, setToggle] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userDataSlice);
  const exploreData = useSelector((state) => state.exploreDataSlice);

  useEffect(() => {
    const getlikedme = async () => {
      try {
        const res = await axios.post(
          `${baseUrlUserActions}/likedme`,
          { email: user.email },
          { headers: { "auth-token": user.token } }
        );
        dispatch(exploreDataAction(res.data));
      } catch (err) {
        console.log(err);
      }
    };
    const getiliked = async () => {
      try {
        const res = await axios.post(
          `${baseUrlUserActions}/iliked`,
          { email: user.email },
          { headers: { "auth-token": user.token } }
        );
        console.log(res.data);
        dispatch(exploreDataAction(res.data));
      } catch (err) {
        console.log(err);
      }
    };
    if (toggle === 0) {
      getlikedme();
    } else if (toggle === 1) {
      getiliked();
    }
  }, [toggle]);
  return (
    <div className="expside_wrapper">
      <p className="expside_head">Explore</p>
      <div className="expside_toggle_wrap">
        <div
          onClick={() => {
            setToggle(0);
          }}
          className={`expside_toggle1 ${
            toggle ? "" : "expside_toggle1_active"
          }`}
        >
          Liked me
        </div>
        <div
          onClick={() => {
            setToggle(1);
          }}
          className={`expside_toggle2 ${
            toggle ? "expside_toggle2_active" : ""
          }`}
        >
          I Liked
        </div>
      </div>
      <div
        className={`${
          exploreData.length === 0
            ? "expside_body_content_empty"
            : "expside_body_content"
        }`}
      >
        {exploreData.length === 0 ? (
          <div className="expside_emptyState_wrap">
            <img
              src={toggle ? Empty1 : Empty2}
              alt={toggle ? "Empty1" : "Empty2"}
              className="expside_emptyimg1"
            />
            <h1 className="expside_empty_head">
              {toggle ? "I Liked " : "Liked Me"}
            </h1>
            <p className="expside_empty_text">
              A list of users who have shown interest in your profile, giving
              you the opportunity to connect with those who have liked you.
            </p>
          </div>
        ) : (
          exploreData.map((value, id) => {
            return (
              <div
                onClick={() => navigate(`/main/explore/${id}`)}
                key={id + 1}
                className="expside_widget_links"
              >
                <ExploreWidget
                  img={value?.photo[0]}
                  work={value?.profession}
                  location={value?.location}
                  age={25}
                  name={value?.name}
                  key={id}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ExploreSide;
