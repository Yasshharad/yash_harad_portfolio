import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Slide } from "react-awesome-reveal";

const SkillsSection = styled.section`
  padding: 50px 0;
`;

const SkillsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SkillsHeader = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 30px;
  p {
    color: #fffb00;
    font-size: 30px;
    margin-right: 600px;
  }
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 skills in 1 row on mobile screens */
  }
`;

const SkillItem = styled.li`
  margin-bottom: 20px;
  text-align: center;
`;

const SkillTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const SvgWrapper = styled.svg`
  width: 100px;
  height: 100px;
  margin: 0 auto;
`;

const Skills = () => {

  const animateSkill = (element, circumference, level) => {
    const offset = circumference - (level / 100) * circumference; // Set initial offset based on level in clockwise direction
    element.style.strokeDashoffset = offset;
    element.style.transition = 'stroke-dashoffset 2s ease-in-out';
  };

  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JS', level: 80 },
    { name: 'ReactJs', level: 80 },
    { name: 'Tailwind CSS', level: 75 },
    { name: 'Svelte', level: 75 },
  ];

  useEffect(() => {
    skills.forEach(skill => {
      const radius = 40;
      const circumference = 2 * Math.PI * radius;

      const progressCircle = document.getElementById(`progress-circle-${skill.name}`);
      progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
      progressCircle.style.strokeDashoffset = circumference; // Start with full circumference

      animateSkill(progressCircle, circumference, skill.level);
    });
  }, []);

  const skill1s = [
    { name: 'NodeJs', level: 90 },
    { name: 'ExpressJs', level: 90 }
  ];

  useEffect(() => {
    skill1s.forEach(skill1 => {
      const radius = 40;
      const circumference = 2 * Math.PI * radius;

      const progressCircle = document.getElementById(`progress-circle-${skill1.name}`);
      progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
      progressCircle.style.strokeDashoffset = circumference; // Start with full circumference

      animateSkill(progressCircle, circumference, skill1.level);
    });
  }, []);

  const skill2s = [
    { name: 'MongoDB', level: 90 },
    { name: 'MySQL', level: 90 }
  ];

  useEffect(() => {
    skill2s.forEach(skill2 => {
      const radius = 40;
      const circumference = 2 * Math.PI * radius;

      const progressCircle = document.getElementById(`progress-circle-${skill2.name}`);
      progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
      progressCircle.style.strokeDashoffset = circumference; // Start with full circumference

      animateSkill(progressCircle, circumference, skill2.level);
    });
  }, []);

  const skill3s = [
    { name: 'Java', level: 80 },
    { name: 'Python', level: 60 }
  ];

  useEffect(() => {
    skill3s.forEach(skill3 => {
      const radius = 40;
      const circumference = 2 * Math.PI * radius;

      const progressCircle = document.getElementById(`progress-circle-${skill3.name}`);
      progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
      progressCircle.style.strokeDashoffset = circumference; // Start with full circumference

      animateSkill(progressCircle, circumference, skill3.level);
    });
  }, []);

  return (
    <SkillsSection id="skill">
      <Slide direction='left'>
        <SkillsContainer>
          <SkillsHeader>
            Skills <br /><br /> <p>Frontend</p>
          </SkillsHeader>
          <SkillList>
            {skills.map((skill, index) => (
              <SkillItem key={index}>
                <SkillTitle>{skill.name}</SkillTitle>
                <SvgWrapper>
                  <circle
                    id={`progress-circle-${skill.name}`}
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#fffb00"
                    strokeWidth="10"
                    strokeLinecap="round"
                    transform="rotate(-90, 50, 50)" // Start from the top (12 o'clock position)
                  />
                </SvgWrapper>
              </SkillItem>
            ))}
          </SkillList>
        </SkillsContainer>
      </Slide>
      <br />
      <br />
      <Slide direction='right'>
        <SkillsContainer>
          <SkillsHeader>
            <p>Backend</p>
          </SkillsHeader>
          <SkillList>
            {skill1s.map((skill1, index) => (
              <SkillItem key={index}>
                <SkillTitle>{skill1.name}</SkillTitle>
                <SvgWrapper>
                  <circle
                    id={`progress-circle-${skill1.name}`}
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#fffb00"
                    strokeWidth="10"
                    strokeLinecap="round"
                    transform="rotate(-90, 50, 50)" // Start from the top (12 o'clock position)
                  />
                </SvgWrapper>
              </SkillItem>
            ))}
          </SkillList>
        </SkillsContainer>
      </Slide>
      <br />
      <br />
      <Slide direction='left'>
        <SkillsContainer>
          <SkillsHeader>
            <p>Databases</p>
          </SkillsHeader>
          <SkillList>
            {skill2s.map((skill2, index) => (
              <SkillItem key={index}>
                <SkillTitle>{skill2.name}</SkillTitle>
                <SvgWrapper>
                  <circle
                    id={`progress-circle-${skill2.name}`}
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#fffb00"
                    strokeWidth="10"
                    strokeLinecap="round"
                    transform="rotate(-90, 50, 50)"
                  />
                </SvgWrapper>
              </SkillItem>
            ))}
          </SkillList>
        </SkillsContainer>
      </Slide>
      <br />
      <br />
      <Slide direction='right'>
        <SkillsContainer>
          <SkillsHeader>
            <p>Programming Languages</p>
          </SkillsHeader>
          <SkillList>
            {skill3s.map((skill3, index) => (
              <SkillItem key={index}>
                <SkillTitle>{skill3.name}</SkillTitle>
                <SvgWrapper>
                  <circle
                    id={`progress-circle-${skill3.name}`}
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#fffb00"
                    strokeWidth="10"
                    strokeLinecap="round"
                    transform="rotate(-90, 50, 50)" // Start from the top (12 o'clock position)
                  />
                </SvgWrapper>
              </SkillItem>
            ))}
          </SkillList>
        </SkillsContainer>
      </Slide>

    </SkillsSection>
  );
};

export default Skills;
