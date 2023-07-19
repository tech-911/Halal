import Smg from "../../assets/png/imgg.png"

import { IoMdCall } from 'react-icons/io'
import { FaVideo } from 'react-icons/fa'
import { BsThreeDots } from 'react-icons/bs'
import { useDispatch, useSelector } from "react-redux";
import { exploreDataAction } from "../../redux/slices/exploreDataSlice";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { BsFillChatRightFill, BsEmojiHeartEyes, BsMic } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseUrlUserActions } from "../../BaseUrls/base";
import axios from "axios";
import Smg2 from "../../assets/png/imgg.png"
import { Tabs } from 'flowbite-react';
import { BsSearch } from 'react-icons/bs';
import { TextInput } from 'flowbite-react';
import { useParams } from "react-router-dom";
import { RiAttachment2 } from 'react-icons/ri'

import MessageExplore from "../../components/message/MessageExplore"
import MessageBody from "../../components/message/MessageBody";

const Message = () => {
  const { id: paramsid } = useParams();
  const { user } = useSelector((state) => state.userDataSlice);
  const { userData } = useSelector((state) => state.messageSlice);
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
                    <img className="w-[50px] h-[50px] rounded-full" src={userData?.photo[0]} alt="" />
                  </div>
                  <div className="">
                    <p className="font-bold text-[14px]">{userData?.name}</p>
                  </div>
                </div>
                <div className="flex space-x-4 items-center">
                  <IoMdCall />
                  <FaVideo />
                  <BsThreeDots />
                </div>
              </div>
            </div>


            <MessageBody />

          </div>

        </div>


        <MessageExplore />


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