"use client";
import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonialsData = [
    {
      id: 1,
      name: "John Smith",
      testimonial:
        "Usman Shouket did an outstanding job on my website. His attention to detail and expertise in web development really made a difference. I highly recommend him.",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      testimonial:
        "I was impressed with Usman Shouket's web development skills. He created a user-friendly and visually appealing website for my business. Great work!",
    },
    {
      id: 3,
      name: "David Brown",
      testimonial:
        "Working with Usman Shouket was a breeze. He delivered a top-notch website that exceeded my expectations. I'm very satisfied with his web development services.",
    },
    {
      id: 4,
      name: "Emily Davis",
      testimonial:
        "Usman Shouket is a talented web developer. He understood my requirements and created a website that perfectly represents my brand. I'm thrilled with the results.",
    },
    {
      id: 5,
      name: "Michael Wilson",
      testimonial:
        "I needed a website for my online store, and Usman Shouket delivered a high-quality e-commerce site. His web development skills are commendable.",
    },
    {
      id: 6,
      name: "Laura Adams",
      testimonial:
        "Usman Shouket is a web development expert. He redesigned my website, and it now looks modern and responsive. I couldn't be happier with his work.",
    },
    {
      id: 7,
      name: "Daniel White",
      testimonial:
        "I hired Usman Shouket to develop a custom web application, and he exceeded my expectations. His coding skills and attention to detail are impressive.",
    },
    {
      id: 8,
      name: "Jennifer Lee",
      testimonial:
        "Usman Shouket's web development work speaks for itself. He transformed my website into a professional and functional platform. Highly recommended.",
    },
  ];

  useEffect(() => {
    // Automatically change testimonial every 10 seconds
    const interval = setInterval(() => {
      setTestimonialIndex((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  });

  const currentTestimonial = testimonialsData[testimonialIndex];

  return (
    <div className="mt-24 w-full bg-[#8ed44424]">
      <div className="w-full px-3 mx-auto py-12">
        <h4 className="text-4xl capitalize font-[500] text-center mb-10">
          What people are saying
        </h4>
        <p
          // Here i want to make a class that should work after 10 seconds
          className={`testimonial-text w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] text-[22px] mx-auto text-center testimonial-text `}
        >
          {currentTestimonial.testimonial}
        </p>
        <p className="w-full text-center mx-auto mt-9 font-semibold uppercase text-[22px]">
          {currentTestimonial.name}
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
