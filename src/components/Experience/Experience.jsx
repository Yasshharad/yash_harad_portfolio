import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { Slide } from "react-awesome-reveal";
import alhansat from '../../images/alhansat.jpg';
import devtown from '../../images/devtown_in_logo.jpg';
import twowaits from '../../images/twowaits_technologies_logo.jpg';

const ExperienceSection = styled.section`
  padding: 50px 0;
`;

const ExperienceContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ExperienceHeader = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 30px;
`;

const ExperienceList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ExperienceCard = styled.li`
  display: flex;
  background-color: rgb(45, 45, 58);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  position: relative;
  filter: drop-shadow(5px 5px 5px #fffb00);
`;

const Timeline = styled.div`
  position: absolute;
  width: 3px;
  height: 580px;
  background-color: #fffb00;
  left: -50px;
  top: 0;
`;

const TimelineDot = styled.div`
  width: 12px;
  height: 12px;
  background-color: #fffb00;
  border-radius: 50%;
  position: absolute;
  top: -20px;
  left: -48px;
  transform: translate(-50%, -50%);
`;

const HorizontalLine = styled.div`
  position: absolute;
  width: 50px;
  height: 3px;
  background-color: #fffb00;
  left: -50px;
  top: 50%;
  transform: translateY(-50%);
`;

const Position = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #fffb00;
`;

const Company = styled.p`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

const EmploymentDate = styled.p`
  font-size: 1rem;
  color: #888;
`;

const Responsibilities = styled.ul`
  list-style: none;
  padding-top: 10px;
  padding-left: 20px;
`;

const ResponsibilityItem = styled.li`
  font-size: 0.9rem;
  color: #fffb00;
`;

// Media query for smaller screens
const mediaQuery = '@media (max-width: 768px)';

const ResponsiveExperienceCard = styled(ExperienceCard)`
  ${mediaQuery} {
    flex-direction: column;
    filter: drop-shadow(5px 5px 5px #fffb00);
  }
`;


const CompanyLogo = styled.img`
  height:50px;
  margin-right: 20px;
`;

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <Slide direction='left' duration={2000}>
        <ExperienceContainer>
          <ExperienceHeader><FontAwesomeIcon icon={faBriefcase} /> Experience</ExperienceHeader>
          <ExperienceList>
            <ExperienceCard>
              <TimelineDot />
              <Timeline />
              <HorizontalLine />
              <Slide direction='right' duration={2000}>
                <CompanyLogo src={alhansat} alt="Company 1 Logo" />
                <div>
                  <Position>Full Stack Web Developer Intern</Position>
                  <Company>Alhansat Solutions</Company>
                  <EmploymentDate>Sep 2023 - Oct 2023 · 2 months</EmploymentDate>
                  <Responsibilities>
                    <ResponsibilityItem>· Team Leadership</ResponsibilityItem>
                    <ResponsibilityItem>· Software Development Life Cycle (SDLC)</ResponsibilityItem>
                    <ResponsibilityItem>· Svelte · Full Stack Web Development</ResponsibilityItem>
                  </Responsibilities>
                </div>
              </Slide>
            </ExperienceCard>
            <ExperienceCard>
              <HorizontalLine />
              <Slide direction='right' duration={2000}>
                <CompanyLogo src={devtown} alt="Company 1 Logo" />
                <div>
                  <Position>Full-stack Developer Intern</Position>
                  <Company>DevTown</Company>
                  <EmploymentDate>Jun 2022 - Nov 2022 · 6 months</EmploymentDate>
                  <Responsibilities>
                    <ResponsibilityItem>· SASS · Document Object Model (DOM) · Redux.js · Data Structures · Server Side · Schemas</ResponsibilityItem>
                    <ResponsibilityItem>· JSON · API Development · REST APIs · C++ · Full-Stack Development · React.js · Tailwind CSS</ResponsibilityItem>
                    <ResponsibilityItem>· MongoDB · JavaScript · DevOps · Cascading Style Sheets (CSS) · HTML · Node.js · Express.js</ResponsibilityItem>
                  </Responsibilities>
                </div>
              </Slide>
            </ExperienceCard>
            <ExperienceCard>
              <HorizontalLine />
              <Slide direction='right' duration={2000}>
                <CompanyLogo src={twowaits} alt="Company 1 Logo" />
                <div>
                  <Position>Tathastu Python Scholar Intern</Position>
                  <Company>TwoWaits</Company>
                  <EmploymentDate>June 2022 · 1 month</EmploymentDate>
                  <Responsibilities>
                    <ResponsibilityItem>Python (Programming Language)</ResponsibilityItem>
                  </Responsibilities>
                </div>
              </Slide>
            </ExperienceCard>
          </ExperienceList>
        </ExperienceContainer>
      </Slide>
    </ExperienceSection>
  );
};

export default Experience;
