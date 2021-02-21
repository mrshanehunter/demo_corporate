import React from "react";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import CarouselImage1 from "../images/CarouselImage1";
import CarouselImage2 from "../images/CarouselImage2";
import CarouselImage3 from "../images/CarouselImage3";
import CarouselImage4 from "../images/CarouselImage4";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
}

export default function HomeCarousel(...props) {
return (
<Carousel
  swipeable={true}
  draggable={false}
  showDots={true}
  centerMode={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={10000}
  keyBoardControl={true}
  customTransition="transform 1000ms ease-in-out"
  transitionDuration={2500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div>
    <CarouselImage1 />
  </div>
  <div>
    <CarouselImage2 />
        </div>
  <div>
    <CarouselImage3 />
    </div>
  <div>
    <CarouselImage4 />
    </div>
</Carousel>
);
}