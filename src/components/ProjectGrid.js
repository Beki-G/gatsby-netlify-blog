import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectGrid() {
  const projects = [
    {
      projectTitle: "CodeLocker",
      deployed: "https://codel0cker.herokuapp.com/",
      github: "https://github.com/MarkKelly00/codeLocker",
      gif: `codelocker.png`,
      description:
        "A place to store, retrieve code snippets and checkout other peoples as well. Built with React, MongoDB, Express, Node, AceEditor, Auth0, and Tailwind.",
    },
    {
      projectTitle: "Game Assistant",
      deployed: "https://gameassistant.herokuapp.com/",
      github: "https://github.com/Beki-G/all-my-shiki",
      gif: "gameassistant.gif",
      description:
        "Used to build teams and share teams easily when ingame sharing isn't enough. Like and favorite characters while checking out other users builds! Built with React, MongoDB, Express, Node and Auth0.",
    },
    {
      projectTitle: "React Google Book Search",
      deployed: "https://react-google-book-searchsave.herokuapp.com/",
      github: "https://github.com/Beki-G/react-google-book-search",
      gif: "book.gif",
      description:
        "Constantly tired of forgetting what books you want to read? Search them up quickly and then  Built with React, Express, Mongo, Node, Javascript, and Google Books API.",
    },
    {
      projectTitle: "Weather Dashboard",
      deployed: "https://beki-g.github.io/weatherDashboard/",
      github: "https://github.com/Beki-G/weatherDashboard",
      gif: "weather.png",
      description:
        "On the road? Checkout the weather before you reach there. Built with OpenWeather API, custom CSS, and Javascript",
    },
    {
      projectTitle: "React Employee Directory",
      deployed: "https://beki-g.github.io/react-employee-directory/",
      github: "https://github.com/Beki-G/react-employee-directory",
      gif: "emoployee.gif",
      description:
        "Using RandomPeople API, you can sort and filter through people as they were your own employees. Build with Javascript and React",
    },
    {
      projectTitle: "Quote Goat",
      deployed: "https://quotegoat.herokuapp.com/",
      github: "https://github.com/Beki-G/QuoteGOAT",
      gif: "quote.png",
      description:
        "Tired of quoting people from 100 years ago? No look no further, this place is meant to be a goat-to place for new quotes! Built with SQL database, Sequelize, Passport, and Javascript.",
    },
  ];
  return (
    <div>
      
      <div className=" bg-lgCyan mt-16 md:mt-0 w-4/5 mx-auto min-h-9/10">
        <br />
        <div className="flex flex-wrap -mx-2 overflow-hidden ">
          {projects.map((entry, index) => {
            return <ProjectCard data={entry} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectGrid;
