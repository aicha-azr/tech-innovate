'use client '
import {Head} from "next";
import Navbar from '@/app/Navbar'
import Input from '@/app/component/Input'
import Form from '@/app/component/Form'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Contact() {
    return (
        <>
            <Navbar />
            <meta name="contact" content="contact with our tech innovate team so we can know about your feedback" />
        <meta name="contact" content="next.js, react, metadata" />
            <main className="flex items-center justify-center h-screen pt-4">
            <Form method="post" data-aos="fade-up">
                <h3 className="text-center font-bold text-[1.5rem]">Contactez nous</h3>
                <label htmlFor="nom" className="font-bold">Nom :</label>
                <Input type="text" id="nom" name="nom" required/>
                <label htmlFor="prenom" className="font-bold">Prénom :</label>
                <Input type="text" id="prenom" name="prenom" required/>
                <label htmlFor="email" className="font-bold">Email :</label>
                <Input type="email" id="email" name="email" required/>
                <label htmlFor="description" className="font-bold">Description :</label>
                <textarea id="description" name="description" className="bg-[#e2e3e7] p-3 rounded-sm shadow-md max-h-20" />
                <button type="submit" className="bg-[#55536A] w-fit self-center p-[1rem] rounded-md shadow-sm font-bold">Envoyer</button>
            </Form>
            </main>
        </>
    );
}
