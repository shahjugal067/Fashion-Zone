import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt, faStore, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import NewsBox from "../components/NewsBox";

const AboutPage = () => {
    // Store Details
    const store = {
        name: "Fashion-Zone Store",
        description: "Your one-stop destination for the latest fashion trends. We offer high-quality apparel, accessories, and footwear at unbeatable prices.",
        email: "shahjugal067@gmail.com",
        phone: "9846638937",
        location: { latitude: 27.7172, longitude: 85.3240 }, // Example coordinates
        mission: "To provide trendy, high-quality fashion at affordable prices.",
        vision: "To become a globally recognized fashion brand that empowers individuals to express themselves through style.",
        services: [
            "Men & Women Fashion",
            "Footwear & Accessories",
            "Fast & Secure Delivery",
            "24/7 Customer Support",
        ],
    };

    // Open email client
    const handleEmailClick = () => {
        window.location.href = `mailto:${store.email}`;
    };

    // Open phone dialer
    const handlePhoneClick = () => {
        window.location.href = `tel:${store.phone}`;
    };

    // Open Google Maps for store location
    const handleMapClick = () => {
        const url = `https://www.google.com/maps?q=${store.location.latitude},${store.location.longitude}`;
        window.open(url, "_blank");
    };

    return (
        <div>
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg shadow-emerald-500 rounded-lg mt-10">
            <h1 className="text-3xl font-bold text-center text-green-600 mb-4">
                <FontAwesomeIcon icon={faStore} className="mr-2" /> Fashion-Zone
            </h1>
            
            <p className="text-gray-700 text-center text-lg">{store.description}</p>

            <div className="mt-6 text-center">
                <p 
                    className="text-blue-500 cursor-pointer hover:underline"
                    onClick={handleEmailClick}
                >
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> {store.email}
                </p>
                <p 
                    className="text-green-500 cursor-pointer hover:underline"
                    onClick={handlePhoneClick}
                >
                    <FontAwesomeIcon icon={faPhone} className="mr-2" /> {store.phone}
                </p>
                <p 
                    className="text-red-500 cursor-pointer hover:underline"
                    onClick={handleMapClick}
                >
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> Visit Us on Google Maps
                </p>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">Our Mission</h2>
                <p className="text-gray-700">{store.mission}</p>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">Our Vision</h2>
                <p className="text-gray-700">{store.vision}</p>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">Our Services</h2>
                <ul className=" pl-5 text-gray-700">
                    {store.services.map((service, index) => (
                        <li key={index} className="mb-1">
                            <FontAwesomeIcon icon={faShoppingBag} className="mr-2 text-yellow-500" /> {service}
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

export default AboutPage;
