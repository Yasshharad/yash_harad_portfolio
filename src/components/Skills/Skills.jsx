import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import './Skill.css';
import html from '../../images/html.png';
import css from '../../images/css.png';
import js from '../../images/js.png';
import react from '../../images/react.png';
import tailwind from '../../images/tailwind.jpg';
import angular from '../../images/angularjs.png';
import node from '../../images/node.png';
import express from '../../images/express.png';
import mongo from '../../images/mongodb.png';
import sql from '../../images/sql.png';
import java from '../../images/java.jpeg';

const Skills = () => {
  return (
    <Container id="skill">
      <Slide direction="down">
        <h4>
          Skills <span className="green"> I have</span>
        </h4>
        <h1>Frontend:-</h1>
        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src={html} alt="html" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img src={css} alt="css" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src={js} alt="js" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src={react} alt="reactjs" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src={tailwind} alt="tailwindCss" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src={angular} alt="angularjs" />
          </div>
        </div>
        <Backend>
          <h1>Backend:-</h1>
          <div>
            <Slide direction="left">
              <img src={node} alt="nodeJs" />
            </Slide>
            <Slide direction="right">
              <img src={express} alt="expressJs" />
            </Slide>
          </div>
        </Backend>
        <Database>
          <h1>Databases:-</h1>
          <div>
            <Slide direction="left">
              <img src={sql} alt="sql" />
            </Slide>
            <Slide direction="right">
              <img src={mongo} alt="mongo" />
            </Slide>
          </div>
        </Database>
        <Database>
          <h1>Programming Language:-</h1>
          <div>
            <Slide direction="left">
              <img src={java} alt="java" />
            </Slide>
          </div>
        </Database>
      </Slide>
    </Container>
  );
};

export default Skills;


const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  height: max-content;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 640px) {
    width: 90%;
    height: max-content;
  }

  h1 {
    padding-top: 1rem;
  }
  h4{
    span{
        color: #fffb00;
    }
  }

`;

const Backend = styled.div`
  margin-top:200px;
  div{
    margin-top:20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
  }
  img{
    height: 230px;
    width: 250px;
    objectfit: contain;
  }
  @media (max-width: 640px) {
  img{
    height: 150px;
    width: 180px;
    objectfit: contain;
    margin-left:50px;
  }
  }
`
const Database = styled.div`
  margin-top:100px;
  div{
    margin-top:20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 5rem;
  }
  img{
    height: 230px;
    width: 250px;
    objectfit: contain;
  }
  @media (max-width: 640px) {
    img{
    height: 150px;
    width: 180px;
    objectfit: contain;
    margin-left:50px;
  }
  }
`