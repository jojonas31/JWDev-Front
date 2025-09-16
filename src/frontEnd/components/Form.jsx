import "./Colors.css";

const Form = ({ children, onSubmit }) => {
  return (
    <form
      action=""
      className="flex flex-wrap justify-center w-full flex-col gap-4 mt-4"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};

export default Form;
