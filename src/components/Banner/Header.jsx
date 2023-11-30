import React, { useState } from 'react'
import styled from 'styled-components';
import logo_yash from '../../images/logo_yash.jpeg';

const Header = () => {
    const [bar, setBar] = useState(false);

    // Function to toggle the sidebar when a navigation link is clicked
    const handleNavLinkClick = () => {
        setBar(!bar);
    };

    return (
        <Container bar={bar}>
            <Logo>
                <span className='green'>
                    <img src={logo_yash} alt="profile" />
                </span>
                <h1>My Portfolio</h1>
            </Logo>
            <Nav bar={bar}>
                <span>
                    <a href="#home" onClick={handleNavLinkClick}>
                        Home
                    </a>
                </span>
                <span>
                    <a href="#education" onClick={handleNavLinkClick}>
                        Education
                    </a>
                </span>
                <span>
                    <a href="#skill" onClick={handleNavLinkClick}>
                        Skills
                    </a>
                </span>
                <span>
                    <a href="#experience" onClick={handleNavLinkClick}>
                        Experience
                    </a>
                </span>
                <span>
                    <a href="#project" onClick={handleNavLinkClick}>
                        Projects
                    </a>
                </span>
                <span>
                    <a href="#footer" onClick={handleNavLinkClick}>
                        Contact Me
                    </a>
                </span>
            </Nav>
            <div onClick={() => setBar(!bar)} className="bars">
                <div className="bar"></div>
            </div>
        </Container>
    );
};

export default Header

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    width: 80%;
    margin: 0 auto;
    padding: 1.5rem 0;
    position: relative;
    animation: header 500ms ease-in-out;
    @media(max-width: 840px){
        width: 90%;
    }
    .bars{
        display: none;
    }
    @media(max-width:640px){
        .bars{
            width: 40px;
            height: 40px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
            z-index: 100;
            .bar{
                position: absolute;
                width: 100%;
                height: 2px;
                background-color: ${props => props.bar ? "transparent" : "#fff"};
                transition: all 400ms ease-in-out;
                :before, :after{
                    content: "";
                    width: 100%;
                    height: 2px;
                    background-color: #fff;
                    position: absolute;
                }

                :before{
                    transform: ${props => props.bar ? "rotate(45deg)" : "translateY(10px)"};
                    transition: all 400ms ease-in-out;
                }

                :after{
                    transform: ${props => props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
                    transition: all 400ms ease-in-out;
                }
            }
        }
    }
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    span{
        font-size: 1.8rem;
    }

    h1{
        font-weight: 600;
        font-size: 1.2rem;
    }
    img{
        height: 60px;
        width: 60px;
    }
`
const Nav = styled.div`
    @media(max-width:640px){
        position: absolute;
        display: flex;
        flex-direction: column;
        background-color: #191923;
        inset: 0;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        gap: 2rem;
        font-weight: 700;
        height: ${props => props.bar ? "100vh" : 0};
        transition: height 400ms ease-in-out;
        overflow: hidden;
        z-index: 100;       
    }
    span{
        margin-left: 1rem;
        a{
            color: #fff;
            text-decoration: none;
            font-weight: 400;
            position: relative;
            :before{
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                bottom: -5px;
                height: 2px;
                background-color: #fffb00;
                transform: scale(0);
                transform-origin: right;
                transition: transform 400ms ease-in-out;
            }
            :hover:before{
                transform: scale(1);
                transform-origin: left;
            }
            :hover{
                color: #fffb00;
            }
        }
    }
`