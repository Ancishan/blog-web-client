
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '../assets/tourist.jpg'
import img2 from '../assets/food.jpg'
import img3 from '../assets/flowe.png'


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

export default function Banner() {
  return (
    < div className='container  py-10 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      <SwiperSlide><Slide text='Choose Your favorite place' image={img1} ></Slide></SwiperSlide>
      <SwiperSlide><Slide text='Your Culinary Odyssey' image={img2}></Slide></SwiperSlide>
      <SwiperSlide><Slide text='Blooms of Beauty and Grace' image={img3}></Slide></SwiperSlide>
      </Swiper>
    </div>
  );
}