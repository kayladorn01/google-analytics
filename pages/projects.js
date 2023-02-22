//project page. I imported the navbar and link components

import Link from "next/link";
import Navbar from "../components/navbar";

export default () => (
  <div>
    <style global jsx>
      {`
        body {
          background-color: rgba(0, 0, 0, 0.2);
        }
      `}
    </style>
    <Navbar />
    <h1>Projects</h1>
    <p>
      Feel free to look at the different projects I have worked on. Click on{" "}
      <strong>Github</strong> to see my repositories <br />
      <span className="link">
        <Link href="https://github.com/kayladorn01">Github</Link>
      </span>
    </p>
    <style jsx>
      {`
        p {
          color: black;
          text-align: center;
        }
        .link:hover {
          font-size: 25px;
          transition: smooth;
        }
        body {
          background-color: white;
        }
      `}
    </style>
    <style jsx>
      {`
        .projects-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        }
        .project {
          height: 250px;
          aspect-ratio: 1;
          background-color: grey;
          border-radius: 16px;
          box-shadow: 1px 10px 30px;
          margin: 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 25px;
          line-height: 1.5;
        }
        .link {
          color: pink ;
        }
        h1 {
          text-align: center;
        }
        span {
          font-size: 14px;
        }
      `}
    </style>
    <h1>
      {" "}
      Here are some of my projects, click on the names to be redirected to my Github Repositories
    </h1>
    <div className="projects-container">
      <div className="project project-1">
        <Link href="https://github.com/kayladorn01/iTunes-search-API.git">
          Full stack Itunes search app 
        </Link>
        <br />
        <span className="project-description">
          Full stack (MERN) application interfacing with iTunes search API
        </span>
      </div>
      <div className="project project-2">
        <Link href="https://github.com/kayladorn01/MERN-Stack-Cars.git">
          MERN-Stack Cars
        </Link>
        <br />
        <span className="project-description">
          MERN-Stack application that uses MongoDB to Store information
        </span>
      </div>
      <div className="project project-3">
        <Link href="https://github.com/kayladorn01/ToDo-App.git">
          TO-DO Application 
        </Link>
        <br />
        <span className="project-description">
          To Do application that uses JWT authentication
        </span>
      </div>
    </div>
  </div>
);