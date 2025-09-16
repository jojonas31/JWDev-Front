import "./Colors.css";

const Input = ({
  type,
  name,
  placeholder,
  id,
  list,
  optionsDatalist = [],
  ...rest
}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        id={id}
        list={list}
        className="border-2 border-jw-primary text-jw-primary rounded-md  bg-jw-light placeholder-gray-400 w-10/12 h-10 m-auto pl-2"
        {...rest}
      />
      {list && optionsDatalist.length > 0 && (
        <datalist id={list}>
          {optionsDatalist.map((option, idx) => (
            <option value={option} key={idx} />
          ))}
        </datalist>
      )}
    </>
  );
};

export default Input;
