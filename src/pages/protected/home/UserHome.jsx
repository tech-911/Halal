import React, { useEffect, useRef, useState } from "react";
import "./userHome.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { baseUrlUserActions } from "../../../BaseUrls/base";
import axios from "axios";
import { useSelector } from "react-redux";
import NigeriaFlag from "../../../assets/png/nigeriaflag.png";
import { GiBodyHeight } from "react-icons/gi";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdLocationPin,
  MdDateRange,
} from "react-icons/md";
import { RiShoppingBagFill } from "react-icons/ri";
import { AiTwotoneHeart } from "react-icons/ai";
import { BsFillChatRightFill } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import InfoWidget from "../../../components/infoWidget/InfoWidget";
const UserHome = () => {
  const slickRef = useRef(null);

  //   console.log(slickRef);
  const [data, setData] = useState([]);
  const [arrow, setArrow] = useState(0);
  const [count, setCount] = useState(0);
  const [drop, setDrop] = useState(0);

  console.log(drop);

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
              Icon={<GiBodyHeight className="infowid_icon" />}
              text={"226cm (7'5)"}
            />
            <InfoWidget
              Icon={<GiBodyHeight className="infowid_icon" />}
              text={"226cm (7'5)"}
            />
            <InfoWidget
              Icon={<MdDateRange className="infowid_icon" />}
              text={data[position]?.marital_status}
            />
            <InfoWidget
              Icon={<GiBodyHeight className="infowid_icon" />}
              text={"226cm (7'5)"}
            />
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
      </div>
    </div>
  );
};

export default UserHome;
