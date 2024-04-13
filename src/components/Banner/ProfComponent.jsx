import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram, AiFillGithub } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedinIn, FaHackerrank } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import image from '../../images/profile.png';

const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello Everyone!
          </h4>
          <span className="green">I'am</span>
          <h1 className="green">Yash Harad</h1>
          <h3>Full Stack Web Developer</h3>
          <a href="https://drive.google.com/file/d/1VIPwcFRnrGJ_CGwTDWE5HFLNkmS8BmMT/view?usp=sharing" target="_blank" rel="noreferrer">
            Checkout My Resume
          </a>
          <br />

          <p>
            <br />
            Experienced Full-stack Developer adept at managing software life cycles, conducting routine tests, and implementing upgrades. Skilled in multiple development languages, database building, and cache mechanisms. Exceptional teamwork and communication abilities, fostering effective collaboration among colleagues. Adaptable and detail-oriented, consistently delivering high-quality results.
          </p>
          <button><a href="#footer">
            Let's Talk
          </a></button>

          <Social>
            <p>Check out me on</p>
            <br />
            <div className="social-icons">
              <span>
                <a href="https://www.linkedin.com/in/yash-harad-a60812227/" target="_blank" rel="noreferrer">
                  <FaLinkedinIn />
                </a>
              </span>
              <span>
                <a href="https://github.com/Yasshharad" target="_blank" rel="noreferrer" >
                  <AiFillGithub />
                </a>
              </span>
              <span>
                <a href="https://www.hackerrank.com/haradyash0244?hr_r=1" target="_blank" rel="noreferrer">
                  <FaHackerrank />
                </a>
              </span>
              <span>
                <a href="https://leetcode.com/Yash_Harad/" target="_blank" rel="noreferrer">
                  LC
                </a>
              </span>
              <span>
                <a href="https://www.instagram.com/_yash_harad_/" target="_blank" rel="noreferrer">
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a href="https://www.facebook.com/yash.harad.0836/" target="_blank" rel="noreferrer">
                  <BsFacebook />
                </a>
              </span>
              <span>
                <a href="https://yasshharad.github.io/yash_harad_portfolio/" target="_blank" rel="noreferrer">
                  <GiEarthAmerica />
                </a>
              </span>

            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src={image}
            alt="profile"
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
    span{
      color: #fffb00;
    }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.5rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
    color: #fffb00;
    background-image: linear-gradient(
    -225deg,
    #237557 0%,
    #ff1361 29%,
    #fff361 67%,
    #fff870 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 5s linear infinite;
  }
  @keyframes textclip {
  to {
    background-position: 200% center;
  }
}
  p {
    font-weight: 300;
  }
  a{
    color: #ffffff;
  }
  button {
  gap: 1rem;
  padding: 0.7rem 2rem;
  margin-top: 3rem;
  cursor: pointer;
  background-color: #fffb00;
  border: none;
  a{
    color: #000000;
  }
  font-weight: 500;
  filter: drop-shadow(0px 10px 10px #01be9551);
  :hover {
    filter: drop-shadow(0px 10px 10px #01be9570);
  }
}
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #fffb00;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #000000;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Profile = styled.div`
  img {
    width: 20rem;
    filter: drop-shadow(0px 10px 10px #ffffff);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-20px);
  }
`;
