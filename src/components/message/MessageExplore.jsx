import React, { useEffect, useRef, useState } from "react";
import { CgClose } from "react-icons/cg";
import Ggg from "../../assets/png/tests.jpeg"
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
import { BsFillChatRightFill, BsEmojiHeartEyes, BsMic } from "react-icons/bs";
import NigeriaFlag from "../../assets/png/nigeriaflag.png";
import { GiBodyHeight, GiBigDiamondRing } from "react-icons/gi";
import Slider from "react-slick";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "../../pages/Explore/explore.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { baseUrlUserActions, calculateAge } from "../../BaseUrls/base";
import { exploreDataAction } from "../../redux/slices/exploreDataSlice";

const MessageExplore = () => {
  const slickRef = useRef(null);
  const exploreData = useSelector((state) => state.exploreDataSlice);
  const { userData } = useSelector((state) => state.messageSlice);
  const { id: paramsid } = useParams();
  const [data, setData] = useState(exploreData);
  const [arrow, setArrow] = useState(0);
  const [count, setCount] = useState(0);
  const [drop, setDrop] = useState(0);
  const { user } = useSelector((state) => state.userDataSlice);
  const [position, setPosition] = useState(paramsid);
  const [toggle, setToggle] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(userData)

  }, []);

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

  return (
    <div className="">
      <div className="explore_wrapper ">
        <Slider className="explore_carousel">
          <img
            className="explore_item rounded-none"
            src={userData?.photo[0]}
            alt=''
          />
        </Slider>
        <div className="explore_arrow_wrap">
          <MdKeyboardArrowLeft
            onClick={Prev}
            className={`explore_arrowleft ${arrow ? "" : "explore_arrowleft_off"
              }`}
          />

          <MdKeyboardArrowRight
            onClick={Next}
            className={`explore_arrowright`}
          />
        </div>

        <div className="explore_body">
          <h1 className="explore_name">
            {userData?.name.split(" ")[0]}
          </h1>
          <div className="explore_details">
            <div className="explore_location_wrap">
              <MdLocationPin className="explore_location_icon" />
              <img src={NigeriaFlag} alt="ng_flag" className="explore_flag" />
              <p className="explore_location_name">
                {userData?.location}
              </p>
            </div>
          </div>
          <div className="explore_occupation_wrap">
            <div className="explore_occupation">
              <RiShoppingBagFill className="explore_occupation_icon" />
              <p className="explore_occupation_name">
                {userData?.profession}
              </p>
            </div>
          </div>

        </div>
      </div>


      <div className="explore_drop explore_drop_open p-3 border border-l-gray-300">
        <h1 className="expdrop_name">{data[position]?.name.split(" ")[0]}</h1>
        <div className="expdrop_about">
          <h2 className="expdrop_about_head">About me</h2>
          <div className="expdrop_about_items">
            <InfoWidget
              Icon={<GiBodyHeight className="infowid_icon" />}
              text={userData?.height}
            />
            <InfoWidget
              Icon={<GiBigDiamondRing className="infowid_icon" />}
              text={userData?.marital_status}
            />
            {/* <InfoWidget img={child} text={"Children"} /> */}
            <InfoWidget
              Icon={<MdDateRange className="infowid_icon" />}
              text={calculateAge(userData?.dob)}
            />
            <InfoWidget img={relation} text={userData?.relation?.relationship} />
          </div>
        </div>
        <div className="expdrop_bio w-[380px]">
          <h2 className="expdrop_bio_head">Bio</h2>
          <div className="expdrop_bio_items">{userData?.relation?.biography}</div>
        </div>
        <div className="expdrop_describe w-[380px]">
          <h2 className="expdrop_describe_head">
            Describe the person you want
          </h2>
          <div className="expdrop_describe_items">{userData?.relation?.description}</div>
        </div>
        <div className="expdrop_health">
          <h2 className="expdrop_health_head">Health/Appearance</h2>
          <div className="expdrop_health_items">
            <InfoWidget img={bloodgroup} text={`Blood Group ${userData?.relation?.blood}`} />
            <InfoWidget img={genoType} text={`Genotype: ${userData?.relation?.blood}`} />
            <InfoWidget img={skinColor} text={`Skin Color: ${userData?.relation?.skin}`} />
          </div>
        </div>
        <div className="expdrop_religion">
          <h2 className="expdrop_religion_head">Religiosity</h2>
          <div className="expdrop_religion_items">
            <InfoWidget img={Religiosity} text={userData?.relation?.religion} />
            <InfoWidget img={prayStatus} text={userData?.relation?.pray} />
            <InfoWidget img={drinkStatus} text={userData?.relation?.alcohol} />
            <InfoWidget img={smokeStatus} text={userData?.relation?.smoke} />
          </div>
        </div>
        <div className="expdrop_education">
          <h2 className="expdrop_education_head">Education/Profession</h2>
          <div className="expdrop_education_items">
            <InfoWidget img={education} text={userData?.relation?.education} />
            <InfoWidget img={work} text={userData?.profession} />
          </div>
        </div>
        <div className="expdrop_personality">
          <h2 className="expdrop_personality_head">Personality</h2>
          <div className="expdrop_personality_items">
            <InfoWidget img={listen} text={userData?.relation?.personality} />
            {/* <InfoWidget img={create} text={"Creative"} />
            <InfoWidget img={fun} text={"Funny"} /> */}
          </div>
        </div>
        
        {/* <div className="expdrop_interest">
          <h2 className="expdrop_interest_head">Interest</h2>
          <div className="expdrop_interest_items">
            <InfoWidget img={listen} text={"Films & Cinema"} />
            <InfoWidget img={create} text={"Design"} />
            <InfoWidget img={coffee} text={"Coffee"} />
          </div>
        </div> */}

        <div className="expdrop_language">
          <h2 className="expdrop_language_head">Language and Ethnicity</h2>
          <div className="expdrop_language_items">
            <InfoWidget img={flag} text={userData?.relation?.ethnicity} />
            <InfoWidget img={lang} text={userData?.relation?.language} />
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

    </div>
  )
}

export default MessageExplore