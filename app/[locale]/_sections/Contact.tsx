// components/Contact.tsx (fixed version)
"use client"

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Title from '@/components/Title';
import { useForm } from 'react-hook-form';
import { toast } from "sonner"
import { send, init } from '@emailjs/browser';
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

function Contact() {
    const t = useTranslations("Contact")
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
        init('Fp-bsNyp7ZHevdX6W');
    }, [])

    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()

    const onSubmit = (data: Record<string, unknown> | undefined) => {
        send('service_wkvbbdn', 'template_csp0owc', data)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                toast("Message sent successfully");
                reset(); 
            })
            .catch((err) => {
                console.error('FAILED...', err);
            });
    }

    // Prevent hydration mismatch by not rendering form until client-side
    if (!isClient) {
        return (
            <section className="contact flex flex-col justify-center items-center pt-16" id="contact">
                <Title title={t('contactTitle')} secondaryTitle="" />
                <div className='flex flex-col justify-between items-center gap-10 px-6 mt-2 rounded-xl'>
                    <div>Loading contact form...</div>
                </div>
            </section>
        )
    }

    return (
        <section className="contact flex flex-col justify-center items-center pt-16" id="contact">
            <Title title={t('contactTitle')} secondaryTitle="" />

            <div className='flex flex-col justify-between items-center gap-10 px-6 mt-2 rounded-xl'>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='w-[400px] text-center max-[560px]:w-11/12'
                >
                    <div className="flex-col flex">
                        <input
                            className='w-full text-[1.6rem] text-c2 mx-0 my-[0.7rem] p-4 bg-c4 rounded-md'
                            type="text"
                            placeholder={t("inputName")}
                            {...register("from_name", { required: true })}
                        />
                        {errors.from_name && <span className="text-red-500 text-sm">This field is required</span>}

                        <input
                            className='w-full text-[1.6rem] text-c2 mx-0 my-[0.7rem] p-4 bg-c4 rounded-md'
                            type="email"
                            placeholder={t("inputEmail")}
                            {...register("from_email", {
                                required: true,
                                pattern: /^\S+@\S+$/i
                            })}
                        />
                        {errors.from_email && <span className="text-red-500 text-sm">Valid email is required</span>}
                    </div>

                    <textarea
                        className='bg-c4 w-full text-[1.6rem] text-c2 resize-none mx-0 my-[0.7rem] p-6 rounded-md'
                        cols={30}
                        rows={10}
                        placeholder={t("inputMessage")}
                        {...register("message", { required: true })}
                    />
                    {errors.message && <span className="text-red-500 text-sm">This field is required</span>}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full p-4 rounded-md bg-c2 font-extrabold text-3xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? t("sending") : t("send")}
                    </button>
                </form>

                <div className='max-[560px]:mt-10'>
                    <a className="inline-flex cursor-pointer justify-center items-center w-16 h-16 bg-transparent border-c2 text-[2rem] text-c2 ml-0 mr-6 rounded-[50%] border-[0.2rem] border-solid hover:bg-c2 hover:text-c1" target="_blank" href="https://t.me/abdullahasson"><FaTelegramPlane /></a>
                    <a className="inline-flex cursor-pointer justify-center items-center w-16 h-16 bg-transparent border-c2 text-[2rem] text-c2 ml-0 mr-6 rounded-[50%] border-[0.2rem] border-solid hover:bg-c2 hover:text-c1" target="_blank" href="https://wa.me/963932680992"><FaWhatsapp /></a>
                </div>
            </div>
        </section>
    )
}

export default Contact