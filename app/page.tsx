
import type { Head } from "next";

"use client";
import Image from "next/image";

import { useState, useEffect } from "react";
import Navbar from "@/app/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Card from "@/app/component/Card"
function Page() {
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true
        });
    },[display]);
    return (
        <>
            <Navbar />
            <meta name="home" content="This is the home page of tech innovate where you can know about us and about our values." />
            <meta name="home" content="next.js, react, metadata" />

            <main className={display? "hidden":"text-black h-screen flex flex-row items-center justify-around"}>
                <>
                <div className="w-max-fit w-[500px] flex flex-col gap-20 mt-10 ml-20 text-lg justify-center" data-aos="fade-right">
                    <h2 className="font-bold text-[2rem]">Bienvenue chez Tech Innovate,</h2>
                    <p>
                        Chez Tech Innovate, nous sommes passionnés par l'innovation technologique et nous nous engageons à fournir des solutions de pointe dans un large éventail de domaines. Fondée sur des valeurs solides, notre entreprise s'efforce de repousser les limites de la technologie pour façonner un avenir meilleur.
                    </p>
                </div>
                <img src="https://i.pinimg.com/564x/d0/91/74/d09174f5ec009faf326f161c13a9e41e.jpg" className="z-20 h-[28rem]"/>
                <ChevronRight size={150}  data-aos="fade-right" onClick={()=>{setDisplay(true)}}/> 
                </>
                
            </main>
            

            <main className={!display?"hidden":"flex items-center justify-center flex-col text-black h-screen gap-20 absolute"} data-aos="fade-left">
                <h2 className="text-3xl font-bold mt-2 text-center">Nos Valeurs :</h2>
                <div className="flex gap-5 items-center justify-center">
                <ChevronLeft size={150}  data-aos="fade-left" onClick={()=>{setDisplay(false)}}/>
                <div className="flex flex-wrap gap-[2rem] ">
                <Card>
                <h4 className='text-1xl font-bold'>Innovation</h4>
                <p>
                 Nous croyons en la puissance de l'innovation pour résoudre les défis les plus complexes et créer des opportunités de croissance.
                </p> 
                </Card>

                <Card>
                <h4 className="text-1xl font-bold">Qualité</h4>
                <p>
                Nous nous engageons à fournir des produits et services de la plus haute qualité, répondant aux normes les plus strictes de l'industrie.
                </p> 
                </Card>

                <Card>
                <h4 className="text-1xl font-bold">Collaboration</h4>
                <p>
                Nous valorisons la collaboration et croyons au pouvoir de travailler ensemble pour atteindre des objectifs communs.                </p> 
                </Card>
     
                <Card>
                <h4 className="text-1xl font-bold">Responsabilité</h4>
                <p>
                Nous sommes conscients de notre impact sur la société et l'environnement, et nous nous engageons à agir de manière éthique et responsable.               
                 </p> 
                </Card>
            </div>
            </div>
            </main>
        </>
    );
}

export default Page;

/***
 * export async function getServerSideProps() {
    // Simuler un temps de serveur pour l'exemple
    const serverTime = new Date().toISOString();
    
    return {
        props: {
            serverTime,
        },
    };
} 
* 
<p>Temps du serveur : {serverTime}</p>
* 
* 
*/
