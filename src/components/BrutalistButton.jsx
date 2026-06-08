const BrutalistButton = ({ children, className = '', onClick, ariaLabel }) => (
    <button
        type="button"
        onClick={onClick}
        aria-label={ariaLabel}
        className={`bg-black text-white font-sans font-bold uppercase px-6 py-3 border-[4px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all ${className}`}
    >
        {children}
    </button>
);

export default BrutalistButton;
