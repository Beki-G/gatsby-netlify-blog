import React from "react";
import Card from "./Card";
import TechBanner from "./TechBanner";
import HTMLpic from "../assets/imgs/stack/HTML5.png";
import CSSpic from "../assets/imgs/stack/CSS.png";
import JQuerypic from "../assets/imgs/stack/jquery.png";
import jsPic from "../assets/imgs/stack/javascript.png";
import bootstrapPic from "../assets/imgs/stack/bootstrap.png";
import bulmaPic from "../assets/imgs/stack/bulma.svg";
import reactPic from "../assets/imgs/stack/react.png";
import gatsbyPic from "../assets/imgs/stack/gatsby.svg"
import apiPic from "../assets/imgs/stack/api.svg";
import expressPic from "../assets/imgs/stack/express-js.png";
import gitPic from "../assets/imgs/stack/git.svg";
import githubPic from "../assets/imgs/stack/github.svg";
import herokuPic from "../assets/imgs/stack/heroku.svg";
import netlify from "../assets/imgs/stack/netlify.svg"
import mongoPic from "../assets/imgs/stack/mongodb.svg";
import mysqlPic from "../assets/imgs/stack/mySQL.svg";
import nodePic from "../assets/imgs/stack/node.png";
import tailwindPic from "../assets/imgs/stack/tailwind.svg"

function CardGrid() {
    const knowledgeBase=[
        {
            type:"Browser",
            name: "HTML",
            image: HTMLpic,
        },
        {
            type:"Browser",
            name: "CSS",
            image: CSSpic,
        },
        {
            type:"Browser",
            name: "JQuery",
            image: JQuerypic,
        },
        {
            type:"Browser",
            name: "Javascript",
            image: jsPic,
        },
        {
            type:"Framework",
            name: "Bootstrap",
            image: bootstrapPic,
        },
        {
            type:"Framework",
            name: "Bulma",
            image: bulmaPic,
        },
        {
            type:"Framework",
            name: "React",
            image:reactPic,
        },
        {
            type:"Framework",
            name: "Gatsby",
            image: gatsbyPic,
        },
        {
            type:"Framework",
            name: "Tailwind",
            image: tailwindPic,
        },
        {
            type:"DevTools",
            name: "Git",
            image: gitPic,
        },
        {
            type:"DevTools",
            name: "GitHub",
            image: githubPic,
        },
        {
            type:"DevTools",
            name: "Heroku",
            image: herokuPic,
        },
        {
            type: "DevTools",
            name: "Netlify",
            image: netlify,
        },
        {
            type:"Databases",
            name: "MongoDB",
            image: mongoPic,
        },
        {
            type:"Databases",
            name: "MySQL",
            image: mysqlPic,
        },
        {
            type:"Server Side",
            name: "Node.js",
            image: nodePic,
        },
        {
            type:"Server Side",
            name: "Express.js",
            image: expressPic,
        },
        {
            type:"Server Side",
            name: "APIs",
            image: apiPic,
        },
    ]
  return (
    <div className=" bg-lgCyan mt-16 md:mt-0">
        <TechBanner />
        <br />
      <div className="flex flex-wrap overflow-hidden w-4/5 mx-auto mt-8">
        {knowledgeBase.map((entry, index)=>{
            return <Card data={entry} key={index} />
        })}
      </div>
    </div>
  );
}

export default CardGrid;
