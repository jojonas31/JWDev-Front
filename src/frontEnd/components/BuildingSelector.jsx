import Input from "./Input";
import MainCard from "./MainCard";
import Section from "./Section";
import Form from "./Form";
import ContenedorGeneral from "./ContenedorGeneral";
import Title from "./Title";
import Button from "./Button";
import { useNavigate, useRouteError } from "react-router-dom";
import BackArrow from "./BackArrow";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const BuildingSelector = () => {
  const navigate = useNavigate();
  const [buildings, setBuildings] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBuilding = async () => {
      try {
        const token = localStorage.getItem("token"); //Obtine el token

        const res = await axios.get(
          "http://localhost:3001/api/building/getBuildings", //Hace un request para obtener la lista de edificios de la DB
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setBuildings(res.data);
      } catch (err) {
        console.log("Error: ", err.messagge);
      }
    };
    fetchBuilding();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const buildingName = e.target.BuildingName.value;

    const selected = buildings.find((b) => b.address === buildingName);

    if (selected) {
      navigate("/BuildingUpdater", {
        state: { buildingId: selected.id, buildingName: selected.address },
      });
      setError("");
    } else {
      setError("Edificio invalido");
    }
  };

  return (
    <ContenedorGeneral>
      <MainCard>
        <Section className="m-auto">
          <BackArrow />
          <Form onSubmit={handleSubmit}>
            <Title text="Ingrese el edificio" />
            <Input
              type="text"
              name="BuildingName"
              placeholder="BUSCAR EDIFICIO"
              list="edificio"
              optionsDatalist={buildings.map((b) => b.address)}
              id="IDInputBuildingSelector"
            />
            {error && <p className="text-red-500">{error}</p>}
            <Button type="submit">BUSCAR</Button>
          </Form>
        </Section>
      </MainCard>
    </ContenedorGeneral>
  );
};

export default BuildingSelector;
