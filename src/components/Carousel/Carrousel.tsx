import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="w-full max-w-5xl mx-auto ">
      <Slider {...settings}>
        <div className="flex justify-center bg-coral_red opacity-100 rounded-cardradius relative">
          <div className="flex flex-col items-center gap-2 w-[400px] h-[280px] justify-center">
            <img
              className="rounded-full w-20 h-20 object-cover"
              src="https://media.istockphoto.com/id/1398856548/es/foto/retrato-de-una-mujer-joven-con-un-perro-pointer-h%C3%BAngaro-y-un-peque%C3%B1o-gatito-en-sus-brazos.jpg?s=2048x2048&w=is&k=20&c=MVT52kMTFwWcPUAgwfpzPvRVJnYZbId7HuXifXAPvpY="
              alt="Slide 1"
            />
            <h3 className="text-32 font-comfortaa font-regular text-smokeWhite">
              Kenned Dsouza
            </h3>
            <footer>
              <p className="font-openSans font-regular text-18 text-smokeWhite text-center">
                I like that I got to meet the dog Walker who is walking my dog
                daily and consult with her. I also appreciate the daily
                communication I get about the dog and how my dog is doing
              </p>
            </footer>
          </div>
        </div>

        <div className="flex justify-center bg-brightBlue opacity-100 rounded-cardradius relative z-50">
          <div className="flex flex-col items-center gap-2 w-[400px] h-[280px] justify-center">
            <img
              className="rounded-full w-20 h-20 object-cover"
              src="https://media.istockphoto.com/id/1398856548/es/foto/retrato-de-una-mujer-joven-con-un-perro-pointer-h%C3%BAngaro-y-un-peque%C3%B1o-gatito-en-sus-brazos.jpg?s=2048x2048&w=is&k=20&c=MVT52kMTFwWcPUAgwfpzPvRVJnYZbId7HuXifXAPvpY="
              alt="Slide 1"
            />
            <h3 className="text-32 font-comfortaa font-regular text-smokeWhite">
              Kenned Dsouza
            </h3>
            <footer>
              <p className="font-openSans font-regular text-18 text-smokeWhite text-center">
                I like that I got to meet the dog Walker who is walking my dog
                daily and consult with her. I also appreciate the daily
                communication I get about the dog and how my dog is doing
              </p>
            </footer>
          </div>
        </div>

        <div className="flex justify-center bg-coral_red opacity-100 rounded-cardradius relative">
          <div className="flex flex-col items-center gap-2 w-[400px] h-[280px] justify-center">
            <img
              className="rounded-full w-20 h-20 object-cover"
              src="https://media.istockphoto.com/id/1398856548/es/foto/retrato-de-una-mujer-joven-con-un-perro-pointer-h%C3%BAngaro-y-un-peque%C3%B1o-gatito-en-sus-brazos.jpg?s=2048x2048&w=is&k=20&c=MVT52kMTFwWcPUAgwfpzPvRVJnYZbId7HuXifXAPvpY="
              alt="Slide 1"
            />
            <h3 className="text-32 font-comfortaa font-regular text-smokeWhite">
              Kenned Dsouza
            </h3>
            <footer>
              <p className="font-openSans font-regular text-18 text-smokeWhite text-center">
                I like that I got to meet the dog Walker who is walking my dog
                daily and consult with her. I also appreciate the daily
                communication I get about the dog and how my dog is doing
              </p>
            </footer>
          </div>
        </div>
      </Slider>
    </div>
  );
};
