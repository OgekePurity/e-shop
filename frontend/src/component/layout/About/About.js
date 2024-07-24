import React from 'react'
import "./about.css"
import { Typography , Button , Avatar } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MetaData from '../MetaData';

const About = () => {
    const visitInstagram = () => {
    window.location = "https://www.instagram.com/_purity_0/";
  };
  return (
    <div className="aboutSection">
    <MetaData title={"Shopie. || About"}/>
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/drb8k3xyi/image/upload/v1722422090/_fd37ceab-dfc1-410f-9915-5784e7d08984_ynyjso.jpg"
              alt="Founder"
            />
            <Typography>Purity Ogeke</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a simple E-commerce wesbite named Shopie. made by PurityOgeke for a project
              
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Meet me</Typography>
            <a
              href="https://www.linkedin.com/in//"
              target="blank"
            >
              <LinkedInIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://wa.me/" target="blank">
              <WhatsAppIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
