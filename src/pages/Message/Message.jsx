import Smg from "../../assets/png/imgg.png"
import Ggg from "../../assets/png/tests.jpeg"
import {IoMdCall} from 'react-icons/io'
import {FaVideo} from 'react-icons/fa'
import {BsThreeDots} from 'react-icons/bs'
import { useDispatch, useSelector } from "react-redux";
import { exploreDataAction } from "../../redux/slices/exploreDataSlice";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import "../Explore/explore.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseUrlUserActions } from "../../BaseUrls/base";
import axios from "axios";
import NigeriaFlag from "../../assets/png/nigeriaflag.png";
import { GiBodyHeight, GiBigDiamondRing } from "react-icons/gi";
import Smg2 from "../../assets/png/imgg.png"
import { Tabs } from 'flowbite-react';
import { BsSearch } from 'react-icons/bs';
import { TextInput } from 'flowbite-react';
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
import {RiAttachment2} from 'react-icons/ri'
const Message = () => {
  const slickRef = useRef(null);
  const exploreData = useSelector((state) => state.exploreDataSlice);
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
  return (

    <>
      <div className="flex -ml-[79px] lg:-mt-[80px] explore_container">
        {/* <img src={Empty2} alt="" className="w-[2400px]" /> */}
        <div className="w-[485px] bg-white lg:block hidden">
          <div className="">
          <div className="shadow-md bg-white p-2">
          <div className="flex justify-between">
          <div className="flex gap-x-3 items-center ml-6">
        <div className="">
         <img className="" src={Smg} alt="" />
        </div>
        <div className="">
        <p className="font-bold text-[14px]">Leila</p>
        </div>
        </div>
        <div className="flex space-x-4 items-center">
        < IoMdCall />
        <FaVideo />
        < BsThreeDots />
        </div>
          </div>
          </div>
          <div className="mt-5 p-2">
            <div className="text-center">
              <p className="text-[#8E8E93] text-[14px]">16 January 2023 17:55</p>
            </div>
            <div className="flex justify-end">
            <div className="p-2 rounded-md bg-black text-white w-5/12 mt-2">
              <p className="text-[12px]">Hi, my name is Ahmed. I saw your profile and I think we have a lot in common. Would you like to chat?</p>
            </div>
            </div>
            <div className="flex justify-start mt-2">
            <div className="p-2 rounded-md bg-[#E9E9E9] text-black w-5/12 mt-2">
              <p className="text-[12px]">Hi Ahmed, my name is Aisha. I would love to chat. What do you like to do in your free time?</p>
            </div>
            </div>
          </div>
          <div className="flex mt-[50px] bg-[#E9E9E9] space-x-2 items-center p-2">
            <RiAttachment2 />
            <TextInput
        id="email4"
        required
        type="email"
        className="w-[300px]"
      />
      < BsEmojiHeartEyes />
      < BsMic />
          </div>
          </div>
         
        </div>
        <div className="">
      <div className="explore_wrapper ">
        <Slider className="explore_carousel">
              <img
                className="explore_item rounded-none"
                src={Ggg}
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
      </div>
      <div
        className="explore_drop explore_drop_open p-3 border border-l-gray-300"
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
              text={"Single"}
            />
            {/* <InfoWidget img={child} text={"Children"} /> */}
            <InfoWidget
              Icon={<MdDateRange className="infowid_icon" />}
              text={data[position]?.marital_status}
            />
            <InfoWidget img={relation} text={"Relationship"} />
          </div>
        </div>
        <div className="expdrop_bio w-[380px]">
          <h2 className="expdrop_bio_head">Bio</h2>
          <div className="expdrop_bio_items">
            "Divorcee, single mom, and product manager looking for someone who
            understands the complexities of life and is ready for something
            serious. I'm a 24-year-old woman who's driven and ambitious, but
            also looking for someone who can accept me for who I am. Let's build
            something real together."
          </div>
        </div>
        <div className="expdrop_describe w-[380px]">
          <h2 className="expdrop_describe_head">
            Describe the person you want
          </h2>
          <div className="expdrop_describe_items">
            "product manager looking for someone who
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

    </div>

    {/* mobile view */}
    <div className="exploremob_wrapper">
    <h4 className="font-bold text-center text-[18px]">Messages</h4>

<div className="mt-3 w-full">
<Tabs.Group
 aria-label="Default tabs"
 className="flex justify-center lg:gap-x-10 tabi"
 style="underline"
>
 <Tabs.Item
   active
   title="Chats"
   className="taba"
 >
 <TextInput
   id="email4"
   placeholder="Search"
   required
   rightIcon={BsSearch}
   type="email"
 />
 <div className="mt-5 bg-white flex gap-x-3 shadow-sm p-2">
 <div className="">
    <img className="" src={Smg} alt="" />
 </div>
 <div className="">
   <div className="flex justify-between">
   <p className="font-bold text-[14px]">Leila</p>
   <p className="text-[14px] text-[#8E8E93]">Today</p>
   </div>
   <div className="flex justify-between pt-1">
   <p className="text-[14px] text-[#8E8E93] w-9/12">Leila has declined your instant chat request.</p>
   <p className="text-[14px] text-[#8E8E93] 3/12">10:20Am</p>
   </div>
 </div>
 </div>
 <br />
 <div className="mt-3 bg-white flex gap-x-3 shadow-sm p-2">
 <div className="">
    <img className="" src={Smg2} alt="" />
 </div>
 <div className="">
   <div className="flex justify-between">
   <p className="font-bold text-[14px]">Nana</p>
   <p className="text-[14px] text-[#8E8E93]">Yesterday</p>
   </div>
   <div className="flex justify-between pt-1">
   <p className="text-[14px] text-[#8E8E93] w-9/12">Leila has declined your instant chat request.</p>
   <p className="text-[14px] text-[#8E8E93] w-3/12">10:20Am</p>
   </div>
 </div>
 </div>
 </Tabs.Item>
 <Tabs.Item
   title="Unmatched"
   className="tabi"
 >
   <TextInput
   id="email4"
   placeholder="Search"
   required
   rightIcon={BsSearch}
   type="email"
 />
 </Tabs.Item>
</Tabs.Group>
</div>
    </div>
      </div>
    </>
  )
}

export default Message