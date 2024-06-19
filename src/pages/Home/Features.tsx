// import React from "react";
import { GiBrain } from "react-icons/gi";
import { TbMapPin2 } from "react-icons/tb";
import { MdOutlineEditNote } from "react-icons/md";
import {
  FaCalendarCheck,
  FaChartLine,
  FaFileInvoice,
  FaRegCalendarDays,
} from "react-icons/fa6";

import MaxWidth from "../../components/layout/MaxWidth";
import FeaturesCard from "../../components/cards/FeaturesCard";

const FeaturesData = [
  {
    bg: "bg-blue-800",

    icon: <FaFileInvoice size={30} className="text-white" />,
    heading: "Flexible Communication system",
    subheading:
      "Use of chat boxes and notifications to facilitate easy communication between administrators and staff for better management.",
  },
  {
    bg: "bg-yellow-400",
    icon: <FaRegCalendarDays size={30} className="text-white" />,
    heading: "Online School Management",
    subheading:
      "Transparency in all school management activities, enabling efficient and effective operations.",
  },
  {
    bg: "bg-sky-400",
    icon: <TbMapPin2 size={30} className="text-white" />,
    heading: " Improve Admission/ Enrollment Processes",
    subheading:
      "Streamlined processes to simplify student admissions and enrollment.",
  },
  {
    bg: "bg-blue-800",
    icon: <MdOutlineEditNote size={30} className="text-white" />,
    heading: "Automated assessment Grading and Score Analysis",
    subheading:
      "Automated grading systems and analytical tools to evaluate both student and teacher performance using students' grades.",
  },
  {
    bg: "bg-red-400",
    icon: <GiBrain size={30} className="text-white" />,
    heading: "AI-Powered Features",
    subheading:
      "AI-assisted tools for creating assessments, notes, and timetables.",
  },
  {
    bg: "bg-gray-500",
    icon: <FaChartLine size={30} className="text-white" />,
    heading: "Finance Management Solution",
    subheading: "Comprehensive tools for managing school finances efficiently.",
  },
  {
    bg: "bg-slate-500",
    icon: <FaCalendarCheck size={30} className="text-white" />,
    heading: "Event Management",
    subheading:
      "Tools for creating, editing, and receiving prompt reminders about school events.",
  },
];

const Features = () => {
  return (
    <section className="my-10 text-center">
      <MaxWidth>
        <h2 className="font-semibold md:text-3xl text-2xl text-blue-800">
          Features
        </h2>
        <h5 className="text-base md:w-[45%] w-[90%] mx-auto font-light text-gray-500 mt-6 mb-20">
          EDUCATIV is a comprehensive online software suite that integrates all
          the necessary tools to successfully manage an educational institution
        </h5>
        {/* <FeaturesCard /> */}
        <div className="flex flex-wrap gap-x-12  gap-y-20 justify-center">
          {FeaturesData.map((feature, index) => (
            <FeaturesCard
              key={index}
              bgColor={feature.bg}
              icon={feature.icon}
              heading={feature.heading}
              subheading={feature.subheading}
            />
          ))}
        </div>
      </MaxWidth>
    </section>
  );
};

export default Features;
