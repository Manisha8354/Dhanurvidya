import React from 'react';
import { motion } from 'framer-motion';

import img from '../assets/aboutimage.jpeg';
import img1 from '../assets/aboutimage1.jpeg';

export default function About() {

    return (
        <>
            <div className="min-h-screen lg:h-[80vh] transition-all duration-700 ease-in-out shadow-lg bg-gray-100 ">
                <div className="h-32 flex items-center justify-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-3xl md:text-5xl font-bold text-black mb-4 hover:text-yellow-300 transition duration-300 ease-in-out"
                    >
                        Who We Are
                    </motion.h2>
                </div>

                {/* Container for the content */}
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                    
                    {/* Image Section - two images on the left side */}
                    <div className="md:w-1/2 flex flex-col space-y-4 md:space-y-8 overflow-hidden"> {/* Applied negative margin here */}
                        <motion.img
                            src={img}
                            alt="Indian Rasoi Dish 1"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="rounded-lg shadow-lg w-full h-auto max-h-64 object-cover mx-auto md:mx-0" // Increased height
                        />
                        <motion.img
                            src={img1}
                            alt="Indian Rasoi Dish 2"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="rounded-lg shadow-lg w-full h-auto max-h-64 object-cover mx-auto md:mx-0" // Increased height
                        />
                    </div>

                    {/* Text Content */}
                    <div className="md:w-1/2 md:ml-8 mt-8 md:mt-0">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-3xl md:text-4xl font-bold text-black mb-6"
                        >
                            Welcome to Isodhan international Society
                        </motion.h1>

                        <div className="space-y-4"> {/* Add space between paragraphs */}
                            {[
                                "Sri Sri Vibhakar Uday Tiwari, also known as Vardi Uday Kumar, is a distinguished master of Dhanurveda, the ancient Indian martial art of archery and warfare. Residing at the foothills of Lord Venkateshwara in Tirupati, Andhra Pradesh, Guru Ji's expertise in this discipline is unparalleled, making him a revered figure in the preservation and teaching of traditional combat techniques. As a spiritual master and devoted follower of Lord Parashurama, the sixth avatar of Vishnu, Guru Ji embodies the principles of bravery, discipline, and devotion",

                                "Guru Ji’s spiritual journey is deeply intertwined with his devotion to Lord Parashurama. He is well-versed in performing Yagams (Vedic fire rituals) and other sacred ceremonies, following the traditional practices of the Vaikhanasa Agama Shastra. These rituals are conducted with the utmost reverence and precision, reflecting his deep spiritual knowledge and commitment. Through these sacred practices, Guru Ji aims to invoke divine blessings and promote spiritual upliftment among his followers..",

                                "Guru Ji spreads the divine name of Hari Nama in the form of Parashurama, especially relevant in the current age of Kaliyuga. His teachings and practices aim to revive and honour the ancient traditions associated with Parashurama,promoting spiritual growth and awareness among his disciples and followers. He emphasizes the timeless values embodied by Lord Parashurama, such as righteousness, strength, and humility,",
                            ].map((text, index) => (
                                <motion.p
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.6 + index * 0.3 }} // Add staggered delay
                                    className="text-black leading-relaxed mb-4"
                                >
                                    {text}
                                </motion.p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
