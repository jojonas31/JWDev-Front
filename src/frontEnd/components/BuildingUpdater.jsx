import { useLocation } from "react-router-dom";
import BackArrow from "./BackArrow";
import ContenedorGeneral from "./ContenedorGeneral";
import MainCard from "./MainCard";
import Section from "./Section";
import SelectorManual from "./SelectorManual";
import SelectorAutomatico from "./SelectorAutomatico";
import Title from "./Title";
import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const BuildingUpdater = () => {
  const location = useLocation();
  const buildingName = location.state?.buildingName;
  const buildingId = location.state?.buildingId;
  const [doorbells, setDoorbells] = useState([]);

  useEffect(() => {
    //Usamos useEffect para actualizar los timbres en el selector manual
    const fetchDoorbells = async () => {
      try {
        const token = localStorage.getItem("token");
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
      } catch (err) {
        console.error("Error en getAllDoorbellWithLastLog:", err);
        console.log("Error:", err.message);
      }
    };
    if (buildingId) fetchDoorbells();
  }, [buildingId]);

  useEffect(() => {
    console.log(doorbells);
  }, [doorbells]);

  const handleSubmitAnswer = async (doorbellIdResponse, isAnsweredResponse) => {
    //Manejamos la respuesta de los botones en cada timbre
    try {
      const token = localStorage.getItem("token");
      const decode = jwtDecode(token); //Hago un decode del token para usar los parametros
      const res = await axios.post(
        "http://localhost:3001/api/callLog/createCallLog",
        {
          isAnswered: isAnsweredResponse,
          registeredAt: Date.now(),
          userId: decode.id, //El id del usuario dentro del token
          doorbellId: doorbellIdResponse,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const updated = await axios.get(
        "http://localhost:3001/api/doorbell/getAllDoorbellWithLastLog",
        {
          params: { buildingId },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setDoorbells(updated.data);
    } catch {
      console.log("Error en el submit");
    }
  };

  return (
    <ContenedorGeneral>
      <MainCard autoHeight>
        <BackArrow />
        <Title text={buildingName || "Edificio"} className="my-30" />
        <Section border className="mx-10 mt-10 mb-20">
          <SelectorAutomatico
            doorbell={doorbells}
            handleSubmit={handleSubmitAnswer}
          />
        </Section>
        <Section border className="m-3">
          <SelectorManual
            doorbells={doorbells}
            handleSubmit={handleSubmitAnswer}
          />
        </Section>
      </MainCard>
    </ContenedorGeneral>
  );
};

export default BuildingUpdater;
