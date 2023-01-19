//import React, { useState, useEffect } from "react";
import React from "react";
import { useState, useEffect } from "react";

import { motion } from "framer-motion";
// import { images } from "../../constants";
import { AppWrap,MotionWrap } from "../../wrapper";

import { urlFor, client } from "../../client";
import "./About.scss";

//=======Static Data from code for frontend =====
// const abouts = [
//   {
//     title: "Web Development",
//     description: "I am a good web developer.",
//     imgUrl: images.about01,
//   },

//   {
//     title: "CMS Design",
//     description: "I am a good web developer.",
//     imgUrl: images.about02,
//   },

//   {
//     title: "Frontend Design",
//     description: "I am a good web developer.",
//     imgUrl: images.about03,
//   },

//   {
//     title: "MERN STACK",
//     description: "I am a good web developer.",
//     imgUrl: images.about04
//   },
// ];

const About = () => {
  //=======Making Dynamic CMS using a useState field =====
  const [abouts, setAbouts] = useState([]);

  //=======Run useEffect at start when componenets loads =====
  useEffect(() => {
    //=======Query for fetching the about section =====
    //=======TO fetch and manipulate data =====
    const query = "*[_type == 'abouts']";

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        I know That <span>Good Design</span> <br /> means
        <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};


// export default About;

//=========AppWrap Higher Order Component(HOC)=================================
// export default AppWrap(About, "about");

//=========AppWrapp with Motions Wrapper Higher Order Component(HOC)=================================
export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);