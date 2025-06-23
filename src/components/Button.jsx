const variants = {
    primary:
        "bg-white text-black shadow-md hover:shadow-lg cursor-pointer hover:bg-zinc-200",
    secondary:
        "bg-zinc-800 text-white hover:bg-zinc-700 shadow-md hover:shadow-lg cursor-pointer",
    ghost: "bg-transparent text-white border border-white  cursor-pointer hover:border-zinc-400",
};

const sizes = {
    sm: "px-4 py-1 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg",
};

export const Button = ({
    children,
    variant = "primary",
    size = "md",
    icon, // expects remix icon class like 'ri-arrow-right-up-line'
    onClick,
    className = "",
    type = "button",
}) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`inline-flex items-center justify-center gap-2 rounded-sm font-semibold transition-all duration-300 ease-in-out ${variants[variant]} ${sizes[size]} ${className}`}
        >
            {icon && <i className={`${icon} text-lg`} />}
            {children}
        </button>
    );
};
