"use client"
// Importer les modules nécessaires
import { useState, useEffect } from "react";
import Navbar from "@/app/component/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Mouse } from 'lucide-react';
import Value from "./component/Value"
import Footer from '@/app/component/Footer'
import Service from "./services/page";
import Portfolio from "./portfolio/page";
import Contact from "./contact/page";

function Page() {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true
        });
    }, []);

    return (
        <>
            <Navbar />
            <meta name="home" content="This is the home page of tech innovate where you can know about us and about our values." />
            <meta name="home" content="next.js, react, metadata" />
            <div className="flex items-center flex-col">
                <div className="text-black flex flex-row items-center justify-around">
                    <div className="w-max-fit w-[500px] flex flex-col gap-20 mt-10 ml-20 text-lg justify-center" data-aos="fade-right">
                        <h2 className="font-bold text-[2rem]">Bienvenue chez Tech Innovate,</h2>
                        <p>
                            Chez Tech Innovate, nous sommes passionnés par l'innovation technologique et nous nous engageons à fournir des solutions de pointe dans un large éventail de domaines. Fondée sur des valeurs solides, notre entreprise s'efforce de repousser les limites de la technologie pour façonner un avenir meilleur.
                        </p>
                    </div>
                    <img src="https://i.pinimg.com/564x/d0/91/74/d09174f5ec009faf326f161c13a9e41e.jpg" className="z-20 h-[28rem]" />
                    <Mouse size={50} color="black" onClick={() => setScroll(true)} />
                </div>
                <div>
                    <Value />
                </div>
                <section id="service">
                    <Service />
                </section>
                <section id="portfolio">
                    <Portfolio />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Page;
