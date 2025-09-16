import "./Colors.css";

const Title = ({ text, className = "" }) => {
  return (
    <h2
      className={`text-jw-primary box-border w-10/12 text-3xl font-sans m-auto ${className}`}
    >
      {text}
    </h2>
  );
};

export default Title;
