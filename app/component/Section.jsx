import { cn } from '@/app/component/cn';
import { children } from 'react';

export default function Section({ className, children, ...rest }) {
    return (
        <section className={cn(className,'max-w-4xl p-[10%] max-h-5xl h-fit mx-auto px-4 py-10 flex flex-col items-center self-center ')} {...rest} >
            {children}
        </section>
    );
}