import { cn } from '@/app/component/cn';
import { Children } from 'react';

export default function Input({ className, children, ...rest }) {
    return (
        <input className={cn(className,"bg-[#e2e3e7] p-3 rounded-sm shadow-md")} {...rest}/>
    );
}
