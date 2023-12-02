import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';

const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #ffffff;
    background-image: linear-gradient(45deg, #000000, #00008b);
    padding: 20px;
`;

const Message = styled(motion.h1)`
    font-size: 1.5rem;
    margin: 0;
    padding: 20px;

    @media (max-width: 768px) {
        flex: 1;
        font-size: 8px;
    }
`;

const Line = styled.hr`
    width: 90%;
    height: 2px;
    background-color: #fffb00;
    border: none;
    margin: 20px 0;
    @media (max-width: 768px) {
         width: 100%;
    }
`;

const SplashScreen = () => {
    const [animate, setAnimate] = useState(false);
    const [typedText, setTypedText] = useState('');
    const [typedOutputText, setTypedOutputText] = useState('');
    const [showText3, setShowText3] = useState(false);

    const codeText = `public class Life {
    public static void main(String[] args) {
        System.out.println("Life is an abstract class, you must implement its methods.");
    }
}`;

    const outputText = `Output: Life is an abstract class, you must implement its methods.`;

    useEffect(() => {
        setAnimate(true);
        animateText(codeText, setTypedText)
            .then(() => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        animateText(outputText, setTypedOutputText).then(() => {
                            resolve();
                        });
                    }, 0); // Adding a delay before starting output text animation
                });
            });
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setTypedText(false);
            setTypedOutputText(false);
            setShowText3(true);
        }, 4300);
    }, []);

    const animateText = (text, setTextFunction) => {
        return new Promise((resolve) => {
            let index = 0;
            const typingInterval = setInterval(() => {
                if (index <= text.length) {
                    setTextFunction(text.slice(0, index));
                    index++;
                } else {
                    clearInterval(typingInterval);
                    resolve();
                }
            }, 15); // Adjust the typing speed here (milliseconds per character)
        });
    };

    return (
        <Container
            initial={{ opacity: 1 }}
            animate={{ opacity: animate ? 0 : 1 }}
            transition={{ duration: 30 }}
        >
            <Fade direction="down" triggerOnce>
                <Message>
                    <pre>
                        <code>{typedText}</code>
                    </pre>
                </Message>
            </Fade>
            <Line />
            <Fade direction="down" triggerOnce>
                <Message>
                    <pre>
                        <code>{typedOutputText}</code>
                    </pre>
                </Message>
            </Fade>
            {showText3 && (
                <Fade direction="down" triggerOnce>
                    <Message>
                        <pre>
                            <code>Welcome to My Portfolio</code>
                        </pre>
                    </Message>
                </Fade>
            )}
            <br />
            <Line />
        </Container>
    );
};

export default SplashScreen;
