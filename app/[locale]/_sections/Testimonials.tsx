// Next Intl
import { useTranslations } from "next-intl";
// Components
import Title from "@/components/Title";
import TestimonialCard from "@/components/Cards/TestimonialCard";
// data
import { testimonials } from "@/constants/content"

const Testimonials = () => {
    const t = useTranslations("Testimonials")

    return (
        <section className="flex flex-col items-center pt-16" id="testimonials">
            <Title 
                title={t('TestimonialsTitle')} 
                secondaryTitle={t('TestimonialsText')} 
            />

            {/* Projects List */}
            <div dir="ltr" className="mt-20 w-full">
                <div className="grid gap-12 grid-cols-2 max-[560px]:grid-cols-1">
                    {testimonials.map((testimonial , index) => (
                        <TestimonialCard data={testimonial} key={index} />
                    ))}
                </div>
            </div> 
        </section>
    )
}

export default Testimonials;


// Carosel style for testimonial
{/* 

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


<Carousel className="w-full max-w-xs my-auto">
    <CarouselContent>
        {
            [1, 2, 3].map(item => (
                <CarouselItem key={item} className="bg-blue-300 w-[600px] h-full">
                    <div className="p-1">
                        <Card>
                            <CardContent className="flex items-center justify-center p-6">
                                <span className="text-4xl font-semibold">
                                    {item}
                                </span>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
            ))
        }
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
</Carousel> 
*/}
