import Button from "./Button";
import { DataFormatter } from "../utils/DataFormatter";

const SelectorManual = ({ doorbells, handleSubmit }) => {
  return (
    <>
      {/* Encabezados */}
      <div className="grid grid-cols-9 border-b-2 border-jw-primary p-1 font-bold text-jw-primary text-sm">
        <div className="col-span-1 m-auto">N°</div>
        <div className="col-span-2 m-auto">Atendio</div>
        <div className="col-span-2 m-auto">Fecha</div>
        <div className="col-span-4 m-auto text-center">Acciones</div>
      </div>

      {/* Filas dinamicas*/}
      {doorbells.map((doorbell, idx) => (
        <div
          key={idx}
          className={`grid grid-cols-9 grid-flow-col gap-1 border-jw-primary overflow-y-auto p-1 ${
            idx === doorbells.length - 1 ? "border-b-0" : "border-b-2"
          }`}
        >
          <div className="col-span-1 text-jw-primary m-auto">
            {doorbell.doorbellNumber}
          </div>
          <div className="col-span-2 text-jw-primary m-auto">
            {doorbell.isAnswered === true ? "Si" : "No"}
          </div>
          <div className="col-span-2 text-jw-primary m-auto">
            {DataFormatter(doorbell.registeredAt)}
          </div>
          <Button
            text="SI"
            className="col-span-2 text-xs"
            onClick={() => handleSubmit(doorbell.id, true)}
          ></Button>
          <Button
            text="NO"
            className="col-span-2 text-xs"
            onClick={() => handleSubmit(doorbell.id, false)}
          ></Button>
        </div>
      ))}
    </>
  );
};

export default SelectorManual;
