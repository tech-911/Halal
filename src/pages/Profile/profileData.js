import { BsFillPersonFill } from "react-icons/bs";
import {
  MdSettingsApplications,
  MdNotificationsActive,
  MdOutlineFavorite,
  MdOutlineBlock,
} from "react-icons/md";

export const profileData = [
  {
    id: 0,
    link: "/main/edit",
    icon: <BsFillPersonFill className="profBar_icon" />,
    text: "Edit Profile",
    border: true,
    linkable: true,
  },
  {
    id: 1,
    link: "",
    icon: <MdSettingsApplications className="profBar_icon" />,
    text: "Settings",
    border: true,
    linkable: true,
  },
  {
    id: 2,
    link: "",
    icon: <MdNotificationsActive className="profBar_icon" />,
    text: "Notification",
    border: true,
    linkable: true,
  },
  {
    id: 3,
    link: "",
    icon: <MdOutlineFavorite className="profBar_icon" />,
    text: "Favourites",
    border: true,
    linkable: true,
  },
  {
    id: 4,
    link: "",
    icon: <MdOutlineBlock className="profBar_icon" />,
    text: "Blocked",
    border: true,
    linkable: true,
  },
];
