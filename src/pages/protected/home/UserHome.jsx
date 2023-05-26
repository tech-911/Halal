import React, { useEffect, useRef, useState } from "react";
import "./userHome.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { baseUrlUserActions } from "../../../BaseUrls/base";
import axios from "axios";
import { useSelector } from "react-redux";
import NigeriaFlag from "../../../assets/png/nigeriaflag.png";
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
import child from "../../../assets/png/profileIcons/child.png";
import relation from "../../../assets/png/profileIcons/relation.png";
import bloodgroup from "../../../assets/png/profileIcons/bloodGroup.png";
import genoType from "../../../assets/png/profileIcons/genotype.png";
import skinColor from "../../../assets/png/profileIcons/skinColor.png";
import Religiosity from "../../../assets/png/profileIcons/religion.png";
import prayStatus from "../../../assets/png/profileIcons/pray.png";
import drinkStatus from "../../../assets/png/profileIcons/drink.png";
import smokeStatus from "../../../assets/png/profileIcons/smoke.png";
import education from "../../../assets/png/profileIcons/education.png";
import work from "../../../assets/png/profileIcons/work.png";
import listen from "../../../assets/png/profileIcons/twemoji_ear.png";
import create from "../../../assets/png/profileIcons/noto_artist-palette.png";
import fun from "../../../assets/png/profileIcons/moji.png";
import coffee from "../../../assets/png/profileIcons/twemoji_teacup-without-handle.png";
import flag from "../../../assets/png/profileIcons/nigFlag.png";
import lang from "../../../assets/png/profileIcons/language.png";
import InfoWidget from "../../../components/infoWidget/InfoWidget";
const UserHome = () => {
  const slickRef = useRef(null);

  //   console.log(slickRef);
  const [data, setData] = useState([]);
  const [arrow, setArrow] = useState(0);
  const [count, setCount] = useState(0);
  const [drop, setDrop] = useState(0);

  const { user } = useSelector((state) => state.userDataSlice);
  const [position, setPosition] = useState(0);
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
    if (user.gender === "male") {
      axios
        .post(
          `${baseUrlUserActions}/getallusersbygender`,
          {
            gender: "female",
          },
          {
            headers: {
              "auth-token": user.token,
            },
          }
        )
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (user?.gender === "female") {
      axios
        .post(
          `${baseUrlUserActions}/getallusersbygender`,
          {
            gender: "male",
          },
          {
            headers: {
              "auth-token": user.token,
            },
          }
        )
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

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

  return (
    <div className="userhome_container">
      <div className="userhome_wrapper ">
        <Slider className="userhome_carousel" {...settings} ref={slickRef}>
          {data[position]?.photo.map((value, id) => {
            return (
              <img
                key={id}
                className="userhome_item"
                src={value}
                alt={`profile${id}`}
              />
            );
          })}
        </Slider>
        <div className="userhome_arrow_wrap">
          <MdKeyboardArrowLeft
            onClick={Prev}
            className={`userhome_arrowleft ${
              arrow ? "" : "userhome_arrowleft_off"
            }`}
          />

          <MdKeyboardArrowRight
            onClick={Next}
            className={`userhome_arrowright`}
          />
        </div>
        {drop ? (
          ""
        ) : (
          <div className="userhome_body">
            <h1 className="userhome_name">
              {data[position]?.name.split(" ")[0]}
            </h1>
            <div className="userhome_details">
              <div className="userhome_location_wrap">
                <MdLocationPin className="userhome_location_icon" />
                <img
                  src={NigeriaFlag}
                  alt="ng_flag"
                  className="userhome_flag"
                />
                <p className="userhome_location_name">
                  {data[position]?.location}
                </p>
              </div>
              <button
                onClick={() => setDrop(!drop)}
                className="userhome_moredetails"
              >
                View
              </button>
            </div>
            <div className="userhome_occupation_wrap">
              <div className="userhome_occupation">
                <RiShoppingBagFill className="userhome_occupation_icon" />
                <p className="userhome_occupation_name">
                  {data[position]?.profession}
                </p>
              </div>
            </div>
            <div className="userhome_actions_wrap">
              <div className="userhome_like">
                <AiTwotoneHeart className="userhome_likeicon" />
              </div>
              <div className="userhome_chat">
                <BsFillChatRightFill className="userhome_chaticon" />
              </div>
              <div className="userhome_reject">
                <CgClose className="userhome_rejecticon" />
              </div>
            </div>
          </div>
        )}
        {drop ? (
          <button onClick={() => setDrop(!drop)} className="userhome_goback">
            Go Back
          </button>
        ) : (
          ""
        )}
      </div>
      <div
        className={`userhome_drop ${
          !drop ? "userhome_drop_close" : "userhome_drop_open"
        }`}
      >
        <h1 className="udrop_name">{data[position]?.name.split(" ")[0]}</h1>
        <div className="udrop_about">
          <h2 className="udrop_about_head">About me</h2>
          <div className="udrop_about_items">
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
        <div className="udrop_bio">
          <h2 className="udrop_bio_head">Bio</h2>
          <div className="udrop_bio_items">
            "Divorcee, single mom, and product manager looking for someone who
            understands the complexities of life and is ready for something
            serious. I'm a 24-year-old woman who's driven and ambitious, but
            also looking for someone who can accept me for who I am. Let's build
            something real together."
          </div>
        </div>
        <div className="udrop_describe">
          <h2 className="udrop_describe_head">Describe the person you want</h2>
          <div className="udrop_describe_items">
            "Divorcee, single mom, and product manager looking for someone who
            understands the complexities of life and is ready for something
            serious. I'm a 24-year-old woman who's driven and ambitious, but
            also looking for someone who can accept me for who I am. Let's build
            something real together."
          </div>
        </div>
        <div className="udrop_health">
          <h2 className="udrop_health_head">Health/Appearance</h2>
          <div className="udrop_health_items">
            <InfoWidget img={bloodgroup} text={"Blood Group B"} />
            <InfoWidget img={genoType} text={"Genotype: AA"} />
            <InfoWidget img={skinColor} text={"Skin Color: Fair skin"} />
          </div>
        </div>
        <div className="udrop_religion">
          <h2 className="udrop_religion_head">Religiosity</h2>
          <div className="udrop_religion_items">
            <InfoWidget img={Religiosity} text={"Very practicing"} />
            <InfoWidget img={prayStatus} text={"Always pray"} />
            <InfoWidget img={drinkStatus} text={"I don't drink"} />
            <InfoWidget img={smokeStatus} text={"I don't smoke"} />
          </div>
        </div>
        <div className="udrop_education">
          <h2 className="udrop_education_head">Education/Profession</h2>
          <div className="udrop_education_items">
            <InfoWidget img={education} text={"Doctorate"} />
            <InfoWidget img={work} text={"Product Manager"} />
          </div>
        </div>
        <div className="udrop_personality">
          <h2 className="udrop_personality_head">Personality</h2>
          <div className="udrop_personality_items">
            <InfoWidget img={listen} text={"Active Listener"} />
            <InfoWidget img={create} text={"Creative"} />
            <InfoWidget img={fun} text={"Funny"} />
          </div>
        </div>
        <div className="udrop_interest">
          <h2 className="udrop_interest_head">Interest</h2>
          <div className="udrop_interest_items">
            <InfoWidget img={listen} text={"Films & Cinema"} />
            <InfoWidget img={create} text={"Design"} />
            <InfoWidget img={coffee} text={"Coffee"} />
          </div>
        </div>
        <div className="udrop_language">
          <h2 className="udrop_language_head">Language and Ethnicity</h2>
          <div className="udrop_language_items">
            <InfoWidget img={flag} text={"Nigerian West Africa"} />
            <InfoWidget img={lang} text={"English"} />
          </div>
        </div>
        <div className="udrop_action_wrap">
          <div className="udrop_block">
            <MdOutlineBlock className="udrop_block_icon" />
            <p className="udrop_block_text">Block</p>
          </div>
          <div className="udrop_report">
            <RiFlagLine className="udrop_report_icon" />
            <p className="udrop_report_text">Report</p>
          </div>
          <div className="udrop_fav">
            <FiHeart className="udrop_fav_icon" />
            <p className="udrop_fav_text">Add to Favorite</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
