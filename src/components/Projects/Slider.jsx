import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
  {
    name: "Portfolio",
    img: "https://res.cloudinary.com/db0txesgq/image/upload/v1701331867/Capture_x4dodj.jpg",
    disc: "Portfolio made using ReactJs and Styled Component.",
    github: "https://github.com/Yasshharad/yash_harad_portfolio"
  },
  {
    name: "YatraSahayak-Ai based Intinerary Planner",
    img: "https://res.cloudinary.com/db0txesgq/image/upload/v1701331427/1_widwh0.jpg",
    disc: "Travel Itinerary planner using MERN stack and Ai algorithms.",
    github: "https://github.com/Yasshharad/Yatra_Sahayak"
  },
  {
    name: "Sales Prediction For Grocery Store",
    img: "https://res.cloudinary.com/dimfp6jdv/image/upload/v1694691208/saless_bgeysx.png",
    disc: "Machine Learning Model using Linear Regression.",
    github: "https://github.com/Yasshharad/sales_prediction_grocery_store"
  },
  {
    name: "Portfoli-MERN",
    img: "https://res.cloudinary.com/dimfp6jdv/image/upload/v1694696947/mern_portfolio_y5vzki.jpg",
    disc: "This is personal portfolio website using: React node.js express.js MongoDB three.js. You can update your profile and projects.",
    github: "https://github.com/Yasshharad/PORTFOLIO-MERN"
  },
  {
    name: "AgroGrocery- an online grocery store",
    img: "https://res.cloudinary.com/dimfp6jdv/image/upload/v1694695730/grocery_lrlvna.jpg",
    disc: "Academic project for web development. Made using ReactJs, NodeJs, expressJs mongoDB.",
    github: "https://github.com/Yasshharad/Agro_Grocery_New"
  },
  {
    name: "Zomato_Clone",
    img: "https://res.cloudinary.com/dimfp6jdv/image/upload/v1694696457/zomato_ouccmm.jpg",
    disc: "This project was done during Full Stack Internship. Complete zomato clone using MERN stack.",
    github: "https://github.com/Yasshharad/zomato_clone"
  },
  {
    name: "book_my_show_clone",
    img: "https://res.cloudinary.com/dimfp6jdv/image/upload/v1694692077/bookmyshow_ca2slg.jpg",
    disc: "This project was done during Full Stack Internship. Frontend using ReactJs and Tailwind Css.",
    github: "https://github.com/Yasshharad/bookMyShow-clone",
    demo: "https://book-my-show-clone-liart-nu.vercel.app/"
  },
  {
    name: "Tasky",
    img: "https://res.cloudinary.com/dimfp6jdv/image/upload/v1694692387/tasky_lifyjo.jpg",
    disc: "This project was done during Full Stack Internship. Frontend application using HTML, CSS and JS where you can add task, delete, and update.",
    github: "https://github.com/Yasshharad/task_management_application",
    demo: "https://task-management-application-woad.vercel.app/"
  },
  {
    name: "HotStar-Landing-page",
    img: "https://res.cloudinary.com/dimfp6jdv/image/upload/v1694692767/hotstar_ytagcc.jpg",
    disc: "This is basic Hotstar Landing page clone using HTML, CSS, and Js.",
    github: "https://github.com/Yasshharad/Hotstar_Landing_Page_Clone",
    demo: "https://hotstar-landing-page-clone.vercel.app/"
  }
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
      }
    }
  ]
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => (
    <Project item={item} key={i} />
  ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button
          onClick={() => arrowRef.current.slickPrev()}
          className='back'><IoIosArrowBack /></button>
        <button
          onClick={() => arrowRef.current.slickNext()}
          className='next'><IoIosArrowForward /></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #fffb00;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`