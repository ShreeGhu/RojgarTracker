import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoMapSharp } from "react-icons/io5";
import { SiSololearn } from "react-icons/si";
import { MdWorkOutline } from "react-icons/md";
import {ImCalendar} from 'react-icons/im'

const links = [
  {
    id: 1,
    text: "all jobs",
    path: "all-jobs",
    icon: <MdQueryStats />,
  },
  {
    id: 2,
    text: "add jobs",
    path: "add-jobs",
    icon: <FaWpforms />,
  },
  {
    id: 3,
    text: "job search",
    path: "job-search",
    icon: <MdWorkOutline />,
  },
  {
    id: 4,
    text: "map",
    path: "map",
    icon: <IoMapSharp />,
  },
  {
    id: 4,
    text: "Calendar",
    path: "demo-app",
    icon: <ImCalendar />,
  },
  {
    id: 5,
    text: "Learning",
    path: "learning",
    icon: <SiSololearn />,
  },
  {
    id: 6,
    text: "profile",
    path: "profile",
    icon: <ImProfile />,
  },
];
export default links;
