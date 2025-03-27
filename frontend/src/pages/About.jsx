import React from "react";
import NewsBox from "../components/NewsBox";

const About = () => {
  return (
    <div className="px-20">
      <div className="text-2xl text-center pt-8 border-t">
        <h1>About Us</h1>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src="src/assets/p1.avif" className="w-full md:max-w-[450px]"  alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-700">
            <p>Fashion Zone was born out of passion for fashion. And desired to revolution </p>
            <p>Since our inception, we have been dedicated to providing you with the best </p>
            <b className="text-gray-800">Our Main Goal</b>
            <p>We are committed to providing you with the best experience possible.</p>
        </div>
      </div>
      <div className="text-4xl py-4">
          <h1>Why Choose Us</h1>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:p-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Products:</b>
          <p className="text-gray-600">We are committed to providing you with the best experience possible.</p>
        </div>
        <div className="border px-10 md:p-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">with our user friendly interface and hassle free  ordering process shopping has never before</p>
        </div>
        <div className="border px-10 md:p-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Customer Services:</b>
          <p className="text-gray-600">We are committed to providing you with the best experience possible.</p>
        </div>
      </div>
      <NewsBox />
    </div>
    
  );
};

export default About;
