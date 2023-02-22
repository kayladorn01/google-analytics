//this is the home page, I imported the navbar that needs to be used

import Navbar from "../components/navbar";

function Home(props) {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <style global jsx>
          {`
            body {
              background-color: white;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
            }
            .main-container {
              width: 100%;
              text-align: center;
            }
            .columns {
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              color: pink;
            }
            .column-left {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              box-shadow: 1px 1px 5px;
            }
            .column-right {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              box-shadow: 1px 1px 5px;
            }
            .column-left,
            .column-right {
              width: 45%;
              margin: 10px;
              padding: 10px;
              display: flex;
              align-content: center;
              justify-content: center;
              height: 250px;
              border-radius: 16px;
            }
            .link{
                color:pink;
            }
          `}
        </style>
        <h1>Welcome to my portfolio</h1>
        <div className="columns">
          <div className="column-left">
            <h2>Who am I?</h2>
            <p>
              My name is Kayla Dornan, I am a full stack web developer
              specializing in solving your problems on the web. I use the MERN
              stack to develop the solutions to all your
              problems. I believe in making the web accesible to all, focusing
              on accessibility by making sure sites work on all devices and
              people with different needs can access your website.{" "}
              <a href="./about">Read more about me here</a>
            </p>
          </div>
          <div className="column-right">
            <h2>My projects</h2>
            <p>
              All projects listed here are my own. My Github
              repository is linked where all source code can be seen and
              downloaded. I have a variety of projects all coded with HTML, CSS,
              JavaScript and JavaScript frameworks.
              <br />
              <a href="./projects">Click here to see some of my projects</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;