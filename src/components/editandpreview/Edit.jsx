import React, { useState } from "react";
import PhotoInput from "../photoInput/PhotoInput";
import { MdNavigateNext } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { baseUrlAuth } from "../../BaseUrls/base";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Preloader from "../../components/preLoader/Preloader";
import { preloadModalAction } from "../../redux/slices/preloadModalSlice";
import { registerDataAction } from "../../redux/slices/registerDataSlice";
import { userDataAction } from "../../redux/slices/userDataSlice";

const Edit = ({ isEdit }) => {
  const { user } = useSelector((state) => state.userDataSlice);
  console.log(user?.email);
  const [photo, setPhoto] = useState([]);

  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(0);
  const { preloadOpen } = useSelector((state) => state.preloadModalSlice);
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    date: "",
    gender: "",
    height: "",
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

  const handleInput = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  };

  let {
    name,
    date,
    gender,
    height,
    relationship,
    children,
    plan,
    biography,
    description,
    blood,
    genotype,
    skin,
    practice,
    pray,
    alcohol,
    smoke,
    interest,
    personality,
    education,
    profession,
    ethnicity,
    language,
  } = data;

  const handleUpdate = async () => {
    dispatch(preloadModalAction({ preloadOpen: 1 }));
    setDisabled(1);
    // let formData = new FormData();
    let imaga = []
    photo.forEach((value, id) => {
      imaga.push(value)
      // formData.append("image", value);
    });

    data.image = imaga
    data.email = user?.email
    console.log(JSON.stringify(data))
    try {
      const res = await axios.post(`${baseUrlAuth}/editprofile`, data);
      const response = await res.data

      console.log(response)

      toast.success(`updated successfully 🎉!`, {
        position: toast.POSITION.TOP_RIGHT,
        // autoClose: 2000
      });

      dispatch(userDataAction({ user: response }));
      dispatch(preloadModalAction({ preloadOpen: 0 }));
      // navigate("/main");

      // setDisabled(0);
    } catch (err) {
      toast.error(`Error: ${err?.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log(err);
      setDisabled(0);
    }
  };

  return (
    <div
      className={
        isEdit
          ? "w-full py-3 px-4 justify-center items-center pb-16 bg-white"
          : "hidden"
      }
    >
      <PhotoInput photo={photo} setPhoto={setPhoto} />
      <ToastContainer />
      {preloadOpen ? <Preloader /> : ""}
      <div className="my-5  text-[#1E1E1E] w-full flex flex-col">
        <div className="font-[roboto] font-bold text-[20px] text-[#000000] md:text-[17px]">
          About me
        </div>
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
            value={name}
            onChange={(e) => {
              handleInput(e);
            }}
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
            type="date"
            name="text"
            id="date"
            value={date}
            onChange={(e) => {
              handleInput(e);
            }}
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
            value={gender}
            onChange={(e) => {
              handleInput(e);
            }}
            placeholder="Gender"
            className="w-full border-b truncate pr-4  border-gray-300 pb-2 focus:outline-none focus:border-b focus:border-gray-300"
          />
        </div>
        <div className="pt-2 md:pt-3 space-y-1 w-full">
          <div className="flex justify-between items-center w-full">
            <span className="font-medium text-[14px] md:text-[15px]">
              Height
            </span>
            <MdNavigateNext className="text-[20px] md:text=[23px]" />
          </div>
          <input
            type="number"
            name="text"
            id="height"
            min={21.51}
            value={height}
            onChange={(e) => {
              handleInput(e);
            }}
            placeholder="Height"
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
            value={relationship}
            onChange={(e) => {
              handleInput(e);
            }}
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
            value={children}
            onChange={(e) => {
              handleInput(e);
            }}
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
            value={plan}
            onChange={(e) => {
              handleInput(e);
            }}
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
            value={biography}
            onChange={(e) => {
              handleInput(e);
            }}
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
            value={description}
            onChange={(e) => {
              handleInput(e);
            }}
            placeholder="Describe here..."
            className="w-full border-b truncate pr-4  border-gray-300 pb-2 focus:outline-none focus:border-b focus:border-gray-300"
          />
        </div>

        <div className="font-[roboto] font-bold py-3 text-[20px] md:text-[17px]">
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
            value={blood}
            onChange={(e) => {
              handleInput(e);
            }}
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
            value={genotype}
            onChange={(e) => {
              handleInput(e);
            }}
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
            value={skin}
            onChange={(e) => {
              handleInput(e);
            }}
            placeholder="your skin color ..."
            className="w-full border-b truncate pr-4  border-gray-300 pb-2 focus:outline-none focus:border-b focus:border-gray-300"
          />
        </div>

        {/** */}
        <div className="font-[roboto] font-bold py-3 text-[20px] md:text-[17px]">
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
            value={practice}
            onChange={(e) => {
              handleInput(e);
            }}
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
            value={pray}
            onChange={(e) => {
              handleInput(e);
            }}
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
            value={alcohol}
            onChange={(e) => {
              handleInput(e);
            }}
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
            value={smoke}
            onChange={(e) => {
              handleInput(e);
            }}
            placeholder="e.g yes or no"
            className="w-full border-b truncate pr-4  border-gray-300 pb-2 focus:outline-none focus:border-b focus:border-gray-300"
          />
        </div>

        <div className="font-[roboto] font-bold py-3 text-[20px] md:text-[17px]">
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
            value={interest}
            onChange={(e) => {
              handleInput(e);
            }}
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
            value={personality}
            onChange={(e) => {
              handleInput(e);
            }}
            placeholder="e,g Active Listener, Ambitious, Carefree, Cheerful etc"
            className="w-full border-b truncate pr-4  border-gray-300 pb-2 focus:outline-none focus:border-b focus:border-gray-300"
          />
        </div>
        {/** */}
        <div className="font-[roboto] font-bold py-3 text-[20px] md:text-[17px]">
          Educaton/Profession
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
            value={education}
            onChange={(e) => {
              handleInput(e);
            }}
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
            value={profession}
            onChange={(e) => {
              handleInput(e);
            }}
            placeholder="e,g tailor, trader etc..."
            className="w-full border-b truncate pr-4  border-gray-300 pb-2 focus:outline-none focus:border-b focus:border-gray-300"
          />
        </div>
        {/** */}
        <div className="font-[roboto] font-bold py-3 text-[20px] md:text-[17px]">
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
            value={ethnicity}
            onChange={(e) => {
              handleInput(e);
            }}
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
            value={language}
            onChange={(e) => {
              handleInput(e);
            }}
            placeholder="e,g hausa, Yoruba."
            className="w-full border-b truncate pr-4  border-gray-300 pb-2 focus:outline-none focus:border-b focus:border-gray-300"
          />
        </div>

        <div className="w-full flex items-center justify-center py-4 md:py-6">
          <button className="rounded-2xl p-2 w-[80px] md:w-[90px] text-center md:p-3 text-white text-sm bg-[#FF0020] md:text-[16px]" onClick={handleUpdate}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
