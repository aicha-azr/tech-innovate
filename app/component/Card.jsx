import { cn } from '@/app/component/cn';
import { Children } from 'react';

export default function Card({ className, children, ...rest }) {
    return (
        <div className={cn(className, "bg-[#D2C5AC] text-black w-max-fit w-[20rem] rounded-md p-2 flex flex-col gap-5 items-center shadow-md shadow-gris")} {...rest}>
            {children}
        </div>
    );
}
