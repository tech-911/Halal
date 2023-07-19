import React, { useEffect, useState } from "react";
import { BsFillChatRightFill, BsEmojiHeartEyes, BsMic } from "react-icons/bs";
import { Spinner, TextInput } from 'flowbite-react';
import { RiAttachment2 } from 'react-icons/ri'
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { baseUrlUserActions, messageUrlActions } from "../../BaseUrls/base";
import { AiOutlineSend } from "react-icons/ai";
import io from 'socket.io-client';

const MessageBody = () => {
  const { user } = useSelector((state) => state.userDataSlice);
  const { userData } = useSelector((state) => state.messageSlice);
  const [theData, settheData] = useState(null)

  const [socket, setSocket] = useState(null);
  const [conversation, setConversation] = useState(null);
  const [newMessage, setNewMessage] = useState('');


  useEffect(() => {
    settheData(null)
    const getiliked = async () => {
      try {
        const res = await axios.get(
          `${messageUrlActions}/conversation/${user?._id}/${userData?._id}`);
        console.log(res.data);
        settheData(res.data)

      } catch (err) {
        console.log(err);
      }
    };
    getiliked();

  }, []);



  useEffect(() => {
    const newSocket = io('https://halal.onrender.com');
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('message', (updatedConversation) => {
        console.log(updatedConversation)
        setConversation(updatedConversation);
      });
    }
  }, [socket]);

  const sendMessage = async () => {
    try {
      socket.emit('message', {
        senderId: user?._id,
        recipientId: userData?._id,
        content: newMessage
      });
      // await axios.post(`${messageUrlActions}/messages`, {
      //   senderId: user?._id,
      //   recipientId: userData?._id,
      //   content: newMessage
      // });

      setNewMessage('');

    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <section className="chatContainer">
      <div className="mt-5 p-2">
        <div className="text-center">
          <p className="text-[#8E8E93] text-[14px]">Today</p>
        </div>

        {theData ? (
          <>
            {theData.messages.map((msgg, i) => (
              <>
                {msgg.sender.email === user?.email ? (
                  <div className="flex justify-end">
                    <div className="p-2 rounded-md bg-black text-white w-5/12 mt-2">
                      <p className="text-[12px]">{msgg.content}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-start mt-2">
                    <div className="p-2 rounded-md bg-[#E9E9E9] text-black w-5/12 mt-2">
                      <p className="text-[12px]">{msgg.content}</p>
                    </div>
                  </div>
                )}
              </>
            ))}
          </>
        ) : (
          <div className="flex justify-center">
            <Spinner />
          </div>
        )}




      </div>
      <div className="flex mt-[50px] bg-[#E9E9E9] space-x-2 items-center p-2">
        <RiAttachment2 />
        <TextInput id="email4" required type="text" className="w-[300px]" value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />

        <button onClick={sendMessage}>
          <AiOutlineSend />
        </button>

        <BsEmojiHeartEyes />
        <BsMic />
      </div>
    </section>
  )
}

export default MessageBody