import React, { useState } from 'react';
import { useFlashlight } from '../../hooks/useFlashlight';
import { motion, AnimatePresence } from 'framer-motion';

export const FlashlightCard = ({ 
    children, 
    className = '', 
    gradientColor = 'rgba(156, 212, 175, 0.15)',
    gradientSize = '600px',
    showParticles = true
}) => {
    const { ref, position, opacity, handlers } = useFlashlight();
    const [particles, setParticles] = useState([]);

    const accentColors = ['#9cd4af', '#75ccc3', '#d7e48a'];

    const handleMouseMove = (e) => {
        handlers.onMouseMove(e);
        
        if (showParticles && Math.random() > 0.85) {
            const newParticle = {
                id: Date.now() + Math.random(),
                x: position.x,
                y: position.y,
                color: accentColors[Math.floor(Math.random() * accentColors.length)],
                size: Math.random() * 4 + 2,
            };
            setParticles(prev => [...prev.slice(-8), newParticle]);
        }
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handlers.onMouseLeave}
            className={`relative overflow-hidden ${className}`}
        >
            <div
                className="pointer-events-none absolute -inset-px transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(${gradientSize} circle at ${position.x}px ${position.y}px, ${gradientColor}, transparent 40%)`,
                }}
            />
            
            <AnimatePresence>
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        initial={{ 
                            x: particle.x, 
                            y: particle.y, 
                            opacity: 1, 
                            scale: 0 
                        }}
                        animate={{ 
                            x: particle.x + (Math.random() - 0.5) * 100,
                            y: particle.y - Math.random() * 100,
                            opacity: 0,
                            scale: 1
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        onAnimationComplete={() => {
                            setParticles(prev => prev.filter(p => p.id !== particle.id));
                        }}
                        className="absolute pointer-events-none rounded-full"
                        style={{
                            width: particle.size,
                            height: particle.size,
                            backgroundColor: particle.color,
                            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
                        }}
                    />
                ))}
            </AnimatePresence>
            
            {children}
        </div>
    );
};
