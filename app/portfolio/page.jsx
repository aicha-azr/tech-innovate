import {Head} from 'next'
import Navbar from "@/app/component/Navbar";
import Image from "next/image";
import Card from '@/app/component/Card' 
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../component/Footer';
function Portfolio (){
    return(
       <>
       <Navbar/>
       
       <meta name="portfolio" content="we present the project realised by tech innovate team." />
        <meta name="portfolio" content="next.js, react, metadata" />
       <main className="h-screen  w-screen flex items-center justify-center">
        <div className="flex flex-wrap gap-[3rem]  justify-center items-stretch" data-aos="fade-up">
            <Card className="max-w-fit w-[30rem] items-stretch">
                <Image src="https://th.bing.com/th/id/R.5ee6ac7cb746f88e0cd15d6aa88b1ee9?rik=I5P%2fYefBjp%2fSTQ&pid=ImgRaw&r=0" width="600" height="600"/>
                <h4 className='text-1xl font-bold text-center'>Plateforme d'apprentissage en ligne personnalisée</h4>
                <p>
                Développer une plateforme d'apprentissage en ligne qui utilise l'intelligence artificielle pour recommander du contenu personnalisé aux utilisateurs en fonction de leurs préférences d'apprentissage, de leurs compétences et de leurs objectifs.</p> 
            </Card>

            <Card className="items-stretch" >
            <Image src="https://th.bing.com/th/id/OIP.hb12-YaDfzy4GvHcMHJFiQHaDt?w=346&h=174&c=7&r=0&o=5&pid=1.7" width="600" height="600"/>
                <h4 className="text-1xl font-bold text-center">Application de santé et bien-être</h4>
                <p>
                Créer une application mobile qui permet aux utilisateurs de suivre leur santé et leur bien-être, en intégrant des fonctionnalités telles que le suivi des activités physiques, la gestion de la nutrition, le suivi des habitudes de sommeil et des rappels de médicaments.
                </p> 
            </Card>
            <Card >
            <Image src="https://th.bing.com/th/id/OIP.uIbiagvwBIbeqcsRI-1cYQHaFJ?w=243&h=180&c=7&r=0&o=5&pid=1.7" width="600" height="600"/>
                <h4 className="text-1xl font-bold text-center">Application de suivi des émissions de carbone</h4>
                <p>
                Développer une application qui permet aux utilisateurs de suivre et de réduire leur empreinte carbone en calculant et en surveillant leurs émissions de carbone à partir de leurs activités quotidiennes, telles que les déplacements, la consommation d'énergie et les habitudes de consommation.
                </p> 
            </Card>
        </div>
       </main>
       <Footer/>
       </>
    )
}
  

export default Portfolio;
/***
 * 
 * 
 * 
 */