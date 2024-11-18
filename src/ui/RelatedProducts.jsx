import Slider from "react-slick";
import { styled } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RelatedSection = styled.div`
  max-width: 125rem;
  margin: 0 auto;
  padding-top: 3rem;
`;
const RelatedBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const RelatedHeading = styled.h1`
  font-size: 4rem;
  letter-spacing: 1px;
  margin-bottom: 5rem;
`;
const Image = styled.img`
  width: 30rem;
  height: 40rem;
  object-position: center;
  object-fit: cover;
`;
// const Content=styled.h4`
// font-size: ;
// `

function RelatedProducts() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    // speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <RelatedSection>
      <RelatedHeading>Here are some of our projects... </RelatedHeading>
      <Slider {...settings}>
        <div>
          <Image src="/public/gal-2.jpeg" alt="related" />
        </div>
        <div>
          <Image src="/public/gal-3.jpeg" alt="relatedProduct" />
        </div>
        <div>
          <Image src="/public/gal-5.jpeg" alt="related" />
        </div>
        <div>
          <Image src="/public/gal-8.jpeg" alt="related" />
        </div>
        <div>
          <Image src="/public/project1.jpg" alt="related" />
        </div>
        <div>
          <Image src="/public/project2.jpg" alt="related" />
        </div>
        <div>
          <Image src="/public/home.jpg" alt="related" />
        </div>
        <div>
          <Image src="/public/home3.jpeg" alt="related" />
        </div>
        <div>
          <Image src="/public/home2.jpeg" alt="related" />
        </div>
        <div>
          <Image src="/public/home4.jpeg" alt="related" />
        </div>
        <div>
          <Image src="/public/house-2.jpeg" alt="related" />
        </div>
        <div>
          <Image src="/public/project11.jpg" alt="related" />
        </div>
      </Slider>
    </RelatedSection>
  );
}

export default RelatedProducts;

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";

// function RelatedProducts() {
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       onSlideChange={() => console.log("slide change")}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>
//         <img src="plant.avif" alt="plant"/>
//       </SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...
//     </Swiper>
//   );
// }

// export default RelatedProducts;
