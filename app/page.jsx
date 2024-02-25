"use client"
import { useState, useEffect, useRef } from "react";
import Navbar from "@/app/component/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Mouse } from 'lucide-react';
import Value from "./component/Value";
import Footer from '@/app/component/Footer';
import Service from "./services/page";
import Portfolio from "./portfolio/page";
import Contact from "./contact/page";
import Section from '@/app/component/Section'
function Page() {
    const sectionRef = useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true
        });
    });

    const handleScrollToNextSection = () => {
        if (sectionRef.current) {
            window.scrollTo({
                top: sectionRef.current.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <div className="flex flex-col justify-between items-center gap-[2rem]">
                <Navbar />
                <main className="flex flex-col  h-[100%] w-[100%] gap-[2rem] mt-10 p-[2rem] ">
                    <Section>
                        <div className="text-black flex flex-col md:flex-row items-center gap-10" data-aos="fade-right">
                            <div className="flex flex-col gap-10  md:w-1/2">
                                <h2 className="font-bold text-2xl">Bienvenue chez Tech Innovate,</h2>
                                <p>
                                    Chez Tech Innovate, nous sommes passionnés par l'innovation technologique et nous nous engageons à fournir des solutions de pointe dans un large éventail de domaines. Fondée sur des valeurs solides, notre entreprise s'efforce de repousser les limites de la technologie pour façonner un avenir meilleur.
                                </p>
                            </div>
                            <div className="md:w-1/2">
                                <img src="https://i.pinimg.com/564x/d0/91/74/d09174f5ec009faf326f161c13a9e41e.jpg" className="h-auto" alt="Tech Innovate" />
                            </div>
                        </div>
                        <Mouse size={50} color="black" onClick={()=>handleScrollToNextSection()}/>
                    </Section>
                    <div ref={sectionRef} className="w-full flex items-center justify-center">
                        <Value />
                    </div>
                    <Section id="service" className="w-full">
                        <Service />
                    </Section>
                    <Section id="portfolio" className="w-full">
                        <Portfolio />
                    </Section>
                    <Section id="contact" className="w-full">
                        <Contact />
                    </Section>
                </main>
               <Footer />
            </div>
        </>
    );
}

export default Page;
