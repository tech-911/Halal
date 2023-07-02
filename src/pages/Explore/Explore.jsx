import ExploreWidget from "../../components/exploreWidget/ExploreWidget";
import { useDispatch, useSelector } from "react-redux";
import { exploreDataAction } from "../../redux/slices/exploreDataSlice";
import { useNavigate } from "react-router-dom";
import Empty1 from "../../assets/png/emptyStatesImg/Fashion blogging-cuate.png";
import Empty2 from "../../assets/png/emptyStatesImg/Popcorns-amico.png";
import React, { useEffect, useRef, useState } from "react";
import "./explore.scss";
import profile from "../../assets/png/img.jpeg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseUrlUserActions } from "../../BaseUrls/base";
import axios from "axios";
import NigeriaFlag from "../../assets/png/nigeriaflag.png";
import { GiBodyHeight, GiBigDiamondRing } from "react-icons/gi";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdLocationPin,
  MdDateRange,
  MdOutlineBlock,
} from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { RiShoppingBagFill, RiFlagLine } from "react-icons/ri";
import { AiTwotoneHeart } from "react-icons/ai";
import { BsFillChatRightFill } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import child from "../../assets/png/profileIcons/child.png";
import relation from "../../assets/png/profileIcons/relation.png";
import bloodgroup from "../../assets/png/profileIcons/bloodGroup.png";
import genoType from "../../assets/png/profileIcons/genotype.png";
import skinColor from "../../assets/png/profileIcons/skinColor.png";
import Religiosity from "../../assets/png/profileIcons/religion.png";
import prayStatus from "../../assets/png/profileIcons/pray.png";
import drinkStatus from "../../assets/png/profileIcons/drink.png";
import smokeStatus from "../../assets/png/profileIcons/smoke.png";
import education from "../../assets/png/profileIcons/education.png";
import work from "../../assets/png/profileIcons/work.png";
import listen from "../../assets/png/profileIcons/twemoji_ear.png";
import create from "../../assets/png/profileIcons/noto_artist-palette.png";
import fun from "../../assets/png/profileIcons/moji.png";
import coffee from "../../assets/png/profileIcons/twemoji_teacup-without-handle.png";
import flag from "../../assets/png/profileIcons/nigFlag.png";
import lang from "../../assets/png/profileIcons/language.png";
import InfoWidget from "../../components/infoWidget/InfoWidget";
import { useParams } from "react-router-dom";
const Explore = () => {
  const slickRef = useRef(null);
  const exploreData = useSelector((state) => state.exploreDataSlice);
  const { id: paramsid } = useParams();
  const [data, setData] = useState(exploreData);
  const [arrow, setArrow] = useState(0);
  const [count, setCount] = useState(0);
  const [drop, setDrop] = useState(0);
  const [height, setHeight] = useState();
  const { user } = useSelector((state) => state.userDataSlice);
  const [position, setPosition] = useState(paramsid);
  const [toggle, setToggle] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
  };
  useEffect(() => {
    setData(exploreData);
  }, [exploreData]);
  useEffect(() => {
    setPosition(paramsid);
  }, [paramsid]);
  const Next = () => {
    if (arrow < 1) {
      setArrow(1);
    }
    if (count < data[position]?.photo.length) {
      setCount((state) => state + 1);
    }

    slickRef.current.slickNext();
  };
  const Prev = () => {
    if (count > 0) {
      setCount((state) => state - 1);
    }
    if (count === 0) {
      setArrow(0);
    }
    slickRef.current.slickPrev();
  };

  const handleReact = async (reactType) => {
    try {
      await axios.post(
        `${baseUrlUserActions}/reacted`,
        {
          email: user.email,
          action: reactType,
          reactEmail: data[position]?.email,
        },
        {
          headers: {
            "auth-token": user.token,
          },
        }
      );
    } catch (err) {
      console.log(err);
      if (err?.response?.data?.message === "user already liked") {
        return;
      } else if (err?.response?.data?.message === "user already unliked") {
        return;
      } else {
        toast.error(`Error liking ${data[position]?.name}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  };

  useEffect(() => {
    console.log("this is window height", window.innerHeight);
  
    window.innerWidth > 768
      ? setHeight(Math.floor(0.9 * window.innerHeight))
      : setHeight(Math.floor(0.95 * window.innerHeight));
  }, [window.innerHeight]);

  return (
    <div className="explore_container">
      <ToastContainer />
      {/** */}
      <div 
       style={{ height: `${height}px` }}
      className="explore_wrapper ">
        <Slider className="explore_carousel" {...settings} ref={slickRef}>
          {data[position]?.photo.map((value, id) => {
            return (
              <img
                key={id}
                className="explore_item"
                src={value}
                alt={`profile${id}`}
              />
            );
          })}
        </Slider>
        <div className="explore_arrow_wrap">
          <MdKeyboardArrowLeft
            onClick={Prev}
            className={`explore_arrowleft ${
              arrow ? "" : "explore_arrowleft_off"
            }`}
          />

          <MdKeyboardArrowRight
            onClick={Next}
            className={`explore_arrowright`}
          />
        </div>
        {drop ? (
          ""
        ) : (
          <div className="explore_body">
            <h1 className="explore_name">
              {data[position]?.name.split(" ")[0]}
            </h1>
            <div className="explore_details">
              <div className="explore_location_wrap">
                <MdLocationPin className="explore_location_icon" />
                <img src={NigeriaFlag} alt="ng_flag" className="explore_flag" />
                <p className="explore_location_name">
                  {data[position]?.location}
                </p>
              </div>
              <button
                onClick={() => setDrop(!drop)}
                className="explore_moredetails"
              >
                View
              </button>
            </div>
            <div className="explore_occupation_wrap">
              <div className="explore_occupation">
                <RiShoppingBagFill className="explore_occupation_icon" />
                <p className="explore_occupation_name">
                  {data[position]?.profession}
                </p>
              </div>
            </div>
            <div className="explore_actions_wrap">
              <div onClick={() => handleReact("like")} className="explore_like">
                <AiTwotoneHeart className="explore_likeicon" />
              </div>
              <div className="explore_chat">
                <BsFillChatRightFill className="explore_chaticon" />
              </div>
              <div
                onClick={() => handleReact("unlike")}
                className="explore_reject"
              >
                <CgClose className="explore_rejecticon" />
              </div>
            </div>
          </div>
        )}
        {drop ? (
          <button onClick={() => setDrop(!drop)} className="explore_goback">
            Go Back
          </button>
        ) : (
          ""
        )}
      </div>
      <div
        className={`explore_drop ${
          !drop ? "explore_drop_close" : "explore_drop_open"
        }`}
      >
        <h1 className="expdrop_name">{data[position]?.name.split(" ")[0]}</h1>
        <div className="expdrop_about">
          <h2 className="expdrop_about_head">About me</h2>
          <div className="expdrop_about_items">
            <InfoWidget
              Icon={<GiBodyHeight className="infowid_icon" />}
              text={"226cm (7'5)"}
            />
            <InfoWidget
              Icon={<GiBigDiamondRing className="infowid_icon" />}
              text={"Divorced"}
            />
            <InfoWidget img={child} text={"Children"} />
            <InfoWidget
              Icon={<MdDateRange className="infowid_icon" />}
              text={data[position]?.marital_status}
            />
            <InfoWidget img={relation} text={"Relationship"} />
          </div>
        </div>
        <div className="expdrop_bio">
          <h2 className="expdrop_bio_head">Bio</h2>
          <div className="expdrop_bio_items">
            "Divorcee, single mom, and product manager looking for someone who
            understands the complexities of life and is ready for something
            serious. I'm a 24-year-old woman who's driven and ambitious, but
            also looking for someone who can accept me for who I am. Let's build
            something real together."
          </div>
        </div>
        <div className="expdrop_describe">
          <h2 className="expdrop_describe_head">
            Describe the person you want
          </h2>
          <div className="expdrop_describe_items">
            "Divorcee, single mom, and product manager looking for someone who
            understands the complexities of life and is ready for something
            serious. I'm a 24-year-old woman who's driven and ambitious, but
            also looking for someone who can accept me for who I am. Let's build
            something real together."
          </div>
        </div>
        <div className="expdrop_health">
          <h2 className="expdrop_health_head">Health/Appearance</h2>
          <div className="expdrop_health_items">
            <InfoWidget img={bloodgroup} text={"Blood Group B"} />
            <InfoWidget img={genoType} text={"Genotype: AA"} />
            <InfoWidget img={skinColor} text={"Skin Color: Fair skin"} />
          </div>
        </div>
        <div className="expdrop_religion">
          <h2 className="expdrop_religion_head">Religiosity</h2>
          <div className="expdrop_religion_items">
            <InfoWidget img={Religiosity} text={"Very practicing"} />
            <InfoWidget img={prayStatus} text={"Always pray"} />
            <InfoWidget img={drinkStatus} text={"I don't drink"} />
            <InfoWidget img={smokeStatus} text={"I don't smoke"} />
          </div>
        </div>
        <div className="expdrop_education">
          <h2 className="expdrop_education_head">Education/Profession</h2>
          <div className="expdrop_education_items">
            <InfoWidget img={education} text={"Doctorate"} />
            <InfoWidget img={work} text={"Product Manager"} />
          </div>
        </div>
        <div className="expdrop_personality">
          <h2 className="expdrop_personality_head">Personality</h2>
          <div className="expdrop_personality_items">
            <InfoWidget img={listen} text={"Active Listener"} />
            <InfoWidget img={create} text={"Creative"} />
            <InfoWidget img={fun} text={"Funny"} />
          </div>
        </div>
        <div className="expdrop_interest">
          <h2 className="expdrop_interest_head">Interest</h2>
          <div className="expdrop_interest_items">
            <InfoWidget img={listen} text={"Films & Cinema"} />
            <InfoWidget img={create} text={"Design"} />
            <InfoWidget img={coffee} text={"Coffee"} />
          </div>
        </div>
        <div className="expdrop_language">
          <h2 className="expdrop_language_head">Language and Ethnicity</h2>
          <div className="expdrop_language_items">
            <InfoWidget img={flag} text={"Nigerian West Africa"} />
            <InfoWidget img={lang} text={"English"} />
          </div>
        </div>
        <div className="expdrop_action_wrap">
          <div className="expdrop_block">
            <MdOutlineBlock className="expdrop_block_icon" />
            <p className="expdrop_block_text">Block</p>
          </div>
          <div className="expdrop_report">
            <RiFlagLine className="expdrop_report_icon" />
            <p className="expdrop_report_text">Report</p>
          </div>
          <div className="expdrop_fav">
            <FiHeart className="expdrop_fav_icon" />
            <p className="expdrop_fav_text">Add to Favorite</p>
          </div>
        </div>
      </div>
      {/* //---------------------mobile view explore-----------------------------↓ */}
      <div className="exploremob_wrapper">
        <p className="exploremob_head">Explore</p>
        <div className="exploremob_toggle_wrap">
          <div
            onClick={() => {
              setToggle(0);
            }}
            className={`exploremob_toggle1 ${
              toggle ? "" : "exploremob_toggle1_active"
            }`}
          >
            Liked me
          </div>
          <div
            onClick={() => {
              setToggle(1);
            }}
            className={`exploremob_toggle2 ${
              toggle ? "exploremob_toggle2_active" : ""
            }`}
          >
            I Liked
          </div>
        </div>
        <div className="exploremob_body_content_wrapper">
          <div
            className={`${
              exploreData.length === 0
                ? "exploremob_body_content_empty"
                : "exploremob_body_content"
            }`}
          >
            {exploreData.length === 0 ? (
              <div className="exploremob_emptyState_wrap">
                <img
                  src={toggle ? Empty1 : Empty2}
                  alt={toggle ? "Empty1" : "Empty2"}
                  className="exploremob_emptyimg1"
                />
                <h1 className="exploremob_empty_head">
                  {toggle ? "I Liked " : "Liked Me"}
                </h1>
                <p className="exploremob_empty_text">
                  A list of users who have shown interest in your profile,
                  giving you the opportunity to connect with those who have
                  liked you.
                </p>
              </div>
            ) : (
              exploreData.map((value, id) => {
                return (
                  <div
                    onClick={() => navigate(`/main/exploremob/${id}`)}
                    key={id + 1}
                    className="exploremob_widget_links"
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
      </div>
      {/* //---------------------mobile view explore-----------------------------↑ */}
    </div>
  );
};

export default Explore;
