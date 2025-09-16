import { useNavigate } from "react-router-dom";
import backArrow from "../assets/backarrow.svg";

const BackArrow = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <img
      src={backArrow}
      alt="Volver"
      onClick={handleClick}
      className="size-14 m-4 absolute top-0 left-0 cursor-pointer"
    />
  );
};

export default BackArrow;
