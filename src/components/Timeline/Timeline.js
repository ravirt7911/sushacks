import React from "react";
import "./Timeline.css";

const Timeline = () => {
  const data = [
    {
      Heading: "Registration Begins",
      Time: "20-03-2024",
    },
    {
      Heading: "Registration Ends",
      Time: "26-03-2024",
    },
    {
      Heading: "Project Submission",
      Time: "29-04-2024",
    },
    {
      Heading: "Hackathon day",
      Time: "14-04-2024",
    },
    {
      Heading: "Lunch Time",
      Time: "14-04-2024 1:00pm",
    },
    {
      Heading: "Dinner",
      Time: "14-04-24 8:00pm",
    },
    {
      Heading: "Snacks",
      Time: "14-04-24 5:00pm",
    },
    {
      Heading: "Breakfast",
      Time: "15-04-24 9:00am",
    },
    {
      Heading: "Prize Announcement",
      Time: "15-04-2024",
    },
  ];

  return (
    <div className="timeline-container">
      <h1 className="timeline-heading">Timeline</h1>
    </div>
  );
};

export default Timeline;
