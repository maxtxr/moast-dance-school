import { m } from 'framer-motion';

const DEFAULT_ANIMATION_PROPS = {};

const shadowVariants = {
    sm: 'shadow-[3px_3px_0_0_rgba(0,0,0,1)]',
    md: 'shadow-[4px_4px_0_0_rgba(0,0,0,1)]',
    lg: 'shadow-[6px_6px_0_0_rgba(0,0,0,1)]',
    xl: 'shadow-[8px_8px_0_0_rgba(0,0,0,1)]',
};

const borderWidth = {
    thin: 'border-[2px]',
    normal: 'border-[3px]',
    thick: 'border-[4px]',
    heavy: 'border-[8px]',
};

export const BrutalistCard = ({
    children,
    className = '',
    shadow = 'md',
    border = 'normal',
    hoverable = false,
    animate = false,
    animationProps = DEFAULT_ANIMATION_PROPS,
    onClick,
    as = 'div',
}) => {
    const baseClasses = `border-black ${borderWidth[border]} ${shadowVariants[shadow]} ${hoverable ? 'hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all' : ''} ${onClick ? 'cursor-pointer' : ''} ${className}`;

    const Component = animate ? m.div : as;

    const motionProps = animate
        ? {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            ...animationProps,
        }
        : {};

    return (
        <Component className={baseClasses} onClick={onClick} {...motionProps}>
            {children}
        </Component>
    );
};



