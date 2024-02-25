import { cn } from '@/app/component/cn';
import { children } from 'react';

export default function Form({ className, children, ...rest }) {
    return (
        <form className={cn(className,'bg-[#e9c9f9] text-black flex flex-col p-[2%] absolute rounded-md gap-5 w-[50%] h-fit shadow-md')} {...rest} >
            {children}
        </form>
    );
}