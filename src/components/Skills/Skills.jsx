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
  }
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Adjusted for mobile screens */
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
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JS', level: 80 },
    { name: 'ReactJs', level: 80 },
    { name: 'Tailwind CSS', level: 75 },
    { name: 'Svelte', level: 75 },
  ];

  const skill1s = [
    { name: 'NodeJs', level: 90 },
    { name: 'ExpressJs', level: 90 }
  ];

  const skill2s = [
    { name: 'MongoDB', level: 90 },
    { name: 'MySQL', level: 90 }
  ];

  const skill3s = [
    { name: 'Java', level: 80 },
    { name: 'Python', level: 60 }
  ];

  const animateSkill = (element, circumference, level) => {
    const offset = circumference - (level / 100) * circumference;
    element.style.strokeDashoffset = offset;
    element.style.transition = 'stroke-dashoffset 2s ease-in-out';
  };

  const animateSkills = (skills) => {
    skills.forEach(skill => {
      const radius = 40;
      const circumference = 2 * Math.PI * radius;
      const progressCircle = document.getElementById(`progress-circle-${skill.name}`);
      progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
      progressCircle.style.strokeDashoffset = circumference;
      animateSkill(progressCircle, circumference, skill.level);
    });
  };

  useEffect(() => {
    animateSkills(skills);
  }, []);

  useEffect(() => {
    animateSkills(skill1s);
  }, []);

  useEffect(() => {
    animateSkills(skill2s);
  }, []);

  useEffect(() => {
    animateSkills(skill3s);
  }, []);

  return (
    <SkillsSection id="skill">
      <Slide direction='left'>
        <SkillsContainer>
          <SkillsHeader>
            Skills <br /><p>Frontend</p>
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
                    transform="rotate(-90, 50, 50)"
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
