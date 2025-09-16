import "./Colors.css";

const MainCard = ({ children, autoHeight }) => {
  return (
    <>
      <div
        className={
          "flex flex-col h-auto justify-between w-full gap-2 relative border-2 rounded-xl border-jw-primary bg-white box-border "
        }
      >
        {children}
      </div>
    </>
  );
};

export default MainCard;
