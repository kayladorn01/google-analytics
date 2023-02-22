//about page, I imported the Image, navbar and accordion components

import Accordion from "../components/accordion";
const styles = {
  fontFamily: "Roboto",
};
import Navbar from "../components/navbar";
import Image from "next/image";

export default () => (
  <div>
    <Navbar />
    <style global jsx>{`
      h1 {
        text-align: center;
      }
      body {
        background-color: white;
      }
      .picture {
        border-radius: 100%;
        margin: 0 auto;
      }
      .image-container {
        display: flex;
        justify-self: center;
      }
    `}</style>
    <div>
      <div className="image-container">
        <Image
          src="/profile.jpeg"
          alt="profile pic"
          width="200"
          height="200"
          className="picture"
        />
      </div>

      <h1>Who is Kayla?</h1>

      <div style={styles}>
        <Accordion
          title="Education"
          content="<h1>My education</h1>
        <br/>
        <h2>HyperionDev</h2>
        <span>Full stack Web Development Bootcamp</span>
        <span>Completed: 2023</span>"
        />
        <Accordion
          title="Experience"
          content="
            <h1>My experience</h1>
            <br/>
            <h2>Carsmetic Surgeon</h2>
            <span>Receptionist/Administration</span>
            <span>Years worked: 2021 - 2021</span>
            <br/>
            <h2>Zoetis</h2>
            <span>Pharmasuetical Sales Rep</span>
            <span>Years worked: 2021 - 2021</span>"
        />
      </div>
    </div>
  </div>
);