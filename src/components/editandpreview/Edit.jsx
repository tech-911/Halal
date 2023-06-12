import React, { useState } from "react";
import PhotoInput from "../photoInput/PhotoInput";
import { MdNavigateNext } from "react-icons/md";

const Edit = ({ isEdit }) => {
  const [photo, setPhoto] = useState([]);
  const [data, setData] = useState({
    name: "",
    date: "",
    gender: "",
    relationship: "",
    children: "",
    plan: "",
    biography: "",
    description: "",
    blood: "",
    genotype: "",
    skin: "",
    practice: "",
    pray: "",
    alcohol: "",
    smoke: "",
    interest: "",
    personality: "",
    education: "",
    profession: "",
    ethnicity: "",
    language: "",
  });

  return (
    <div
      className={
        isEdit ? "w-full py-3 px-4 justify-center items-center pb-16" : "hidden"
      }
    >
      <PhotoInput headings={"Photo"} photo={photo} setPhoto={setPhoto} />

      <div className="my-3 text-[#1E1E1E] w-full flex flex-col">
        <div className="font-medium text-[15px] md:text-[17px]">About me</div>
        <div className="pt-2 md:pt-3 space-y-1 w-full">
          <div className="flex justify-between items-center w-full">
            <span className="font-medium text-[14px] md:text-[15px]">
              Fullname
            </span>
            <MdNavigateNext className="text-[20px] md:text=[23px]" />
          </div>
          <input
            type="text"
            name="text"
            id="name"
            placeholder="Enter your full name"
            className="w-full border-b truncate pr-4  border-gray-300 pb-2 focus:outline-none focus:border-b focus:border-gray-300"
          />
        </div>
        <div className="pt-2 md:pt-3 space-y-1 w-full">
          <div className="flex justify-between items-center w-full">
            <span className="font-medium text-[14px] md:text-[15px]">
              Date of Birth
            </span>
            <MdNavigateNext className="text-[20px] md:text=[23px]" />
          </div>
          <input
            type="text"
            name="text"
            id="date"
            placeholder="Enter your birth date"
            className="w-full border-b truncate pr-4  border-gray-300 pb-2 focus:outline-none focus:border-b focus:border-gray-300"
          />
        </div>
        <div className="pt-2 md:pt-3 space-y-1 w-full">
          <div className="flex justify-between items-center w-full">
            <span className="font-medium text-[14px] md:text-[15px]">
              Gender
            </span>
            <MdNavigateNext className="text-[20px] md:text=[23px]" />
          </div>
          <input
            type="text"
            name="text"
            id="gender"
            placeholder="Gender"
            className="w-full border-b truncate pr-4  border-gray-300 pb-2 focus:outline-none focus:border-b focus:border-gray-300"
          />
        </div>

        <div className="pt-2 md:pt-3 space-y-1 w-full">
          <div className="flex justify-between items-center w-full">
            <span className="font-medium text-[14px] md:text-[15px]">
              Relationship Status
            </span>
            <MdNavigateNext className="text-[20px] md:text=[23px]" />
          </div>
          <input
            type="text"
            name="text"
            id="relationship"
            placeholder="Enter your status"
            className="w-full border-b truncate pr-4  border-gray-300 pb-2 focus:outline-none focus:border-b focus:border-gray-300"
          />
        </div>
        <div className="pt-2 md:pt-3 space-y-1 w-full">
          <div className="flex justify-between items-center w-full">
            <span className="font-medium text-[14px] md:text-[15px]">
              Children
            </span>
            <MdNavigateNext className="text-[20px] md:text=[23px]" />
          </div>
          <input
            type="number"
            name="number"
            id="children"
            placeholder="No of children"
            className="w-full border-b truncate pr-4  border-gray-300 pb-2 focus:outline-none focus:border-b focus:border-gray-300"
          />
        </div>
        <div className="pt-2 md:pt-3 space-y-1 w-full">
          <div className="flex justify-between items-center w-full">
            <span className="font-medium text-[14px] md:text-[15px]">
              Marriage Plans
            </span>
            <MdNavigateNext className="text-[20px] md:text=[23px]" />
          </div>
          <input
            type="text"
            name="text"
            id="plan"
            placeholder="Enter your marriage plans (e.g marriage in 1yr)"
            className="w-full border-b truncate pr-4  border-gray-300 pb-2 focus:outline-none focus:border-b focus:border-gray-300"
          />
        </div>

        <div className="pt-2 md:pt-3 space-y-1 w-full">
          <div className="flex justify-between items-center w-full">
            <span className="font-medium text-[14px] md:text-[15px]">Bio</span>
            <MdNavigateNext className="text-[20px] md:text=[23px]" />
          </div>
          <input
            type="text"
            name="text"
            id="biography"
            placeholder="Enter your bio"
            className="w-full border-b truncate pr-4  border-gray-300 pb-2 focus:outline-none focus:border-b focus:border-gray-300"
          />
        </div>
        <div className="pt-2 md:pt-3 space-y-1 w-full">
          <div className="flex justify-between items-center w-full">
            <span className="font-medium text-[14px] md:text-[15px]">
              Describe the person you want
            </span>
            <MdNavigateNext className="text-[20px] md:text=[23px]" />
          </div>
          <input
            type="text"
            name="text"
            id="description"
            placeholder="Describe here..."
            className="w-full border-b truncate pr-4  border-gray-300 pb-2 focus:outline-none focus:border-b focus:border-gray-300"
          />
        </div>

        <div className="font-medium py-3 text-[15px] md:text-[17px]">
          Health/Appearance
        </div>

        <div className="pt-2 md:pt-3 space-y-1 w-full">
          <div className="flex justify-between items-center w-full">
            <span className="font-medium text-[14px] md:text-[15px]">
              Blood group
            </span>
            <MdNavigateNext className="text-[20px] md:text=[23px]" />
          </div>
          <input
            type="text"
            name="text"
            id="blood"
            placeholder="Enter your blood group (e.g A+)"
            className="w-full border-b truncate pr-4  border-gray-300 pb-2 focus:outline-none focus:border-b focus:border-gray-300"
          />
        </div>
        <div className="pt-2 md:pt-3 space-y-1 w-full">
          <div className="flex justify-between items-center w-full">
            <span className="font-medium text-[14px] md:text-[15px]">
              Genotype
            </span>
            <MdNavigateNext className="text-[20px] md:text=[23px]" />
          </div>
          <input
            type="text"
            name="text"
            id="genotype"
            placeholder="Enter your genotype (e.g AA)"
            className="w-full border-b truncate pr-4  border-gray-300 pb-2 focus:outline-none focus:border-b focus:border-gray-300"
          />
        </div>
        <div className="pt-2 md:pt-3 space-y-1 w-full">
          <div className="flex justify-between items-center w-full">
            <span className="font-medium text-[14px] md:text-[15px]">
              Skin Color
            </span>
            <MdNavigateNext className="text-[20px] md:text=[23px]" />
          </div>
          <input
            type="text"
            name="text"
            id="skin"
            placeholder="your skin color ..."
            className="w-full border-b truncate pr-4  border-gray-300 pb-2 focus:outline-none focus:border-b focus:border-gray-300"
          />
        </div>

        {/** */}
        <div className="font-medium py-3 text-[15px] md:text-[17px]">
          Religiosity
        </div>

        <div className="pt-2 md:pt-3 space-y-1 w-full">
          <div className="flex justify-between items-center w-full">
            <span className="font-medium text-[14px] md:text-[15px]">
              Religious practice
            </span>
            <MdNavigateNext className="text-[20px] md:text=[23px]" />
          </div>
          <input
            type="text"
            name="text"
            id="practice"
            placeholder="e.g very practicing, non-practicing etc"
            className="w-full border-b truncate pr-4  border-gray-300 pb-2 focus:outline-none focus:border-b focus:border-gray-300"
          />
        </div>
        <div className="pt-2 md:pt-3 space-y-1 w-full">
          <div className="flex justify-between items-center w-full">
            <span className="font-medium text-[14px] md:text-[15px]">
              How often do you pray?
            </span>
            <MdNavigateNext className="text-[20px] md:text=[23px]" />
          </div>
          <input
            type="text"
            name="text"
            id="pray"
            placeholder="e.g always pray, hardly pray etc"
            className="w-full border-b truncate pr-4  border-gray-300 pb-2 focus:outline-none focus:border-b focus:border-gray-300"
          />
        </div>
        <div className="pt-2 md:pt-3 space-y-1 w-full">
          <div className="flex justify-between items-center w-full">
            <span className="font-medium text-[14px] md:text-[15px]">
              Do you drink alcohol
            </span>
            <MdNavigateNext className="text-[20px] md:text=[23px]" />
          </div>
          <input
            type="text"
            name="text"
            id="alcohol"
            placeholder="e.g yes or no"
            className="w-full border-b truncate pr-4  border-gray-300 pb-2 focus:outline-none focus:border-b focus:border-gray-300"
          />
        </div>
        <div className="pt-2 md:pt-3 space-y-1 w-full">
          <div className="flex justify-between items-center w-full">
            <span className="font-medium text-[14px] md:text-[15px]">
              Do you smoke?
            </span>
            <MdNavigateNext className="text-[20px] md:text=[23px]" />
          </div>
          <input
            type="text"
            name="text"
            id="smoke"
            placeholder="e.g yes or no"
            className="w-full border-b truncate pr-4  border-gray-300 pb-2 focus:outline-none focus:border-b focus:border-gray-300"
          />
        </div>

        <div className="font-medium py-3 text-[15px] md:text-[17px]">
          Interest and Personality
        </div>

        <div className="pt-2 md:pt-3 space-y-1 w-full">
          <div className="flex justify-between items-center w-full">
            <span className="font-medium text-[14px] md:text-[15px]">
              Interest
            </span>
            <MdNavigateNext className="text-[20px] md:text=[23px]" />
          </div>
          <input
            type="text"
            name="text"
            id="interest"
            placeholder="e.g  Design, Gym & Fitness, Writing, Movie etc"
            className="w-full border-b truncate pr-4   border-gray-300 pb-2 focus:outline-none focus:border-b focus:border-gray-300"
          />
        </div>
        <div className="pt-2 md:pt-3 space-y-1 w-full">
          <div className="flex justify-between items-center w-full">
            <span className="font-medium text-[14px] md:text-[15px]">
              Personality
            </span>
            <MdNavigateNext className="text-[20px] md:text=[23px]" />
          </div>
          <input
            type="text"
            name="text"
            id="personality"
            placeholder="e,g Active Listener, Ambitious, Carefree, Cheerful etc"
            className="w-full border-b truncate pr-4  border-gray-300 pb-2 focus:outline-none focus:border-b focus:border-gray-300"
          />
        </div>
        {/** */}
        <div className="font-medium py-3 text-[15px] md:text-[17px]">
          Educaton and Profession
        </div>

        <div className="pt-2 md:pt-3 space-y-1 w-full">
          <div className="flex justify-between items-center w-full">
            <span className="font-medium text-[14px] md:text-[15px]">
              Education
            </span>
            <MdNavigateNext className="text-[20px] md:text=[23px]" />
          </div>
          <input
            type="text"
            name="text"
            id="education"
            placeholder="e.g OND, HND, doctorate etc"
            className="w-full border-b truncate pr-4   border-gray-300 pb-2 focus:outline-none focus:border-b focus:border-gray-300"
          />
        </div>
        <div className="pt-2 md:pt-3 space-y-1 w-full">
          <div className="flex justify-between items-center w-full">
            <span className="font-medium text-[14px] md:text-[15px]">
              Profession
            </span>
            <MdNavigateNext className="text-[20px] md:text=[23px]" />
          </div>
          <input
            type="text"
            name="text"
            id="profession"
            placeholder="e,g tailor, trader etc..."
            className="w-full border-b truncate pr-4  border-gray-300 pb-2 focus:outline-none focus:border-b focus:border-gray-300"
          />
        </div>
        {/** */}
        <div className="font-medium py-3 text-[15px] md:text-[17px]">
          Language and Ethnicity
        </div>

        <div className="pt-2 md:pt-3 space-y-1 w-full">
          <div className="flex justify-between items-center w-full">
            <span className="font-medium text-[14px] md:text-[15px]">
              Ethnic group
            </span>
            <MdNavigateNext className="text-[20px] md:text=[23px]" />
          </div>
          <input
            type="text"
            name="text"
            id="ethnicity"
            placeholder="Enter your ethnic group"
            className="w-full border-b truncate pr-4   border-gray-300 pb-2 focus:outline-none focus:border-b focus:border-gray-300"
          />
        </div>
        <div className="pt-2 md:pt-3 space-y-1 w-full">
          <div className="flex justify-between items-center w-full">
            <span className="font-medium text-[14px] md:text-[15px]">
              Language
            </span>
            <MdNavigateNext className="text-[20px] md:text=[23px]" />
          </div>
          <input
            type="text"
            name="text"
            id="language"
            placeholder="e,g hausa, Yoruba."
            className="w-full border-b truncate pr-4  border-gray-300 pb-2 focus:outline-none focus:border-b focus:border-gray-300"
          />
        </div>

        <div className="w-full flex items-center justify-center py-4 md:py-6">
          <button className="rounded-2xl p-2 w-[80px] md:w-[90px] text-center md:p-3 text-white text-sm bg-[#FF0020] md:text-[16px] ">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
