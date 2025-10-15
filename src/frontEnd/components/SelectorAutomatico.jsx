import Button from "./Button";
import { DataFormatter } from "../utils/DataFormatter.js";

const SelectorAutomatico = ({ doorbell, handleSubmit }) => {
  const selectLastDoorbell = () => {
    console.log(doorbell);
    var lastDoorbell = doorbell[0];
    doorbell.forEach((item) => {
      if (lastDoorbell.registeredAt > item.registeredAt) {
        lastDoorbell = item;
      }
    });
    return lastDoorbell;
  };

  const autoDoorbell = selectLastDoorbell();
  console.log(autoDoorbell);

  if (!autoDoorbell) {
    return (
      <div className="text-center text-jw-primary">
        No hay datos de timbres disponibles.
      </div>
    );
  }

  return (
    <>
      <div className=" border-b-2 border-jw-primary font-bold text-jw-primary text-sm">
        <div className="text-2xl m-auto">
          Timbre {autoDoorbell.doorbellNumber}
        </div>
      </div>
      <div
        className={`grid grid-cols-2 gap-5 border-jw-primary overflow-y-auto p-1`}
      >
        <div className={`text-xl text-jw-primary m-auto`}>
          Ult Vis: {DataFormatter(autoDoorbell.registeredAt)}
        </div>
        <div className={`text-xl text-jw-primary m-auto`}>
          Atendio: {autoDoorbell.isAnswered === true ? "SI" : "NO"}
        </div>
        <Button
          text={"SI"}
          className="text-l max-w-20"
          onClick={() => handleSubmit(autoDoorbell.id, true)}
        ></Button>
        <Button
          text={"NO"}
          className="text-l max-w-20"
          onClick={() => handleSubmit(autoDoorbell.id, false)}
        ></Button>
      </div>
    </>
  );
};

export default SelectorAutomatico;
