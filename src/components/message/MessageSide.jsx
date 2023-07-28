import React, { useEffect, useState } from "react";
import { Spinner, Tabs } from "flowbite-react";
import { BsSearch } from "react-icons/bs";
import { TextInput } from "flowbite-react";
import axios from "axios";
import { baseUrlUserActions} from "../../BaseUrls/base";
import { useDispatch, useSelector } from "react-redux";
import { messageSliceAction } from "../../redux/slices/messageSlice";

const MessageSide = () => {
  const { user } = useSelector((state) => state.userDataSlice);
  const { userData } = useSelector((state) => state.messageSlice);
  const dispatch = useDispatch();
  const [theData, settheData] = useState(null);

  useEffect(() => {
    console.log(userData);
    const getiliked = async () => {
      try {
        const res = await axios.post(
          `${baseUrlUserActions}/iliked`,
          { email: user.email },
          { headers: { "auth-token": user.token } }
        );
        // console.log(res.data);
        settheData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getiliked();
  }, []);

  function openMesage(thedata) {
    // console.log(thedata)
    dispatch(messageSliceAction({ userData: thedata }));
  }

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
          <Tabs.Item active title="Chats" className="taba">
            <TextInput
              id="email4"
              placeholder="Search"
              required
              rightIcon={BsSearch}
              type="email"
            />

            {theData ? (
              <>
                {theData.map((thelist, i) => (
                  <div
                    className="mt-5 w-full bg-white flex items-center gap-x-3 shadow-sm p-2 cursor-pointer"
                    onClick={() => openMesage(thelist)}
                    key={i}
                  >
                    <div className="">
                      <img
                        className="w-[50px] h-[50px] object-cover rounded-full"
                        src={thelist.photo[0]}
                        alt=""
                      />
                    </div>
                    <div className="flex justify-between w-full">
                      <div className="">
                        <p className="font-bold text-[14px]">{thelist.name}</p>
                        <p className="text-[14px] text-[#8E8E93] w-9/12">
                          {thelist.name} like you.
                        </p>
                      </div>
                      <div className="pt-1">
                        <p className="text-[14px] text-[#8E8E93]">Today</p>
                        <p className="text-[14px] text-[#8E8E93] 3/12">
                          10:20Am
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="flex justify-center items-center h-full">
                <Spinner />
              </div>
            )}
          </Tabs.Item>
          <Tabs.Item title="Unmatched" className="tabi">
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
