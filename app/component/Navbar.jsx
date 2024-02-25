import a from "next/link";
import { Code2 } from 'lucide-react';
export default function Navbar(){
    return(<>
    <div className= {'bg-black flex w-screnn p-5 justify-between fixed z-30 top-0 w-full text-[15] items-center shadow-md shadow-blue'}>
        <div className="flex text-white text-[2rem]">
            <Code2/>
        <h2 className=" font-bold">Tech Innovate</h2>
        </div>
        <div className="flex gap-20">
        <a href="#" className="">Home</a>
        <a href='/#service' className="">Services</a>
        <a href='/#portfolio' className="">Portfolio</a>
        <a href="/#equipe">Équipe</a>
        <a href='/#contact' className="">Contact</a>
        </div>
    </div>
    </>)
}