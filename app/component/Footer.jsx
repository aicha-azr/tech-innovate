import {Mail, Instagram, Linkedin, Code2 } from 'lucide-react';
import Link from 'next/link';
const  Footer = ()=>{
    return(
        <>
            <div className="bg-[#f3f4f6] bottom-0 h-3 flex p-[5%] justify-around  w-full text-[15] shadow-lg text-black items-center">
                <div className='flex gap-[3rem]'>
                    <h5 className='font-bold'>liens de navigations :</h5>
                    <ol className="custom-list list-disc">
                   <li><Link href="/" className="text-black">Home </Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/portfolio">Portfolio</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    </ol>
                </div>
                <div className="flex text-black text-[2rem]">
            <Code2/>
        <h2 className="text-black font-bold">Tech Innovate</h2>
        </div>
                <div className='flex gap-[3rem]'>
                <h5 className='font-bold'>Contactez nous :</h5>
                <ol className="custom-list list-disc">                    
                    <li className='flex gap-[1rem] '><Mail /> TechInnovate@gmail.com</li>                                       
                    <li className='flex gap-[1rem]'><Instagram /> Tech_ Innovate_team_2024</li>
                    <li className='flex gap-[1rem]'><Linkedin /> Tech Innovate</li>
                </ol>
                </div>  
                        
                    </div>
                
            
        </>
    )
}
export default Footer;