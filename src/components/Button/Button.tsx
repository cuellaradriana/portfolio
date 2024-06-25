type ButtonProps = {
    type: 'button' | 'submit' | 'reset';
    id?: string;
    onClick?: () => void;
    children: string;
};

const Button: React.FC<ButtonProps> = ({ type, id, onClick, children }) => {
    return (
        <button
            type={type ? type : 'button'}
            className="bg-mainColor border border-mainColor rounded-3xl py-2 px-4 text-xs font-semibold text-dark hover:bg-dark hover:text-mainColor transition-all duration-700"
            id={id}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
