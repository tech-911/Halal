import React from "react";
import Smg from "../../assets/png/imgg.png"
import Smg2 from "../../assets/png/imgg.png"
import { Tabs } from 'flowbite-react';
import { BsSearch } from 'react-icons/bs';
import { Label, TextInput } from 'flowbite-react';

const MessageSide = () => {
  return (
    <div className="match_wrapper">
     {/* <img className="" src={Smg} alt="" /> */}
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
      <div className="mt-5 bg-white flex gap-x-3 shadow-sm p-2 cursor-pointer">
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
      <div className="mt-3 bg-white flex gap-x-3 shadow-sm p-2 cursor-pointer">
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
  );
};

export default MessageSide;
