import axios from "axios";

export const getAlumnosRq = async () =>
    await axios.get("http://localhost:8080/alumnos");

export const createAlumnoRq = async (alumno) =>
    await axios.post("http://localhost:8080/alumnos", alumno);

export const deleteAlumnoRq = async (id) =>
    await axios.delete(`http://localhost:8080/alumnos/${id}`);

export const getAlumnoRq = async (id) =>
    await axios.get(`http://localhost:8080/alumnos/${id}`);

