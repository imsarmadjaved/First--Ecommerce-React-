import React from "react";
import Slider from "react-slick";

const TestinomialsData = [
  {
    id: 1,
    name: "Gohar",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam laboriosam ut cumque, enim odit ullam delectus consectetur molestias placeat numquam iusto repudiandae. Eius culpa ea voluptatibus asperiores hic earum tenetur impedit eaque!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Sarmad",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam laboriosam ut cumque, enim odit ullam delectus consectetur molestias placeat numquam iusto repudiandae. Eius culpa ea voluptatibus asperiores hic earum tenetur impedit eaque!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 3,
    name: "Hamza",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam laboriosam ut cumque, enim odit ullam delectus consectetur molestias placeat numquam iusto repudiandae. Eius culpa ea voluptatibus asperiores hic earum tenetur impedit eaque!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 4,
    name: "Ali",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam laboriosam ut cumque, enim odit ullam delectus consectetur molestias placeat numquam iusto repudiandae. Eius culpa ea voluptatibus asperiores hic earum tenetur impedit eaque!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 5,
    name: "Junaid",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam laboriosam ut cumque, enim odit ullam delectus consectetur molestias placeat numquam iusto repudiandae. Eius culpa ea voluptatibus asperiores hic earum tenetur impedit eaque!",
    img: "https://picsum.photos/101/101",
  },
];

const Testinomials = () => {
  var settings = {
    dots: true,
    arrows: false,
    Infinite: true,
    speed: 500,
    slideToscroll: 1,
    autoplay: true,
    autosplaySpeed: 2000,
    cssEase: "Linear",
    pauseOnHover: true,
    pauseOnFocuse: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slideToShow: 3,
          slideToscrol: 1,
          Infinte: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slideToShow: 2,
          slideToScroll: 1,
          initialSlider: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slideToShow: 1,
          slideToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 mb-10">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What out Customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testinomials
          </h1>
          <p data-aos="fad-up" className="text-xs text-gray-400 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, sunt
            alias provident repellendus aliquid, porro necessitatibus, saepe
            ratione illum veniam non.
          </p>
          <div data-aos="zoom-in">
            <Slider {...settings}>
              {TestinomialsData.map((data) => (
                <div className="my-6">
                  <div
                    key={data.id}
                    className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600 bg-primary/10 relative"
                  >
                    <div className="mb-4">
                      <img
                        src={data.img}
                        alt=""
                        className="rounded-full w-20 h-20"
                      />
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      <div className="space-y-3 ">
                        <p className="text-xs text-gray-500 dark:text-slate-300">
                          {data.text}
                        </p>
                        <h1 className="text-xl font-bold dark:text-slate-300 text-black/80 dark:text-light">
                          {data.name}
                        </h1>
                      </div>
                    </div>
                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0"></p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testinomials;
