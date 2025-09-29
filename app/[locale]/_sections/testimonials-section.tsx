// components/testimonials-section.tsx
'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Title from '@/components/Title';
import { ChevronLeft, ChevronRight, Star, Quote, Link } from 'lucide-react';
import testimonial1 from "../../../public/images/testmonials-1.png"
import testimonial2 from "../../../public/images/testmonials-2.png"
import Image, { StaticImageData } from 'next/image';

interface Testimonial {
    id: number;
    text: string;
    name: string;
    position: string;
    avatar: StaticImageData;
    rating: number;
    preview: string;
}

export default function TestimonialsSection() {
    const t = useTranslations("Testimonials");
    const lang = useLocale();
    const isRTL = lang == "ar"
    const [isClient, setIsClient] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    const testimonials: Testimonial[] = [
        {
            id: 1,
            text: t("Testimonial1.text"),
            name: t("Testimonial1.name"),
            position: "mostaql",
            avatar: testimonial1,
            rating: 5,
            preview: "https://mostaql.com/u/Abdullah_Hasson/reviews/8359509"
        },
        {
            id: 2,
            text: t("Testimonial2.text"),
            name: t("Testimonial2.name"),
            position: "mostaql",
            avatar: testimonial2,
            rating: 5,
            preview: "https://mostaql.com/u/Abdullah_Hasson/reviews/8359509"
        },
        {
            id: 3,
            text: t("Testimonial3.text"),
            name: t("Testimonial3.name"),
            position: "nafezly",
            avatar: testimonial1,
            rating: 5,
            preview: "https://mostaql.com/u/Abdullah_Hasson/reviews/8359509"
        }
    ];

    // Set isClient to true after component mounts (client-side only)
    useEffect(() => {
        setIsClient(true);
    }, []);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Auto-rotate testimonials - FIXED VERSION
    useEffect(() => {
        if (isHovering || !isClient) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isHovering, isClient, testimonials.length]); // Fixed dependencies

    // Calculate positions for 3D carousel
    function getCardPosition(index: number) {
        const total = testimonials.length;
        const angle = (360 / total) * (index - currentIndex);
        const radius = 400;

        const x = radius * Math.sin(angle * Math.PI / 180);
        const z = -radius * Math.cos(angle * Math.PI / 180);

        return { x, z, angle };
    }

    // Don't render the carousel on server-side to avoid hydration mismatch
    if (!isClient) {
        return (
            <section>
                <Title title={t('TestimonialsTitle')} secondaryTitle={t('TestimonialsText')} />
                <div className="mx-auto text-center" dir="ltr">
                    <div className="relative h-[500px] perspective-1000 mx-auto max-w-7xl flex items-center justify-center">
                        <div className="text-c3">Loading testimonials...</div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className='min-h-[100vh] pt-16 px-64 pb-[5rem] max-[560px]:px-10 max-[767px]:px-10' id='testimonials'>
            <Title title={t('TestimonialsTitle')} secondaryTitle={t('TestimonialsText')} />
            <div className="mx-auto text-center" dir="ltr">
                <div
                    className="relative h-[500px] perspective-1000 mx-auto max-w-7xl"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <div className="relative w-full h-full">
                        {/* Map All Cards */}
                        {testimonials.map((testimonial, index) => {
                            const { x, z, angle } = getCardPosition(index);
                            const isActive = Math.abs(angle) < 90;

                            return (
                                <motion.div
                                    key={testimonial.id}
                                    className="absolute top-1/2 left-1/2 w-80 h-96 -ml-40 -mt-48"
                                    initial={{
                                        x: 0,
                                        z: -400,
                                        rotateY: 0,
                                        opacity: 0,
                                        scale: 0.8
                                    }}
                                    animate={{
                                        x,
                                        z,
                                        rotateY: angle,
                                        opacity: isActive ? 1 : 0.5,
                                        scale: isActive ? 1 : 0.85
                                    }}
                                    transition={{ type: "spring", stiffness: 50, damping: 20 }}
                                    style={{ transformStyle: "preserve-3d" as const }}
                                >
                                    <Card dir={isRTL ? 'rtl' : 'ltr'} className="cursor-pointer scale-[1.5] w-full h-full bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden relative">
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-c2"></div>

                                        <CardContent className="p-6 h-full flex flex-col justify-between">
                                            <div>
                                                <div className='flex items-center justify-between mb-4'>
                                                    <Quote className="w-8 h-9 text-c2" />

                                                    <a href={testimonial.preview} className='z-20'>
                                                        <Link className="w-8 h-9 text-c2" />
                                                    </a>
                                                </div>
                                                <p className={`text-slate-200 ${isRTL ? 'text-right' : 'text-left'} mb-6 line-clamp-5`}>
                                                    {testimonial.text}
                                                </p>
                                            </div>

                                            <div className="flex items-center space-x-4">
                                                <div className="flex-shrink-0">
                                                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-c2">
                                                        <Image
                                                            src={testimonial.avatar}
                                                            alt={testimonial.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                </div>

                                                <div className={`${isRTL ? 'text-right pr-4' : 'text-left'}`}>
                                                    <h3 className="font-semibold text-white">{testimonial.name}</h3>
                                                    <p className="text-slate-300 text-sm">{testimonial.position}</p>

                                                    <div className="flex mt-1">
                                                        {[...Array(testimonial.rating)].map((_, i) => (
                                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Controls */}
                <div className="flex justify-center mt-8 mx-auto w-44 border border-white/20 rounded-[100vmax] overflow-hidden">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={prevTestimonial}
                        className="flex-1 bg-white/10 text-white hover:bg-c2/20"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </Button>

                    <Button
                        variant="outline"
                        size="icon"
                        onClick={nextTestimonial}
                        className="flex-1 bg-white/10 border-l border-l-white/20 text-white hover:bg-c2/20"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </Button>
                </div>

                {/* Dots - Commented out as per your code */}
                {/* <div className="flex justify-center space-x-2 mt-3">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToTestimonial(index)}
                            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                                    ? 'bg-c2 scale-125'
                                    : 'bg-white/30'
                                }`}
                        />
                    ))}
                </div> */}
            </div>
        </section>
    );
}