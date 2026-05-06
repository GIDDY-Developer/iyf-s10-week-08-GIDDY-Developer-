function Button({ text = "Click me", variant = "primary", size = "medium", disabled = false, onClick }) {
    return (
        <button
            className={`btn btn-${variant} btn-${size}`}
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;