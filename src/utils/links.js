import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoMapSharp } from "react-icons/io5";
import { LuClipboardList } from "react-icons/lu";
import { MdWorkOutline } from "react-icons/md";

const links = [
  {
    id: 1,
    text: "stats",
    path: "/",
    icon: <IoBarChartSharp />,
  },
  {
    id: 2,
    text: "all jobs",
    path: "all-jobs",
    icon: <MdQueryStats />,
  },
  {
    id: 3,
    text: "add jobs",
    path: "add-jobs",
    icon: <FaWpforms />,
  },
  {
    id: 4,
    text: "job search",
    path: "job-search",
    icon: <MdWorkOutline />,
  },
  {
    id: 5,
    text: "map",
    path: "map",
    icon: <IoMapSharp />,
  },
  {
    id: 6,
    text: "activities",
    path: "activities",
    icon: <LuClipboardList />,
  },
  {
    id: 7,
    text: "profile",
    path: "profile",
    icon: <ImProfile />,
  },
];
export default links;
