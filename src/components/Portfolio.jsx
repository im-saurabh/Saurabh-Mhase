import React, { useState } from "react";
import TipCalculator from "../assets/portfolio/tipcalculator.jpg";
import ChatBot from "../assets/portfolio/chatbot.jpg";
import AIImageGeneration from "../assets/portfolio/ai image generation.jpg";
import WeatherApp from "../assets/portfolio/weather app.jpg";
import ShoppingApp from "../assets/portfolio/shop cart.jpg";
import MechanicShop from "../assets/portfolio/mechanic shop.jpg"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: TipCalculator,
      demo: "https://tip-calculator-im-saurabh.vercel.app/",
      code: "https://github.com/im-saurabh/Tip_Calculator",
    },
    {
      id: 2,
      src: ChatBot,
      demo: "https://mr-codex-im-saurabh.vercel.app/",
      code: "https://github.com/im-saurabh/Mr-CodeX",
    },
    {
      id: 3,
      src: AIImageGeneration,
      demo: "https://ai-image-generation-im-saurabh.vercel.app/",
      code: "https://github.com/im-saurabh/Ai-image-generation",
    },
    {
      id: 4,
      src: WeatherApp,
      demo: "https://weather-app-react-im-saurabh.vercel.app/",
      code: "https://github.com/im-saurabh/React-Weather-App",
    },
    {
      id: 5,
      src: ShoppingApp,
      demo: "https://shop-cart-im-saurabh.vercel.app/",
      code: "https://github.com/im-saurabh/Shop-cart",
    },
    {
      id:6,
      src: MechanicShop,
      demo:'https://bike-servicing-center.vercel.app/',
      code: 'https://github.com/im-saurabh/Bike-Servicing-Center',
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo}>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
