"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface CreativeImageProps {
    src: string;
    alt: string;
    className?: string;
}

export function CreativeImage({ src, alt, className = '' }: CreativeImageProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div className={`relative ${className}`}>
            {/* Background Glow Effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl scale-105"
                animate={{
                    scale: [1, 1.02, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Main Container */}
            <motion.div
                ref={ref}
                className="relative w-[250px] h-[250px] rounded-2xl border-2 border-white/20 bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl overflow-hidden cursor-pointer"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent z-10" />

                {/* Shine Effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent z-20"
                    animate={{
                        x: ["-100%", "200%"],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 5,
                    }}
                >
                    
                </motion.div>

                {/* Image */}
                <motion.div
                    className="w-full h-full relative"
                    style={{
                        transform: "translateZ(50px)",
                        transformStyle: "preserve-3d",
                    }}
                >
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-cover scale-110"
                        priority
                    />
                </motion.div>

                {/* Border Glow */}
                <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 opacity-0"
                    whileHover={{ opacity: 0.8 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        maskComposite: "subtract",
                        WebkitMaskComposite: "subtract",
                    }}
                />
            </motion.div>
        </div>
    );
}

// Alternative Minimal Version
export function MinimalCreativeImage({ src, alt, className = '' }: CreativeImageProps) {
    return (
        <motion.div
            className={`relative w-[220px] h-[220px] rounded-2xl ${className}`}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900" />

            {/* Animated Border */}
            <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                animate={{
                    backgroundPosition: ["0%", "100%"],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{
                    backgroundSize: "200% 200%",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "subtract",
                    WebkitMaskComposite: "subtract",
                    padding: "2px",
                }}
            />

            {/* Image Container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover scale-105 hover:scale-100 transition-transform duration-500"
                    priority
                />

                {/* Overlay Shine */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                        x: ["-100%", "200%"],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                    }}
                />
            </div>
        </motion.div>
    );
}