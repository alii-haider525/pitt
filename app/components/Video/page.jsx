"use client";
import Image from 'next/image';
import React, { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

const page = () => {
    const works = [
        { id: 1, image: "/images/blog2.png" },
        { id: 2, image: "/images/blog1.png" },
        { id: 3, image: "/images/blog3.png" },
        { id: 4, image: "/images/img1.png" },
        { id: 5, image: "/images/blog1.png" },
        { id: 6, image: "/images/img1.png" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerRow, setItemsPerRow] = useState(3); // Default: 3 items for larger screens

    // Dynamically update itemsPerRow based on screen size
    useEffect(() => {
        const updateItemsPerRow = () => {
            if (window.innerWidth <= 768) {
                setItemsPerRow(1); // 1 item for small screens
            } else if (window.innerWidth <= 1024) {
                setItemsPerRow(2); // 2 items for medium screens
            } else {
                setItemsPerRow(3); // 3 items for large screens
            }
        };

        updateItemsPerRow(); // Call function on mount
        window.addEventListener("resize", updateItemsPerRow); // Listen for window resize

        return () => window.removeEventListener("resize", updateItemsPerRow); // Cleanup
    }, []);

    const maxIndex = works.length - itemsPerRow;

    const nextSlide = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const slideStyle = {
        transform: `translateX(-${currentIndex * (100 / itemsPerRow)}%)`,
        transition: "transform 0.5s ease-in-out",
    };

    return (
        <section className="section py-10 overflow-hidden" id="portfolio">
            <div className="container mx-auto px-4 w-full max-w-full">
                {/* Header and Text Content */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl sm:text-5xl font-bold mb-4">
                        It's a Big World Out There, Go <span className="text-red-500">Explore</span>
                    </h1>
                    <p className="text-lg sm:text-xl max-w-md mx-auto">
                        Time Tracking Software Used By Millions To Stay On Top Of Their Projects...
                    </p>
                    <button className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                        Discover Now
                    </button>
                </div>

                {/* Slider Navigation */}
                <div className="flex justify-between items-center mb-4">
                    <button
                        type="button"
                        className="owl-prev p-2"
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        style={{ opacity: currentIndex === 0 ? 0.5 : 1 }}
                    >
                        <ArrowLeft />
                    </button>
                    <button
                        type="button"
                        className="owl-next p-2"
                        onClick={nextSlide}
                        disabled={currentIndex >= maxIndex}
                        style={{ opacity: currentIndex >= maxIndex ? 0.5 : 1 }}
                    >
                        <ArrowRight />
                    </button>
                </div>

                {/* Slider Container */}
                <div className="relative w-full overflow-hidden">
                    <div className="flex gap-4" style={slideStyle}>
                        {works.map((work, id) => (
                            <div
                                key={id}
                                className=""
                                style={{
                                    flex: `0 0 ${100 / itemsPerRow}%`, // Dynamically adjust width
                                    transition: "flex 0.5s ease-in-out",
                                }}
                            >
                                <div className="p-4">
                                    <Image
                                        src={work.image}
                                        alt={`Slide ${id}`}
                                        layout="responsive"
                                        width={800}
                                        height={600}
                                        className="rounded-md"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default page;
