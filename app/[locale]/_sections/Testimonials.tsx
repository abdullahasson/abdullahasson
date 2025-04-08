// Next Intl
import { useTranslations } from "next-intl"
// Components
import Title from "@/components/Title"
// import TestimonialCard from "@/components/Cards/TestimonialCard"
// Shadcn UI
import * as React from "react"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
// Data
// import { testimonials } from "@/constants/content"


const Testimonials = () => {
    const t = useTranslations("Testimonials")

    return (
        <section className="flex flex-col items-center pt-16" id="testimonials">
            <Title title={t('TestimonialsTitle')} secondaryTitle={t('TestimonialsText')} />

            {/* Projects List */}
            {/* <div dir="ltr" className="mt-20 w-full">
                <div className="grid gap-12 grid-cols-2 max-[560px]:grid-cols-1">
                    {testimonials.map((testimonial , index) => (
                        <TestimonialCard data={testimonial} key={index} />
                    ))}
                </div>
            </div> */}

            <Carousel className="w-full max-w-xs">
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    )
}

export default Testimonials