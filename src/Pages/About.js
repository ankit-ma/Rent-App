import "./About.css";
import img from "../Resources/photo.jpg";
// import { FaMobileAlt } from "react-icons/fa";
import { AiFillMail, AiFillGithub, AiFillFilePdf } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

function About(props) {
  return (
    <div>
      <div className="about">
        <div className="mydesc">
          <div className="imgContainer">
            <img src={img}></img>
            <div className="smalldesc">
              <h1>Ankit Kumar</h1>
              <p>Java | C/C++| Python | React Js | JavaScript </p>
            </div>
          </div>
          <p>
            <em className="dep">
              {" "}
              I am a final year engineering student pursing <br />
              Information technology from University institute of technology,
              Burdwan.
              <br />
              You can contact me or download my resume from below details.
            </em>
          </p>

          <div className="details">
            <div className="fulldetail">
              <div style={{ textAlign: "center" }}>
                <a href="https://bit.ly/3nQMXSQ" target="_blank">
                  <AiFillFilePdf className="icond" />
                </a>
                <p>Resume</p>
              </div>
            </div>
            <div className="fulldetail">
              <div style={{ textAlign: "center" }}>
                <a
                  href="https://leetcode.com/ankitsharmauitbu/"
                  target="_blank"
                >
                  <SiLeetcode className="icond" />
                </a>

                <p>Leetcode</p>
              </div>
            </div>
            <div className="fulldetail">
              <div style={{ textAlign: "center" }}>
                <a>
                  <AiFillMail className="icond" />
                </a>
                <p>ankitsharmauitbu@gmail.com</p>
              </div>
            </div>
            <div className="fulldetail">
              <div style={{ textAlign: "center" }}>
                <a
                  href="https://www.linkedin.com/in/ankit-kumar-5062191ab/"
                  target="_blank"
                >
                  <BsLinkedin className="icond" />
                </a>

                <p>Linkedin</p>
              </div>
            </div>
            <div className="fulldetail">
              <div style={{ textAlign: "center" }}>
                <a href="https://github.com/ankit-ma" target="_blank">
                  <AiFillGithub className="icond" />
                </a>

                <p>Github</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // return (
  //   <div>
  //     <h1>I about page</h1>
  //   </div>
  // );
}
export default About;
