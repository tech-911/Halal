import React, { useEffect, useRef, useState } from "react";
import "./exploredetailmobile.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseUrlUserActions } from "../../BaseUrls/base";
import axios from "axios";
import { useSelector } from "react-redux";
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
const ExploreDetailMobile = () => {
  const slickRef = useRef(null);
  const exploreData = useSelector((state) => state.exploreDataSlice);
  console.log(exploreData);
  const { mobid: paramsid } = useParams();
  const [data, setData] = useState(exploreData);
  const [arrow, setArrow] = useState(0);
  const [count, setCount] = useState(0);
  const [drop, setDrop] = useState(0);
  const [height, setHeight] = useState();
  const { user } = useSelector((state) => state.userDataSlice);
  const [position, setPosition] = useState(paramsid);
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
    <div className="exploredetmob_container">
      <ToastContainer />
      <div
       style={{ height: `${height}px` }}
      className="exploredetmob_wrapper ">
        <Slider className="exploredetmob_carousel" {...settings} ref={slickRef}>
          {data[position]?.photo.map((value, id) => {
            return (
              <img
                key={id}
                className="exploredetmob_item"
                src={value}
                alt={`profile${id}`}
              />
            );
          })}
        </Slider>
        <div className="exploredetmob_arrow_wrap">
          <MdKeyboardArrowLeft
            onClick={Prev}
            className={`exploredetmob_arrowleft ${
              arrow ? "" : "exploredetmob_arrowleft_off"
            }`}
          />

          <MdKeyboardArrowRight
            onClick={Next}
            className={`exploredetmob_arrowright`}
          />
        </div>
        {drop ? (
          ""
        ) : (
          <div className="exploredetmob_body">
            <h1 className="exploredetmob_name">
              {data[position]?.name.split(" ")[0]}
            </h1>
            <div className="exploredetmob_details">
              <div className="exploredetmob_location_wrap">
                <MdLocationPin className="exploredetmob_location_icon" />
                <img
                  src={NigeriaFlag}
                  alt="ng_flag"
                  className="exploredetmob_flag"
                />
                <p className="exploredetmob_location_name">
                  {data[position]?.location}
                </p>
              </div>
              <button
                onClick={() => setDrop(!drop)}
                className="exploredetmob_moredetails"
              >
                View
              </button>
            </div>
            <div className="exploredetmob_occupation_wrap">
              <div className="exploredetmob_occupation">
                <RiShoppingBagFill className="exploredetmob_occupation_icon" />
                <p className="exploredetmob_occupation_name">
                  {data[position]?.profession}
                </p>
              </div>
            </div>
            <div className="exploredetmob_actions_wrap">
              <div
                onClick={() => handleReact("like")}
                className="exploredetmob_like"
              >
                <AiTwotoneHeart className="exploredetmob_likeicon" />
              </div>
              <div className="exploredetmob_chat">
                <BsFillChatRightFill className="exploredetmob_chaticon" />
              </div>
              <div
                onClick={() => handleReact("unlike")}
                className="exploredetmob_reject"
              >
                <CgClose className="exploredetmob_rejecticon" />
              </div>
            </div>
          </div>
        )}
        {drop ? (
          <button onClick={() => setDrop(!drop)} className="exploredetmob_goback">
            Go Back
          </button>
        ) : (
          ""
        )}
      </div>
      <div
        className={`exploredetmob_drop ${
          !drop ? "exploredetmob_drop_close" : "exploredetmob_drop_open"
        }`}
      >
        <h1 className="expdetdropmob_name">
          {data[position]?.name.split(" ")[0]}
        </h1>
        <div className="expdetdropmob_about">
          <h2 className="expdetdropmob_about_head">About me</h2>
          <div className="expdetdropmob_about_items">
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
        <div className="expdetdropmob_bio">
          <h2 className="expdetdropmob_bio_head">Bio</h2>
          <div className="expdetdropmob_bio_items">
            "Divorcee, single mom, and product manager looking for someone who
            understands the complexities of life and is ready for something
            serious. I'm a 24-year-old woman who's driven and ambitious, but
            also looking for someone who can accept me for who I am. Let's build
            something real together."
          </div>
        </div>
        <div className="expdetdropmob_describe">
          <h2 className="expdetdropmob_describe_head">
            Describe the person you want
          </h2>
          <div className="expdetdropmob_describe_items">
            "Divorcee, single mom, and product manager looking for someone who
            understands the complexities of life and is ready for something
            serious. I'm a 24-year-old woman who's driven and ambitious, but
            also looking for someone who can accept me for who I am. Let's build
            something real together."
          </div>
        </div>
        <div className="expdetdropmob_health">
          <h2 className="expdetdropmob_health_head">Health/Appearance</h2>
          <div className="expdetdropmob_health_items">
            <InfoWidget img={bloodgroup} text={"Blood Group B"} />
            <InfoWidget img={genoType} text={"Genotype: AA"} />
            <InfoWidget img={skinColor} text={"Skin Color: Fair skin"} />
          </div>
        </div>
        <div className="expdetdropmob_religion">
          <h2 className="expdetdropmob_religion_head">Religiosity</h2>
          <div className="expdetdropmob_religion_items">
            <InfoWidget img={Religiosity} text={"Very practicing"} />
            <InfoWidget img={prayStatus} text={"Always pray"} />
            <InfoWidget img={drinkStatus} text={"I don't drink"} />
            <InfoWidget img={smokeStatus} text={"I don't smoke"} />
          </div>
        </div>
        <div className="expdetdropmob_education">
          <h2 className="expdetdropmob_education_head">Education/Profession</h2>
          <div className="expdetdropmob_education_items">
            <InfoWidget img={education} text={"Doctorate"} />
            <InfoWidget img={work} text={"Product Manager"} />
          </div>
        </div>
        <div className="expdetdropmob_personality">
          <h2 className="expdetdropmob_personality_head">Personality</h2>
          <div className="expdetdropmob_personality_items">
            <InfoWidget img={listen} text={"Active Listener"} />
            <InfoWidget img={create} text={"Creative"} />
            <InfoWidget img={fun} text={"Funny"} />
          </div>
        </div>
        <div className="expdetdropmob_interest">
          <h2 className="expdetdropmob_interest_head">Interest</h2>
          <div className="expdetdropmob_interest_items">
            <InfoWidget img={listen} text={"Films & Cinema"} />
            <InfoWidget img={create} text={"Design"} />
            <InfoWidget img={coffee} text={"Coffee"} />
          </div>
        </div>
        <div className="expdetdropmob_language">
          <h2 className="expdetdropmob_language_head">Language and Ethnicity</h2>
          <div className="expdetdropmob_language_items">
            <InfoWidget img={flag} text={"Nigerian West Africa"} />
            <InfoWidget img={lang} text={"English"} />
          </div>
        </div>
        <div className="expdetdropmob_action_wrap">
          <div className="expdetdropmob_block">
            <MdOutlineBlock className="expdetdropmob_block_icon" />
            <p className="expdetdropmob_block_text">Block</p>
          </div>
          <div className="expdetdropmob_report">
            <RiFlagLine className="expdetdropmob_report_icon" />
            <p className="expdetdropmob_report_text">Report</p>
          </div>
          <div className="expdetdropmob_fav">
            <FiHeart className="expdetdropmob_fav_icon" />
            <p className="expdetdropmob_fav_text">Add to Favorite</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreDetailMobile;
