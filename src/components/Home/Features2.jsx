import React, { useRef, useEffect, useState } from 'react';
import { Check } from 'lucide-react';

export const FeatureCard = ({ feature, index }) => {
    const containerRef = useRef(null);
    const [scale, setScale] = useState(1);

    const topOffset = 100 + (index * 40);

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
            className="sticky w-full max-w-7xl mx-auto mb-16 sm:mb-20 md:mb-24 px-4 sm:px-6 lg:px-8"
            style={{
                top: `${topOffset}px`,
                zIndex: index + 10
            }}
        >
            <div
                className="relative will-change-transform origin-top transition-transform duration-100 ease-linear"
                style={{
                    transform: `scale(${scale})`,
                    filter: `brightness(${Math.max(0.92, scale)})`
                }}
            >
                <div
                    className="relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[1.5rem] bg-white border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                >
                    <div
                        className="absolute top-0 right-0 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px] opacity-10 pointer-events-none"
                        style={{ background: feature.themeColor }}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] sm:min-h-[550px]">

                        <div className="p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 flex flex-col justify-center relative z-10 order-2 lg:order-1">

                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1120] mb-4 sm:mb-5 lg:mb-6 leading-tight tracking-tight">
                                {feature.title}
                            </h3>

                            <p className="text-sm sm:text-base lg:text-md text-gray-600 mb-6 sm:mb-8 lg:mb-10 leading-relaxed font-medium max-w-md">
                                {feature.description}
                            </p>

                            <div className="space-y-3 sm:space-y-4">
                                {feature.keyPoints.map((point, i) => (
                                    <div key={i} className="flex items-start gap-2 sm:gap-3">
                                        <div
                                            className="mt-0.5 sm:mt-1 size-5 sm:size-6 rounded-full flex items-center justify-center flex-shrink-0"
                                            style={{ backgroundColor: `${feature.themeColor}40` }}
                                        >
                                            <Check
                                                className="size-2.5 sm:size-3 stroke-[3]"
                                                style={{ color: '#0B1120' }}
                                            />
                                        </div>
                                        <span className="text-sm sm:text-base text-gray-700 font-medium">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative min-h-[300px] sm:min-h-[350px] lg:min-h-auto overflow-hidden bg-gray-50 lg:bg-transparent flex items-center justify-center p-6 sm:p-8 order-1 lg:order-2">

                            <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 rounded-full blur-[60px] sm:blur-[80px] opacity-30 sm:opacity-40"
                                style={{ background: feature.themeColor }}
                            ></div>

                            <div className="relative w-full h-full max-h-[280px] sm:max-h-[400px] lg:max-h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl transform lg:translate-x-6 xl:translate-x-10 lg:translate-y-6 xl:translate-y-10 transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={feature.imageUrl}
                                    alt={feature.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
