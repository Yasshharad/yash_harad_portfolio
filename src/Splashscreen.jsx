import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Bounce, Fade } from 'react-awesome-reveal';

const SplashScreen = () => {
    const [visible, setVisible] = useState(true);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisible(false);
            setAnimate(true);
        }, 8000);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 1, scaleY: 1 }}
            animate={{ opacity: animate ? 0 : 1, scaleY: animate ? 0 : 1 }}
            transition={{ duration: 1 }}
            style={styles.container}
        >
            <Fade direction="down" duration={2000} triggerOnce>
                <motion.h1 style={styles.message}>
                    Every accomplishment starts with the decision to try.
                </motion.h1>
            </Fade>
            <hr style={styles.line} />

            <Fade direction="right" duration={2000} triggerOnce>
                <motion.h2 style={styles.message}>
                    हर उपलब्धि प्रयास करने के निर्णय से शुरू होती है।
                </motion.h2>
            </Fade>
            <hr style={styles.line} />

            <Bounce direction="top" duration={2000} triggerOnce>
                <motion.h2 style={styles.message}>
                    प्रत्येक यशाची सुरुवात प्रयत्न करण्याच्या निर्णयाने होते.
                </motion.h2>
            </Bounce>
            <hr style={styles.line} />
        </motion.div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#ffffff',
        backgroundImage: 'linear-gradient(45deg, #000000, #00008B)',
    },
    message: {
        fontSize: '1.5rem',
        color: '#FFF',
        margin: '0',
        textAlign: 'center',
        padding: '20px',
    },
    line: {
        width: '70%',
        height: '2px',
        backgroundColor: '#fffb00',
        border: 'none',
        margin: '20px 0',
    },
};

export default SplashScreen;
