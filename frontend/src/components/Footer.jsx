import React from 'react'
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900/90 text-white py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 px-4">
                <div>
                    <h4 className="text-lg font-semibold mb-3">Company</h4>
                    <ul>
                        <li><a href="/about" className="hover:underline">About Us</a></li>
                        <li><a href="/careers" className="hover:underline">Careers</a></li>
                        <li><a href="/blog" className="hover:underline">Blog</a></li>
                        <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="text-lg font-semibold mb-3">Customer Service</h4>
                    <ul>
                        <li><a href="/help" className="hover:underline">Help Center</a></li>
                        <li><a href="/shipping" className="hover:underline">Shipping & Delivery</a></li>
                        <li><a href="/returns" className="hover:underline">Returns & Refunds</a></li>
                        <li><a href="/faq" className="hover:underline">FAQs</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
                    <ul>
                        <li><a href="/account" className="hover:underline">My Account</a></li>
                        <li><a href="/wishlist" className="hover:underline">Wishlist</a></li>
                        <li><a href="/order-tracking" className="hover:underline">Order Tracking</a></li>
                        <li><a href="/offers" className="hover:underline">Deals & Offers</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-gray-400"><Facebook /></a>
                        <a href="#" className="hover:text-gray-400"><Twitter /></a>
                        <a href="#" className="hover:text-gray-400"><Instagram /></a>
                        <a href="#" className="hover:text-gray-400"><Youtube /></a>
                    </div>
                </div>
                
                <div>
                    <h4 className="text-lg font-semibold mb-3">Newsletter</h4>
                    <p className="text-sm mb-2">Subscribe to get the latest updates and offers.</p>
                    <form action="#" method="post" className="flex">
                        <input type="email" placeholder="Enter your email" className="p-2 flex-grow text-black" required />
                        <button type="submit" className="bg-blue-500 p-2 text-white">Subscribe</button>
                    </form>
                </div>
            </div>
            
            <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
                <p>&copy; 2025 Fashion-Zone. All rights reserved.</p>
            </div>
        </footer>
  )
}

export default Footer