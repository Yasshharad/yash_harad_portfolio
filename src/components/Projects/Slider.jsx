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
    github: "https://github.com/Yasshharad/yash_harad_portfolio",
    demo: "/"
  },
  {
    name: "YatraSahayak-Ai based Intinerary Planner",
    img: "https://res.cloudinary.com/dimfp6jdv/image/upload/v1705244136/yatra_rwtdfd.jpg",
    disc: "Travel Itinerary planner using MERN stack and genetic algorithm.",
    github: "https://github.com/Yasshharad/yatra_sahayak_new"
  },
  {
    name: "Sales Prediction For Grocery Store",
    img: "https://res.cloudinary.com/dimfp6jdv/image/upload/v1694691208/saless_bgeysx.png",
    disc: "Machine Learning Model using Linear Regression.",
    github: "https://github.com/Yasshharad/sales_prediction_grocery_store"
  },
  {
    name: "BuyShoes_Ecommerce_website",
    img: "https://res.cloudinary.com/db0txesgq/image/upload/v1708528139/BuyShoes_kkkabu.jpg",
    disc: "Ecommerce platform made using Html, Css, JS, and Bootstrap.",
    github: "https://github.com/Yasshharad/BuyShoes_Ecommerce_website",
    demo: "https://yasshharad.github.io/BuyShoes_Ecommerce_website/"
  },
  {
    name: "Website Image Extractor",
    img: "https://res.cloudinary.com/dimfp6jdv/image/upload/v1709996504/image_extractor_ygm6bv.png",
    disc: "It is image extractor web application for public websites made using Svelte, Svelte API, Html, Css, JS, Nodejs, ExpressJs, and Web Scraping.",
    github: "https://github.com/Yasshharad/Devstar_img.extractor",
    demo: "https://visualm.onrender.com/"
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
    name: "Registration Form",
    img: "https://res.cloudinary.com/dimfp6jdv/image/upload/v1706281165/thumbnail_hws3fv.jpg",
    disc: "This project was done during Full Stack Internship. Made using HTML, CSS, JS, Nodejs and MongoDB.",
    github: "https://github.com/Yasshharad/Task1_Bharat_Intern"
  },
  {
    name: "Money Tracker Web Application",
    img: "https://res.cloudinary.com/dimfp6jdv/image/upload/v1706281411/money_tracker_tdf5e4.jpg",
    disc: "This project is money tracking web application made using HTML, CSS, JS, Nodejs and MongoDB.",
    github: "https://github.com/Yasshharad/Task2_Bharat_Intern"
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
    name: "Temperature Converter",
    img: "https://res.cloudinary.com/dimfp6jdv/image/upload/v1705243347/temperature_zfphml.jpg",
    disc: "This project was done during web development Internship at Oasis Infobyte which is made using HTML, CSS and JS.",
    github: "https://github.com/Yasshharad/temperature_converter",
    demo: "https://yasshharad.github.io/temperature_converter/"
  },
  {
    name: "ExpressVPN_landing_page",
    img: "https://res.cloudinary.com/dimfp6jdv/image/upload/v1705243004/expressVPN_hxolpn.jpg",
    disc: "This project was done during web development Internship at Oasis Infobyte. Frontend application using HTML, CSS.",
    github: "https://github.com/Yasshharad/ExpressVPN_landing_page",
    demo: "https://yasshharad.github.io/ExpressVPN_landing_page/"
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