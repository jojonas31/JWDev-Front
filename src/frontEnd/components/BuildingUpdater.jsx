import { useLocation } from "react-router-dom";
import BackArrow from "./BackArrow";
import ContenedorGeneral from "./ContenedorGeneral";
import MainCard from "./MainCard";
import Section from "./Section";
import SelectorManual from "./SelectorManual";
import Title from "./Title";
import { useEffect, useState } from "react";
import axios from "axios";

const items = [
  { numero: "1", atendio: "Si/No", ultVisita: "2023-10-01" },
  { numero: "2", atendio: "Si/No", ultVisita: "2023-10-02" },
  { numero: "3", atendio: "Si/No", ultVisita: "2023-10-03" },
  { numero: "4", atendio: "Si/No", ultVisita: "2023-10-04" },
  { numero: "5", atendio: "Si/No", ultVisita: "2023-10-05" },
  { numero: "1", atendio: "Si/No", ultVisita: "2023-10-01" },
  { numero: "2", atendio: "Si/No", ultVisita: "2023-10-02" },
  { numero: "3", atendio: "Si/No", ultVisita: "2023-10-03" },
  { numero: "4", atendio: "Si/No", ultVisita: "2023-10-04" },
  { numero: "5", atendio: "Si/No", ultVisita: "2023-10-05" },
  { numero: "1", atendio: "Si/No", ultVisita: "2023-10-01" },
  { numero: "2", atendio: "Si/No", ultVisita: "2023-10-02" },
  { numero: "3", atendio: "Si/No", ultVisita: "2023-10-03" },
  { numero: "4", atendio: "Si/No", ultVisita: "2023-10-04" },
  { numero: "5", atendio: "Si/No", ultVisita: "2023-10-05" },
];

const BuildingUpdater = () => {
  const location = useLocation();
  const buildingName = location.state?.buildingName;
  const buildingId = location.state?.buildingId;
  const [doorbells, setDoorbells] = useState([]);

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      const fetchDoorbells = async () => {
        const res = await axios.get(
          "http://localhost:3001/api/doorbell/getAllDoorbellWithLastLog",
          {
            params: { buildingId: buildingId },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setDoorbells(res.data);
      };
      fetchDoorbells();
    } catch (err) {
      console.log("Error:", err.message);
    }
  }, []);

  useEffect(() => {
    console.log(doorbells);
  }, [doorbells]);
  return (
    <ContenedorGeneral>
      <MainCard autoHeight>
        <BackArrow />
        <Title text={buildingName || "Edificio"} className="my-30" />
        <Section className="mx-10 mt-10 mb-20 ">
          <Title text="ACTUALIZACIÓN DE DATOS" />
        </Section>
        <Section border className="m-3">
          <SelectorManual doorbells={doorbells} />
        </Section>
      </MainCard>
    </ContenedorGeneral>
  );
};

export default BuildingUpdater;
