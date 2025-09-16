const SelectorManual = ({ doorbells }) => {
  return (
    <>
      {doorbells.map((doorbell, idx) => (
        <div
          key={idx}
          className={`grid grid-cols-5 grid-flow-col gap-1 border-jw-primary overflow-y-auto ${
            idx === doorbells.length - 1 ? "border-b-0" : "border-b-2"
          }`}
        >
          <div className="col-span-1 text-jw-primary">
            N° {doorbell.doorbellNumber}
          </div>
          <div className="col-span-2 text-jw-primary">
            {doorbell.isAnswered === true ? "Si" : "No"}
          </div>
          <div className="col-span-2 text-jw-primary">
            {doorbell.registeredAt}
          </div>
        </div>
      ))}
    </>
  );
};

export default SelectorManual;
