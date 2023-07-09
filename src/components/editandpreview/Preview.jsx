import React, { useState, useEffect, useRef } from "react";
import {
  MdNavigateNext,
  MdNavigateBefore,
  MdMosque,
  MdDateRange,
} from "react-icons/md";
import { IoMdBriefcase } from "react-icons/io";
import { GiBigDiamondRing } from "react-icons/gi";
import { TbDna } from "react-icons/tb";
import { GiBodyHeight } from "react-icons/gi";
import test from "../../assets/png/tests.jpeg";
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
import InfoWidget from "../infoWidget/InfoWidget";
import image from "../../assets/png/img.jpeg";

const Preview = ({ ismore, setismore, isEdit }) => {
  const slide = useRef();
  const [height, setHeight] = useState();
  const [slider, setslider] = useState();
  const [isnext, setisnext] = useState(true);
  const [isprev, setisprev] = useState(false);
  const [imgId, setimgId] = useState(0);

  const images = [test, image, test, image, image, test];

  useEffect(() => {
    function scrollEl() {
      //console.log("Slide")
      if (slide.current?.scrollLeft === 0) {
        setisprev(false);
      } else {
        setisprev(true);
      }

      if (
        slide.current?.scrollLeft + slide.current?.offsetWidth >=
        slide.current?.scrollWidth
      ) {
        setisnext(false);
      } else {
        setisnext(true);
      }
    }

    slide.current?.addEventListener("scroll", scrollEl);

    return () => slide.current?.removeEventListener("scroll", scrollEl);
  }, [slide.current?.scrollLeft]);

  useEffect(() => {
    console.log("this is window height", window.innerHeight);

    window.innerWidth > 768
      ? setHeight(Math.floor(0.85 * window.innerHeight))
      : setHeight(Math.floor(0.9 * window.innerHeight));
  }, []);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setslider(400);
    } else {
      setslider(Math.floor(window.innerWidth));
    }
  }, [slider, window.innerWidth]);

  function prev() {
    //console.log(this.idx)
    setimgId(imgId - 1);

    //console.log("from slider", slide.current?.scrollWidth);
    //console.log(slide.current?.offsetWidth);
    slide.current?.scrollBy({
      left: -slider,
      behavior: "smooth",
    });
  }
  function next() {
    setimgId(imgId + 1);
    slide.current?.scrollBy({
      left: slider,
      behavior: "smooth",
    });
    //  console.log(slide.current?.scrollWidth);
    //console.log(slide.current?.offsetWidth);
  }

  console.log(imgId);
  return (
    <div className={isEdit ? "hidden" : `w-full  relative overflow-hidden `}>
      <div
        style={{ height: `${height}px` }}
        className="relative overflow-hidden"
      >
        <MdNavigateBefore
          onClick={prev}
          className={
            isprev
              ? "text-[30px] text-gray-100 p-1 bg-black bg-opacity-50 rounded-full hover:text-white absolute left-4 top-[50%] md:text-[35px]"
              : "hidden"
          }
        />
        <MdNavigateNext
          onClick={next}
          className={
            isnext
              ? "text-[30px] text-gray-100 p-1 bg-black bg-opacity-50 rounded-full hover:text-white absolute right-4 top-[50%] md:text-[35px]"
              : "hidden"
          }
        />
        <div className="flex w-full justify-center items-center gap-[2px] px-3 absolute inset-x-0 top-8">
          {images.map((item, index) => {
            return (
              <div
                key={index}
                className={`w-full h-1 rounded-md ${
                  index === imgId ? "bg-white" : "bg-gray-300"
                } `}
              ></div>
            );
          })}
        </div>

        <div className="absolute bottom-1 inset-x-0 gradient-bg lg:space-y-3 space-y-2 rounded-b-md pb-[45px] p-2">
          <button
            onClick={() => {
              setismore(!ismore);
            }}
            className={`bg-[#FF0020] absolute right-6 w-fit  ${
              ismore ? "bottom-[40px]" : "bottom-[95px] "
            } text-white py-2 px-3 rounded-2xl`}
          >
            {`${ismore ? "back" : "view"}`}
          </button>
          <div className={!ismore ? "w-full space-y-3" : "hidden"}>
            <div className="truncate font-medium text-xl md:text-2xl w-[300px] text-white">
              <span className="text-ellipsis whitespace-nowrap overflow-hidden w-[200px] lg:w-[250px] mr-3">
                Mubarak Abolade
              </span>
              <span>23</span>
            </div>

            <div className="about-user flex w-fit text-[12px] px-2 py-1 md:text-sm bg-gray-300 bg-opacity-40 rounded-2xl overflow-hidden text-white space-x-2">
              <IoMdBriefcase className="text-[15px] md:text-[20px]" />
              <span className="w-[110px] text-ellipsis whitespace-nowrap overflow-hidden">
                Business Analyst
              </span>
            </div>

            <div className="w-full flex  items-center gap-[8px]">
              <div className="about-user flex w-fit text-[12px] px-2 py-1 md:text-sm bg-gray-300 bg-opacity-40 rounded-2xl overflow-hidden text-white space-x-2">
                <GiBigDiamondRing className="text-[15px] md:text-[20px]" />
                <span className="w-[110px] text-ellipsis whitespace-nowrap overflow-hidden">
                  Divorced
                </span>
              </div>

              <div className="about-user flex w-fit  text-[12px] px-2 py-1 md:text-sm bg-gray-300 bg-opacity-40 rounded-2xl overflow-hidden text-white space-x-2">
                <GiBodyHeight className="text-[15px] md:text-[20px]" />
                <span className="w-[110px] text-ellipsis whitespace-nowrap overflow-hidden">
                  123m
                </span>
              </div>

              <div className="about-user flex  w-fit text-[12px] px-2 py-1 md:text-sm bg-gray-300 bg-opacity-40 rounded-2xl overflow-hidden text-white space-x-2">
                <TbDna className="text-[15px] md:text-[20px]" />
                <span className="w-[110px] text-ellipsis whitespace-nowrap overflow-hidden">
                  Genotype: AA+
                </span>
              </div>

              <div className="about-user flex w-fit text-[12px] px-2 py-1 md:text-sm bg-gray-300 bg-opacity-40 rounded-2xl overflow-hidden text-white space-x-2">
                <MdMosque className="text-[15px] md:text-[20px]" />
                <span className="w-[110px] text-ellipsis whitespace-nowrap overflow-hidden">
                  Very practicing
                </span>
              </div>
            </div>
          </div>
        </div>

        <div ref={slide} className="hide-scroll overflow-x-auto w-full h-full">
          <div className="min-w-max flex h-full">
            {images.map((item, index) => {
              return (
                <div
                  key={index}
                  className="rounded-b-md  w-[100vw] h-full md:w-[400px]"
                >
                  <img
                    src={item}
                    alt=""
                    className="rounded-b-md w-full h-full object-fill"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className={
          ismore
            ? "w-full p-3 pb-[100px] space-y-2 md:space-y-3 text-black"
            : "hidden"
        }
      >
        <div className="truncate font-medium text-xl md:text-2xl w-[300px]">
          <span className="text-ellipsis whitespace-nowrap overflow-hidden w-[200px] lg:w-[250px] mr-3">
            Mubarak Abolade
          </span>
          <span>23</span>
        </div>
        <div className="text-sm md:text-[15px] font-medium py-2">About me</div>
        <div className="flex gap-2 flex-wrap w-full">
          <InfoWidget
            Icon={<GiBodyHeight className="text-[15px] md:text-[20px]" />}
            text={"226cm (7'5)"}
          />
          <InfoWidget
            Icon={<GiBigDiamondRing className="text-[15px] md:text-[20px]" />}
            text={"Divorced"}
          />
          <InfoWidget img={child} text={"Children"} />
          <InfoWidget
            Icon={<MdDateRange className="text-[15px] md:text-[20px]" />}
            text={"Divorced"}
          />
          <InfoWidget img={relation} text={"Relationship"} />
        </div>

        <div className="">
          <div className="text-sm md:text-[15px] font-medium py-2">
            Describe the person you want
          </div>
          <div className="p-2 bg-[#e9e9e9] text-sm md:text-sm  leading-6 md:leading-6  rounded-md overflow-hidden text-black">
            "Divorcee, single mom, and product manager looking for someone who
            understands the complexities of life and is ready for something
            serious. I'm a 24-year-old woman who's driven and ambitious, but
            also looking for someone who can accept me for who I am. Let's build
            something real together."
          </div>
        </div>

        <div className="">
          <div className="text-sm md:text-[15px] font-medium py-2">
            Health/Appearance
          </div>
          <div className="flex gap-2 flex-wrap w-full">
            <InfoWidget img={bloodgroup} text={"Blood Group B"} />
            <InfoWidget img={genoType} text={"Genotype: AA"} />
            <InfoWidget img={skinColor} text={"Skin Color: Fair skin"} />
          </div>
        </div>

        <div className="">
          <h2 className="text-sm md:text-[15px] font-medium py-2">
            Religiosity
          </h2>
          <div className="flex gap-2 flex-wrap w-full">
            <InfoWidget img={Religiosity} text={"Very practicing"} />
            <InfoWidget img={prayStatus} text={"Always pray"} />
            <InfoWidget img={drinkStatus} text={"I don't drink"} />
            <InfoWidget img={smokeStatus} text={"I don't smoke"} />
          </div>
        </div>
        <div className="">
          <h2 className="text-sm md:text-[15px] font-medium py-2">
            Education/Profession
          </h2>
          <div className="flex gap-2 flex-wrap w-full">
            <InfoWidget img={education} text={"Doctorate"} />
            <InfoWidget img={work} text={"Product Manager"} />
          </div>
        </div>
        <div className="">
          <h2 className="text-sm md:text-[15px] font-medium py-2">
            Personality
          </h2>
          <div className="flex gap-2 flex-wrap w-full">
            <InfoWidget img={listen} text={"Active Listener"} />
            <InfoWidget img={create} text={"Creative"} />
            <InfoWidget img={fun} text={"Funny"} />
          </div>
        </div>
        <div className="">
          <h2 className="text-sm md:text-[15px] font-medium py-2">Interest</h2>
          <div className="flex gap-2 flex-wrap w-full">
            <InfoWidget img={listen} text={"Films & Cinema"} />
            <InfoWidget img={create} text={"Design"} />
            <InfoWidget img={coffee} text={"Coffee"} />
          </div>
        </div>
        <div className="">
          <h2 className="text-sm md:text-[15px] font-medium py-2">
            Language and Ethnicity
          </h2>
          <div className="flex gap-2 flex-wrap w-full">
            <InfoWidget img={flag} text={"Nigerian West Africa"} />
            <InfoWidget img={lang} text={"English"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
