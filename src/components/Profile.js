import React from "react";

function Profile() {
  return (
    <section>
      <div className="min-w-screen min-h-4/5 min-w-4/5 bg-lgCyan flex items-center justify-center px-5 py-5">
        <div
          className="w-full mx-auto rounded-lg shadow-lg px-5 pt-5 pb-10 text-gray-800 bg-eagleGreen md:mb-10"
          style={{ maxWidth: "600px" }}
        >
          <div className="w-full pt-1 pb-5">
            <div className=" overflow-hidden rounded-full w-40 h-40 -mt-16 mx-auto shadow-lg">
              <img src={require("../assets/imgs/other/0.jpg")} alt="Beki's Profile" />
            </div>
          </div>
          <div className="w-full mb-8">
            {/* <div class="text-3xl text-indigo-500 text-left leading-tight h-3">“</div> */}
            <br />
            <p className="text-xl text-white text-center px-5">
              Full Stack Developer with administrative and customer service
              background to design and build effective and efficient web
              applications. Certificate in Full-Stack web development from the
              University of Oregon, with skills in JavaScript, HTML, CSS. A
              passionate, collaborative, and curious mindset to learn and apply
              new concepts quickly. For each project, I bring an attentive eye
              to details and a systematic approach to create and execute new
              solutions. Worked on a team to build a website to filter character
              traits from a game for other players to use as the sole web
              developer. Open and eager to utilize my skills in software and web
              development.
            </p>
            {/* <div class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div> */}
          </div>
          <div className="w-full text-center">
            <p className="text-lg mb-2 text-aquamarine font-bold ">Beki Gonzalez</p>
            
            {/* <a href="mailto:bekigonzalez01@gmail.com" className="text-sm mb-1 hover:text-sky text-gray-300">
              Email: bekigonzalez01@gmail.com
            </a>*/}
            {/* <br/>  */}
            <a
              className="text-sm mb-1 hover:text-sky text-gray-300"
              href="https://www.linkedin.com/in/rebeca-gonzalez/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn: Rebeca Gonzalez
            </a>
            <br />
            <a
              className="text-sm mb-1 hover:text-sky text-gray-300"
              href="https://github.com/Beki-G"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github: @beki-g
            </a>
            <br/>

            <a
              className="text-sm mb-1 hover:text-sky text-gray-300"
              href="https://twitter.com/bekigonzalez4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter: @bekigonzalez4
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
