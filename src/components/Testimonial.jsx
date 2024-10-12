import React from "react";
import Slider from "react-slick";
import img from "../assets/bannerimage.jpeg";
import img1 from "../assets/home1image4.jpeg";
import img2 from "../assets/homegada.jpeg";

const TestimonialData = [
  {
    id: 1,
    name: "Pratiksha Mathur",
    text: "I absolutely love the Indo-Western jewelry from Alankaar the art of beads! The pieces are not only stunning but also versatile enough to wear with both traditional and modern outfits. I've received so many compliments!",
    img: img,
  },
  {
    id: 2,
    name: "Shweta",
    text: "I absolutely love the Indo-Western jewelry from Alankaar The Art Of Beads! The pieces are not only stunning but also versatile enough to wear with both traditional and modern outfits. I've received so many compliments!",
    img: img1,
  },
  {
    id: 3,
    name: "Shipra Nishant Mathur",
    text: "Alankaar The Art Of Beads' work is unique and exquisite! I absolutely adore my three-layered crystal and pearls handmade necklace set. The timeless, elegant design always gets compliments and makes me feel special every time I wear it. Truly a masterpiece.",
    img: img2,
  },
  {
    id: 5,
    name: "VIRUSHKA",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore consectetur adipisicing elit.",
    img: "https://images.pexels.com/photos/19130891/pexels-photo-19130891/free-photo-of-photo-of-a-young-woman-in-a-patterned-shirt.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];

export default function Testimonial() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            WITH OUR INNOVATIVE DESIGNS, CRAFTSMANSHIP, CREATIVITY AND QUALITY, WE HAVE WON THE TRUST AMONG OUR CUSTOMERS
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
