import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { Slide } from "react-awesome-reveal";

const EducationSection = styled.section`
  padding: 50px 0;
`;

const EducationContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const EducationHeader = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 30px;
`;

const EducationList = styled.ul`
  list-style: none;
  padding: 0;
`;

const EducationCard = styled.li`
  background-color: rgb(45, 45, 58);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
  filter: drop-shadow(5px 5px 5px #fffb00);
`;

const Institution = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #fffb00;
`;

const Degree = styled.p`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

const GraduationDate = styled.p`
  font-size: 1rem;
  color: #888;
`;

const Grade = styled.p`
  font-size: 1rem;
  color: #fffb00;
`;

const Education = () => {
  const educationRef = useRef(null);

  const handleScroll = () => {
    const educationCards = educationRef.current.querySelectorAll('.education-card');
    educationCards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (cardTop < windowHeight * 0.75) {
        card.classList.add('animate');
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <EducationSection id="education">
      <EducationContainer ref={educationRef}>
        <EducationHeader> <FontAwesomeIcon icon={faGraduationCap} /> Education</EducationHeader>
        <EducationList>
          <Slide direction="left">
            <EducationCard className="education-card">
              <Institution>Datta Meghe College of Engineering CIDCO Sector III Airoli Navi Mumbai 400 708</Institution>
              <Degree>Bachelor of Engineering-BE, Information Techonology</Degree>
              <GraduationDate>Feb 2020 - June 2024</GraduationDate>
              <Grade>CGPA : 8.915/10</Grade>
            </EducationCard>
          </Slide>
          <br />
          <Slide direction='right'>
            <EducationCard className="education-card">
              <Institution>G.E.I.Z, M. H. High School and Junior College, Thane.</Institution>
              <Degree>HSC</Degree>
              <GraduationDate>May 2020</GraduationDate>
              <Grade>Percentage : 70.62%</Grade>
            </EducationCard>
          </Slide>
          <br />
          <Slide direction='left'>
            <EducationCard className="education-card">
              <Institution>Adarsh Vidyalaya Kurund</Institution>
              <Degree>SSC</Degree>
              <GraduationDate>May 2018</GraduationDate>
              <Grade>Percentage : 95.80%</Grade>
            </EducationCard>
          </Slide>
        </EducationList>
      </EducationContainer>
    </EducationSection>
  );
};

export default Education;
