import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { Slide } from "react-awesome-reveal";
import alhansat from '../../images/alhansat.jpg';
import devtown from '../../images/devtown_in_logo.jpg';
import twowaits from '../../images/twowaits_technologies_logo.jpg';
import oasis from '../../images/oasis_infobyte_logo.jpg';
import bharat from '../../images/bharat_intern_logo.jpg';
import internship_studio from '../../images/internship_studio_logo.jpg';

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
  height: 850px;
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

const CompanyLogo = styled.img`
  height:50px;
  margin-right: 20px;
`;
const Description = styled.p`
  font-size: 12px;
  color: #fff;
  margin-top: 2px;
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
                <CompanyLogo src={internship_studio} alt="Company 1 Logo" />
                <div>
                  <Position>Web Development and Design Intern</Position>
                  <Company>Internship Studio</Company>
                  <EmploymentDate>Jan 2024 - Feb 2024 · 1 month</EmploymentDate>
                  <Responsibilities>
                    <ResponsibilityItem>· HTML5 · JavaScript · Cascading Style Sheets (CSS) · React.js · Bootstrap</ResponsibilityItem>
                  </Responsibilities>
                  <Description>
                  · Created an impressive e-commerce website with HTML, CSS, JavaScript, jQuery, and Bootstrap, ensuring seamless navigation and enhancing the visual appeal of an online shopping platform.                  
                  </Description>
                </div>
              </Slide>
            </ExperienceCard>
            <ExperienceCard>
              <Timeline />
              <HorizontalLine />
              <Slide direction='right' duration={2000}>
                <CompanyLogo src={bharat} alt="Company 1 Logo" />
                <div>
                  <Position>Full Stack Web Developer Intern</Position>
                  <Company>Bharat Intern</Company>
                  <EmploymentDate>Jan 2024 - Feb 2024 · 1 month</EmploymentDate>
                  <Responsibilities>
                    <ResponsibilityItem>· HTML5 · Cascading Style Sheets (CSS) · Node.js · Express.js · JavaScript · MongoDB</ResponsibilityItem>
                  </Responsibilities>
                  <Description>
                  · Contributed to software development projects within the Software Development sector.     
                  </Description>
                  <Description>
                  · Designed, developed, and maintained software applications, ensuring functionality and efficiency.                  
                  </Description>
                  <Description>
                  · Developed a responsive registration form webpage using HTML, CSS, and JavaScript.                  
                  </Description>
                  <Description>
                  · Collaborated on a Node.js and MongoDB-based money tracker app for expense tracking and financial reporting.              
                  </Description>
                </div>
              </Slide>
            </ExperienceCard>
            <ExperienceCard>
              <Timeline />
              <HorizontalLine />
              <Slide direction='right' duration={2000}>
                <CompanyLogo src={oasis} alt="Company 1 Logo" />
                <div>
                  <Position>Web Development and Design Intern</Position>
                  <Company>Oasis Infobyte</Company>
                  <EmploymentDate>Dec 2023 - Jan 2024 · 1 month</EmploymentDate>
                  <Responsibilities>
                    <ResponsibilityItem>· HTML5 · React.js · Node.js · Express.js · MongoDB · JavaScript · Cascading Style Sheets (CSS)</ResponsibilityItem>
                  </Responsibilities>
                  <Description>
                  · Contributed to the Software Development sector by creating impactful projects.
                  </Description>
                  <Description>
                  · Created a captivating landing page using HTML, CSS, and JavaScript to engage visitors and effectively promote a product or service.
                  </Description>
                  <Description>
                  · Developed a professional portfolio website using HTML, CSS, and JavaScript to showcase skills, experience, and projects.                 
                  </Description>
                  <Description>
                  · Implemented a temperature converter application using HTML, CSS, and JavaScript to convert between Celsius, Fahrenheit, and Kelvin.                  
                  </Description>
                </div>
              </Slide>
            </ExperienceCard>
            <ExperienceCard>
              <Timeline />
              <HorizontalLine />
              <Slide direction='right' duration={2000}>
                <CompanyLogo src={alhansat} alt="Company 1 Logo" />
                <div>
                  <Position>Full Stack Web Developer Intern</Position>
                  <Company>Alhansat Solutions</Company>
                  <EmploymentDate>Sep 2023 - Oct 2023 · 2 months</EmploymentDate>
                  <Responsibilities>
                    <ResponsibilityItem>· Team Leadership · Software Development Life Cycle (SDLC) · Svelte · Full Stack Web Development</ResponsibilityItem>
                    <ResponsibilityItem>· Full Stack Web Development</ResponsibilityItem>
                  </Responsibilities>
                  <Description>
                  · Spearheaded collaboration efforts with a dynamic team of interns, driving the development of the highly successful Website Image Extractor project.
                  </Description>
                  <Description>
                  · Demonstrated exceptional leadership skills as a co-lead, guiding and empowering team members to achieve project milestones and exceed expectations.
                  </Description>
                  <Description>
                  · Implemented a robust grading system to evaluate and recognize individual team members' performance, resulting in enhanced productivity and accountability.                 
                  </Description>
                  <Description>
                  · Actively contributed to the inception and execution of the groundbreaking Website Image Extractor project, playing a pivotal role in its seamless implementation and overall success.                  
                  </Description>
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
                  <Description>
                  · Collaborated with a team of developers to design, develop, and implement software solutions for 3-4 projects including Zomato_clone, book_my_show_clone, task management application, and book management application.                  
                  </Description>
                  <Description>
                  · Actively contributed to the design and development process, ensuring optimal functionality and user experience.                  
                  </Description>
                  <Description>
                  · Played a key role in implementing existing features of real projects, showcasing a strong understanding of software development principles.                 
                  </Description>
                  <Description>
                  · Utilized my Full Stack Developer skills to enhance the projects and deliver high-quality solutions.                  
                  </Description>
                  <Description>
                  · Demonstrated effective teamwork and communication skills while working in a collaborative environment.                  
                  </Description>
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
                    <ResponsibilityItem>· Python (Programming Language)</ResponsibilityItem>
                  </Responsibilities>
                  <Description>
                  · Worked on Project: Ai voice Assistant                  
                  </Description>
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
