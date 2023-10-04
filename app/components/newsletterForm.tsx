"use client";

import { TNewsletterSchema, NewsletterSchema } from '@/lib/types';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface NewsletterFormProps {
    stay: string;
    toolbox: string;
    join: string;
    placeholder: string;
    subscribe: string;
    thank: string;
  }  

export const NewsletterForm = ({ stay, toolbox, join, placeholder, subscribe, thank}: NewsletterFormProps) => {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [subscribed, setSubscribed] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        setError,
    } = useForm<TNewsletterSchema>({ 
            resolver: zodResolver(NewsletterSchema),
            mode: "onChange" 
        });

    useEffect(() => {
        
        const handleMouseMove = (event: MouseEvent) => {
          setMousePosition({ x: event.clientX, y: event.clientY });
        };
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
        };

      });

    const onSubmit = async (data: TNewsletterSchema) => {
        // await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = await fetch('/api/subscribe-to-newsletter', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        
        const responseData = await response.json();
        if (!response.ok) {
            return;
        } else {
            setSubscribed(true);
        }

        if (responseData.errors) {
            const errors = responseData.errors;
            if (errors.email) {
                setError("email", {
                    type: "server",
                    message: errors.email,
                });
            }
        }
        reset();
    };

    return (
        <div id="newsletter">
            <h2 className="mb-4 text-5xl pb-4 font-black tracking-tight leading-extra w-full" style={{
                    backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`,
                }}>{stay}<br/>{toolbox}</h2>
            <p className="mb-8 text-xl">{join}</p>
                <form onSubmit={handleSubmit(onSubmit)} className='pb-10'>
                    <div className='flex w-full gap-4'>
                        <Input 
                            {...register("email")} 
                            type="email"
                            onChange={() => setSubscribed(false)}
                            placeholder={placeholder}
                            className='bg-white text-xl box-border pb-[.6rem] h-auto rounded-none max-w-[30rem]' 
                            id="email" 
                        /> 
                        <Button size="sm" disabled={isSubmitting} className='bg-black text-xl p-6 rounded-none hover:bg-green-500 hover:text-black'>{subscribe}</Button>
                    </div>
                    {errors.email && (
                        <p className="mb-8 p-2 text-xl text-black">{`${errors.email.message}`}</p>
                    )}
                    {subscribed && (
                        <p className="mb-8 p-2 text-lg text-black">{thank}</p>
                    )}                    
                </form>
        </div>
    )
}