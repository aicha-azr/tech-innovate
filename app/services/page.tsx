import  { NextPage } from "next";
"use client";
import { Cpu, SquareDashedBottomCode, Bot } from 'lucide-react';
import Navbar from "@/app/component/Navbar";
import Card from '@/app/component/Card'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../component/Footer";
const Service:NextPage=()=> {
    return (
        <>

           <div className="flex flex-col h-fit">
            <Navbar />
            <meta name="services" content="we present our services of our team tech innovate." />
        <meta name="services" content="next.js, react, metadata" />
                <div className="flex flex-col w-fit items-center justify-center text-black pt-[2rem] ">
                    <h4 className="text-center text-3xl mb-10 text-black font-bold">Nos services:</h4>
                        <div className="flex justify-around flex-wrape gap-[2rem] items-center " data-aos="fade-up">
                        <Card className="p-[3rem] w-[30rem] w-max-fit stretch h-[20rem] h-content-fit">
                            <Cpu size={70} />
                            <h4 className="text-1xl font-bold text-center">Consultation en Technologie</h4>
                            <p>Offrir des services de consultation aux entreprises pour les aider à adopter les dernières technologies et à développer des stratégies numériques efficaces</p>
                        </Card>
                    
                    
                        <Card className="p-[3rem]  w-max-[30rem]  h-[20rem] h-content-fit">
                            <SquareDashedBottomCode size={70} />
                            <h4 className="text-1xl font-bold text-center">Développement de Logiciels Personnalisés</h4>
                            <p>Concevoir et développer des logiciels sur mesure pour répondre aux besoins spécifiques des entreprises, qu'il s'agisse de solutions de gestion, d'applications web ou mobiles, ou d'intégrations système.</p>
                        </Card>
                    
                    
                   
                        <Card className="p-[3rem] w-max-[30rem]  h-[20rem] h-content-fit">
                            <Bot size={70} />
                            <h4 className="text-1xl font-bold text-center">Intelligence Artificielle et Machine Learning</h4>
                            <p>Développer des solutions basées sur l'intelligence artificielle et le machine learning pour automatiser des tâches, améliorer les processus et anticiper les tendances du marché.</p>
                        </Card>
                        </div>
                   </div> 
              

                </div>
        </>
    );
}
export default Service;
