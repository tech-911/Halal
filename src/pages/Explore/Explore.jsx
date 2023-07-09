import ExploreWidget from "../../components/exploreWidget/ExploreWidget";
import { useDispatch, useSelector } from "react-redux";
import { exploreDataAction } from "../../redux/slices/exploreDataSlice";
import { useNavigate } from "react-router-dom";
import Empty1 from "../../assets/png/emptyStatesImg/Fashion blogging-cuate.png";
import Empty2 from "../../assets/png/emptyStatesImg/Popcorns-amico.png";
import React, { useEffect, useRef, useState, useContext } from "react";
import "./explore.scss";
import profile from "../../assets/png/img.jpeg";
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
import { StyleContext } from "../../App";
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
  const { isHidden, setHidden } = useContext(StyleContext);

  useEffect(() => {
    //Post Liked me
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
    //Post I liked
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
    <div className=" relative overflow-hidden  w-[100vw] md:w-[400px]">
      <ToastContainer />
      {/** */}
      {data?.length === 0 && <div className=""></div>}
      {data?.length !== 0 && (
        <div
          style={{ height: `${height}px` }}
          className="relative rounded-b-md overflow-hidden "
        >
          <Slider
            style={{ height: `${height}px` }}
            className="w-full"
            ref={slickRef}
          >
            {data[position]?.photo.map((value, id) => {
              return (
                <img
                  key={id}
                  className="rounded-b-md w-full h-full object-fill"
                  src={value}
                  alt={`profile${id}`}
                />
              );
            })}
          </Slider>
          <div className="absolute top-[45%] w-full left-0 right-0 flex items-center justify-between max-[450px]:text-[30px] cursor-pointer text-[42px]">
            <MdKeyboardArrowLeft
              onClick={Prev}
              className={`text-[#C0C0C0] hover:text-white ${arrow ? "" : ""}`}
            />

            <MdKeyboardArrowRight
              onClick={Next}
              className={`text-[#C0C0C0] hover:text-white`}
            />
          </div>
          {isHidden ? (
            <div className="absolute font-style rounded-b-md inset-x-0 bottom-0 pb-[2rem] px-[1rem] flex flex-col gradient-bg ">
              <h1 className="font-style font-normal text-[34px] text-start mb-[1rem] text-white">
                {data[position]?.name.split(" ")[0]}
              </h1>
              <div className="flex justify-between w-full gap-[1rem] mb-[1rem] items-center ">
                <div className="flex items-center gap-2">
                  <MdLocationPin className="text-white text-[22px]" />
                  <img
                    src={NigeriaFlag}
                    alt="ng_flag"
                    className="explore_flag"
                  />
                  <p className="font-style font-normal text-sm text-center text-white">
                    {data[position]?.location}
                  </p>
                </div>
                <button
                  onClick={() => setHidden(!isHidden)}
                  className="rounded-xl flex justify-center items-center text-white px-2 py-1 text-sm bg-[#ff0020]"
                >
                  View
                </button>
              </div>
              <div className="w-full flex items-start mb-[1rem]">
                <div className="flex items-center justify-center text-white bg-[#444444] gap-2 px-2 py-1 rounded-xl">
                  <RiShoppingBagFill className="text-white text-[22px]" />
                  <p className="text-[13px]">{data[position]?.profession}</p>
                </div>
              </div>
              <div className="w-full flex items-center justify-center space-x-[3rem]">
                <div
                  onClick={() => handleReact("like")}
                  className="rounded-full p-2 text-white flex items-center justify-center bg-[#444444] hover:bg-[#ff0020] transition-all duration-200 transform ease-in"
                >
                  <AiTwotoneHeart className="text-[30px] max-[450px]:text-25px]" />
                </div>
                <div className="rounded-full p-2 text-white flex items-center justify-center bg-[#444444] hover:bg-[#ff0020] transition-all duration-200 transform ease-in">
                  <BsFillChatRightFill className="text-[28px] max-[450px]:text-23px" />
                </div>
                <div
                  onClick={() => handleReact("unlike")}
                  className="rounded-full p-2 text-white flex items-center justify-center bg-[#444444] hover:bg-[#ff0020] transition-all duration-200 transform ease-in"
                >
                  <CgClose className="text-[30px] max-[450px]:text-25px" />
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full inset-x-0 absolute bottom-5 p-3 flex justify-end">
            <button
              onClick={() => setHidden(!isHidden)}
              className="rounded-xl flex justify-center items-center text-white px-2 py-1 text-sm bg-[#ff0020]"
            >
              Go Back
            </button>
          </div>
          )}
        
        </div>
      )}
      <div
        className={`bg-white w-full h-full font-style  flex-col p-2 ${
          isHidden ? "hidden" : "flex"
        }`}
      >
        <h1 className="font-medium text-[30px] text-start text-[#1e1e1e]">
          {data[position]?.name.split(" ")[0]}
        </h1>
        <div className="flex flex-col justify-start space-y-[1rem]">
          <h2 className="font-medium text-[20px] text-[#1e1e1e]">About me</h2>
          <div className="flex items-center w-full flex-wrap gap-2 px-1">
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
        <div className="flex flex-col space-y-[0.5rem] mt-[1.5rem]">
          <h2 className="font-medium text-[15px] text-[#1e1e1e]">Bio</h2>
          <div className="text-[13px] leading-6 bg-[#e9e9e9] rounded-lg">
            "Divorcee, single mom, and product manager looking for someone who
            understands the complexities of life and is ready for something
            serious. I'm a 24-year-old woman who's driven and ambitious, but
            also looking for someone who can accept me for who I am. Let's build
            something real together."
          </div>
        </div>
        <div className="flex flex-col space-y-[0.5rem] mt-[1.5rem]">
          <h2 className="font-medium text-[15px] text-[#1e1e1e]">
            Describe the person you want
          </h2>
          <div className="text-[13px] leading-6 bg-[#e9e9e9] rounded-lg">
            "Divorcee, single mom, and product manager looking for someone who
            understands the complexities of life and is ready for something
            serious. I'm a 24-year-old woman who's driven and ambitious, but
            also looking for someone who can accept me for who I am. Let's build
            something real together."
          </div>
        </div>
        <div className="flex space-y-2   text-[#1e1e1e]  flex-col item-start mt-[1.5rem]">
          <h2 className="font-medium text-[20px] ">Health/Appearance</h2>
          <div className="flex flex-wrap items-center gap-3">
            <InfoWidget img={bloodgroup} text={"Blood Group B"} />
            <InfoWidget img={genoType} text={"Genotype: AA"} />
            <InfoWidget img={skinColor} text={"Skin Color: Fair skin"} />
          </div>
        </div>
        <div className="flex space-y-2  text-[#1e1e1e]  flex-col item-start mt-[1.5rem]">
          <h2 className="text-sm md:text-[15px] font-medium ">Religiosity</h2>
          <div className="flex flex-wrap items-center gap-3">
            <InfoWidget img={Religiosity} text={"Very practicing"} />
            <InfoWidget img={prayStatus} text={"Always pray"} />
            <InfoWidget img={drinkStatus} text={"I don't drink"} />
            <InfoWidget img={smokeStatus} text={"I don't smoke"} />
          </div>
        </div>
        <div className="flex space-y-2  text-[#1e1e1e]  flex-col item-start mt-[1.5rem]">
          <h2 className="text-sm md:text-[15px] font-medium ">
            Education/Profession
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            <InfoWidget img={education} text={"Doctorate"} />
            <InfoWidget img={work} text={"Product Manager"} />
          </div>
        </div>
        <div className="flex space-y-2  flex-col text-[#1e1e1e] item-start mt-[1.5rem]">
          <h2 className="text-sm md:text-[15px] font-medium">Personality</h2>
          <div className="flex flex-wrap items-center gap-3">
            <InfoWidget img={listen} text={"Active Listener"} />
            <InfoWidget img={create} text={"Creative"} />
            <InfoWidget img={fun} text={"Funny"} />
          </div>
        </div>
        <div className="flex space-y-2  text-[#1e1e1e]   flex-col item-start mt-[1.5rem]">
          <h2 className="text-sm md:text-[15px] font-medium">Interest</h2>
          <div className="flex flex-wrap items-center gap-3">
            <InfoWidget img={listen} text={"Films & Cinema"} />
            <InfoWidget img={create} text={"Design"} />
            <InfoWidget img={coffee} text={"Coffee"} />
          </div>
        </div>
        <div className="flex space-y-2  text-[#1e1e1e]   flex-col item-start mt-[1.5rem]">
          <h2 className="text-sm md:text-[15px] font-medium">
            Language and Ethnicity
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            <InfoWidget img={flag} text={"Nigerian West Africa"} />
            <InfoWidget img={lang} text={"English"} />
          </div>
        </div>
        <div className="flex gap-[3rem] justify-center my-[2rem] items-center">
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <MdOutlineBlock className="text-[25px] text-[#ff0000]" />
            <p className="text-sm text-[#ff0000]">Block</p>
          </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <RiFlagLine className="text-[25px] text-[#008000]" />
            <p className="text-sm text-[#008000]">Report</p>
          </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <FiHeart className="text-[25px] text-[#444444]" />
            <p className="text-sm text-[#444444]">Add to Favorite</p>
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
                    onClick={() => navigate(`/main/explore/${id}`)}
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
