import React from "react";
import NewsBox from "../components/NewsBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt, faGraduationCap, faLaptopCode } from "@fortawesome/free-solid-svg-icons";


const About = () => {
  const user = {
    name: "Jugul Kumar Sah",
    email: "shahjugal067@gmail.com",
    phone: "9846638937",
    education: [
        "Electronics and Communication Engineering, Western Region Campus, Pokhara (2071 BS)",
        "Diploma in Computer, Western Region Campus, Pokhara (2066 BS)"
    ],
    skills: ["MERN Stack", "JavaScript", "TailwindCSS", "HTML", "C++"],
    location: { latitude: 27.7172, longitude: 85.3240 } // Example coordinates (Kathmandu)
};

// Open email client
const handleEmailClick = () => {
    window.location.href = `mailto:${user.email}`;
};

// Open phone dialer
const handlePhoneClick = () => {
    window.location.href = `tel:${user.phone}`;
};

// Open Google Maps for location
const handleMapClick = () => {
    const url = `https://www.google.com/maps?q=${user.location.latitude},${user.location.longitude}`;
    window.open(url, "_blank");
};


  return (
    <div className="px-20">
       <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">About Me</h1>
            <div>
              <img src="src/assets/jugal.jpg" width={80} alt="" className="mx-auto rounded-full" />
            </div>
            <div className="text-center">
                <p className="text-lg font-semibold">{user.name}</p>
                <p 
                    className="text-blue-500 cursor-pointer hover:underline"
                    onClick={handleEmailClick}
                >
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> {user.email}
                </p>
                <p 
                    className="text-green-500 cursor-pointer hover:underline"
                    onClick={handlePhoneClick}
                >
                    <FontAwesomeIcon icon={faPhone} className="mr-2" /> {user.phone}
                </p>
                <p 
                    className="text-red-500 cursor-pointer hover:underline"
                    onClick={handleMapClick}
                >
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> Find Me on Google Maps
                </p>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">
                    <FontAwesomeIcon icon={faGraduationCap} className="mr-2 text-gray-700" /> Education
                </h2>
                <ul className="list-disc pl-5 text-gray-700">
                    {user.education.map((edu, index) => (
                        <li key={index}>{edu}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">
                    <FontAwesomeIcon icon={faLaptopCode} className="mr-2 text-gray-700" /> Skills
                </h2>
                <ul className="flex flex-wrap gap-2">
                    {user.skills.map((skill, index) => (
                        <li key={index} className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm">
                            {skill}
                        </li>
                    ))}
                </ul>
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
