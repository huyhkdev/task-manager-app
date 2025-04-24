interface AppButtonProps {
    icon: React.ReactNode;
    text: string;
    onClick: () => void;
    type?: "primary" | "secondary";
    className?: string;
}
export const AppButton = ({ icon, text, onClick, type = "primary", className }: AppButtonProps) => {
    const buttonPrimaryClass = "btn-primary rounded-lg px-4 py-2"
    const buttonSecondaryClass ="rounded-lg px-4 bg-white border border-gray-300 hover:bg-gray-100 text-black";
    const buttonClass = type === "primary" ? buttonPrimaryClass : buttonSecondaryClass;
    return <button onClick={onClick} className={`${buttonClass} ${className}`}>
        <span className="flex items-center gap-x-2">
            {icon}
            {text}
        </span>
    </button>
};
