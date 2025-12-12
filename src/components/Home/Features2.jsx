import React, { useRef, useEffect, useState } from 'react';
import { Check } from 'lucide-react';

export const FeatureCard = ({ feature, index }) => {
    const containerRef = useRef(null);
    const [scale, setScale] = useState(1);

    const topOffset = 100 + (index * 20);

    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current;
            if (!container) return;

            const rect = container.getBoundingClientRect();
            const scrollProgress = Math.max(0, topOffset - rect.top);

            if (scrollProgress > 0) {
                const newScale = Math.max(0.9, 1 - (scrollProgress * 0.00015));
                setScale(newScale);
            } else {
                setScale(1);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [topOffset]);

    return (
        <div
            ref={containerRef}
            className="sticky w-full max-w-7xl mx-auto mb-20 sm:mb-32 md:mb-48 lg:mb-24 px-3 sm:px-4 md:px-6 lg:px-8"
            style={{
                top: `${topOffset}px`,
                zIndex: index + 10
            }}
        >
            <div
                className="relative will-change-transform origin-top transition-transform duration-100 ease-linear"
                style={{
                    transform: `scale(${scale})`,
                    filter: `brightness(${Math.max(0.95, scale)})`
                }}
            >
                <div
                    className="relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl bg-white border border-gray-100 shadow-2xl shadow-[#75ccc3]/10"
                >
                    <div
                        className="absolute top-0 right-0 w-[300px] sm:w-[500px] lg:w-[700px] h-[300px] sm:h-[500px] lg:h-[700px] rounded-full blur-[60px] sm:blur-[90px] lg:blur-[120px] opacity-20 pointer-events-none"
                        style={{ background: feature.themeColor }}
                    />

                    <div className="flex flex-col lg:grid lg:grid-cols-2">

                        <div className="p-5 sm:p-6 md:p-8 lg:p-10 xl:p-14 flex flex-col justify-center relative z-10 order-2 lg:order-1">

                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 mb-2.5 sm:mb-3 md:mb-3.5 lg:mb-5 leading-tight tracking-tight">
                                {feature.title}
                            </h3>

                            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-4 sm:mb-5 md:mb-5 lg:mb-8 leading-relaxed font-medium">
                                {feature.description}
                            </p>

                            <div className="space-y-2 sm:space-y-2.5 md:space-y-2.5 lg:space-y-4">
                                {feature.keyPoints.map((point, i) => (
                                    <div key={i} className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                                        <div
                                            className="mt-0.5 size-4 sm:size-5 md:size-5 rounded-full flex items-center justify-center flex-shrink-0"
                                            style={{ backgroundColor: `${feature.themeColor}` }}
                                        >
                                            <Check
                                                className="size-2.5 sm:size-3 md:size-3 stroke-[3]"
                                                style={{ color: '#09090b' }}
                                            />
                                        </div>
                                        <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 font-medium leading-snug">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative h-[200px] sm:h-[220px] md:h-[200px] lg:h-[550px] xl:h-[600px] overflow-hidden order-1 lg:order-2">
                            <div
                                className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
                            >
                                <div
                                    className="w-2/3 h-2/3 rounded-full blur-[60px] sm:blur-[80px] opacity-30"
                                    style={{ background: feature.themeColor }}
                                ></div>
                            </div>

                            <img
                                src={feature.imageUrl}
                                alt={feature.title}
                                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

