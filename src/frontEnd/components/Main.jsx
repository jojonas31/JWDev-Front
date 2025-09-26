import { data, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import MainCard from "./MainCard";
import Section from "./Section";
import Title from "./Title";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import ContenedorGeneral from "./ContenedorGeneral";
import { useState, useEffect } from "react";
import supabase from "../../../utils/supabase";
import axios from "axios";

const Main = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:3001/api/user/userValidate", //Hace una peticion para validar el usuario al enviarse el form
        data
      );
      if (res.data.success) {
        localStorage.setItem("token", res.data.token); //Setea en el localStorage el token devuelto
        navigate("/BuildingSelector");
      } else {
        alert("usuario o contraseña invalido");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ContenedorGeneral>
      <MainCard autoHeight>
        <Section className="m-auto">
          <Title text="Ingrese su usuario" />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              placeholder="USUARIO"
              {...register("userName", {
                required: "Debe ingresar su nombre de usuario",
              })}
            />
            {errors.userName && (
              <p className="text-red-500">{errors.userName.message}</p>
            )}
            <Input
              type="password"
              placeholder="CONTRASEÑA"
              {...register("userPassword", {
                required: "La contraseña es obligatoria",
              })}
            />
            {errors.userPassword && (
              <p className="text-red-500">{errors.userPassword.message}</p>
            )}
            <Button type="submit" text="ENVIAR"></Button>
          </Form>
        </Section>
      </MainCard>
    </ContenedorGeneral>
  );
};

export default Main;
