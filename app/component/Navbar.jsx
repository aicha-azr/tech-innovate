import Link from "next/link";
import { Code2 } from 'lucide-react';
export default function Navbar(){
    return(<>
    <div className=' bg-[#f3f4f6] flex w-screnn p-5 justify-between absolute top-0 w-full text-[15] items-center shadow-md shadow-blue'>
        <div className="flex text-black text-[2rem]">
            <Code2/>
        <h2 className="text-black font-bold">Tech Innovate</h2>
        </div>
        <div className="flex gap-20">
        <Link href="/" className="text-black">Home</Link>
        <Link href='/services' className="text-black">Services</Link>
        <Link href='/portfolio' className="text-black">Portfolio</Link>
        <Link href='/contact' className="text-black">Contact</Link>
        </div>
    </div>
    </>)
}