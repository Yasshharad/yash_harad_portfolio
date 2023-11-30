import React, { useState, useEffect } from 'react';
import SplashScreen from './Splashscreen';

import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const hideSplash = setTimeout(() => {
      setShowSplash(false);
    }, 5000); // Hide splash screen after 5 seconds (5000 milliseconds)

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(hideSplash);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen />} {/* Render the splash screen based on state */}
      {
        !showSplash && (
          <Container>
            <Banner>
              <Header />
              <ProfComponent />
            </Banner>
            <Education />
            <Banner>
              <Skills />
            </Banner>
            <Experience />
            <Banner>
              <Projects />
            </Banner>
            <Footer />
          </Container>
        )
      }
    </>

  );
}

export default App;

const Container = styled.div``;
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  height: relative;
  padding-bottom: 2rem;
  @media (max-width: 640px) {
    height: relative;
    padding-bottom: 2rem;
  }
`;
