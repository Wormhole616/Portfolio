//Imports
import React from "react";
import "./About.css";
import hero from "../../../images/HeroImage.png";
import CardMedia from "@mui/material/CardMedia";

// Function that renders the about page & exports
export default function About() {
  return (
    <>
      <div className="image-container">
        <CardMedia
          component="img"
          className="color-img"
          style={{
            height: "auto",
            width: "50%",
            margin: "0 auto",
            paddingTop: "20px",
          }}
          image={smith}
          alt="Smith Rock State Park, Oregon"
        />
      </div>

      <div style={{ width: "70%", margin: "0 auto" }}>
        <h1 id="about-me-title">About Me</h1>
        <p id="p-about">
        Meet Gustavo, a dedicated professional residing in the beautiful state of Oregon.
        With over 4 years of experience in the recycling industry, he has developed a deep understanding of the field.
        </p>
        <p id="p-about">
        His passion for technology is evident in his constant pursuit of knowledge, seizing every opportunity to learn more. 
        But Gustavo’s world doesn’t revolve solely around work and technology..He is passionate about photograpy too{" "}
        </p>
        <p id="p-about">
        At the heart of his life are his four daughters, who bring joy and purpose to his everyday existence.
        </p>
        <p id="p-about">
        Sharing their home are three beloved dogs - a charming Basset Hound and two majestic English Cream Golden Retrievers.
        Together, they make Gustavo’s life a blend of professional fulfillment, continuous learning, and delightful chaos. Welcome to his journey.
        </p>
        
      </div>
    </>
  );
}