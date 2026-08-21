import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

type RevealProps = {
    children: ReactNode
    className?: string
    delay?: number
    y?: number
    as?: 'div' | 'section' | 'li' | 'span'
}

export function Reveal({ children, className, delay = 0, y = 24, as = 'div' }: RevealProps) {
    const MotionTag = motion[as]
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <MotionTag
            ref={ref}
            className={className}
            initial={{ opacity: 0, y }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        >
        {children}
        </MotionTag>
    )
}