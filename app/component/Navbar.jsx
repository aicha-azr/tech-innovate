import a from "next/link";
import { Code2 } from 'lucide-react';
export default function Navbar(){
    return(<>
    <div className= {'bg-[#f3f4f6] flex w-screnn p-5 justify-between fixed z-30 top-0 w-full text-[15] items-center shadow-md shadow-blue'}>
        <div className="flex text-black text-[2rem]">
            <Code2/>
        <h2 className="text-black font-bold">Tech Innovate</h2>
        </div>
        <div className="flex gap-20">
        <a href="#" className="text-black">Home</a>
        <a href='/#service' className="text-black">Services</a>
        <a href='/#portfolio' className="text-black">Portfolio</a>
        <a href='/#contact' className="text-black">Contact</a>
        </div>
    </div>
    </>)
}