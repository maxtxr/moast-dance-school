import { Link } from 'react-router-dom';

const BrutalistButton = ({ children, className = '', onClick, ariaLabel, type = 'button', to, href, ...rest }) => {
    const classes = `bg-black text-white font-sans font-bold uppercase px-6 py-3 border-[4px] border-black shadow-[5px_5px_0_0_#95D1D3] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all inline-block ${className}`;

    if (to) {
        return <Link to={to} className={classes} aria-label={ariaLabel} {...rest}>{children}</Link>;
    }

    if (href) {
        return <a href={href} target="_blank" rel="noopener noreferrer" className={classes} aria-label={ariaLabel} {...rest}>{children}</a>;
    }

    return (
        <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel} {...rest}>
            {children}
        </button>
    );
};

export default BrutalistButton;
