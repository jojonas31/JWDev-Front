const Button = ({ text, className = "", onClick }) => {
  return (
    <button
      className={`w-10/12 m-auto bg-jw-primary font-bold ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
