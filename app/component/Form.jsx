import { cn } from '@/app/component/cn';
import { Children } from 'react';

export default function Form({ className, children, ...rest }) {
    return (
        <form className={cn(className,'bg-[#D2C5AC] text-black flex flex-col p-[2rem] rounded-md gap-5 w-[50%] w-max-fit mt-2 shadow-md')} {...rest} >
            {children}
        </form>
    );
}