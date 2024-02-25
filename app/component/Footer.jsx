import { Mail, Instagram, Linkedin, Code2 } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className="bg-black bottom-0  w-full text-[15px] text-white shadow-lg">
            <div className="container mx-auto py-5 px-10 flex justify-between items-center">
                <div className='flex gap-[3rem]'>
                    <h5 className='font-bold'>Liens de navigation :</h5>
                    <ol className="list-disc">
                        <li><Link href="/" className="">Home</Link></li>
                        <li><Link href="/services" className="">Services</Link></li>
                        <li><Link href="/portfolio" className="">Portfolio</Link></li>
                        <li><Link href="/contact" className="">Contact</Link></li>
                    </ol>
                </div>
                <div className="flex items-center gap-3">
                    <Code2 size="24" />
                    <h2 className=" font-bold">Tech Innovate</h2>
                </div>
                <div className='flex gap-[3rem]'>
                    <h5 className='font-bold'>Contactez nous :</h5>
                    <ol className="list-disc">
                        <li className='flex gap-1 items-center'><Mail size="24" /> TechInnovate@gmail.com</li>
                        <li className='flex gap-1 items-center'><Instagram size="24" /> Tech_Innovate_team_2024</li>
                        <li className='flex gap-1 items-center'><Linkedin size="24" /> Tech Innovate</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Footer;
