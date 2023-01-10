import axios from "axios";

export const getAlumnosRq = async () =>
    await axios.get("https://pwaback-production-23e5.up.railway.app/alumnos");

export const createAlumnoRq = async (alumno) =>
    await axios.post("https://pwaback-production-23e5.up.railway.app/alumnos", alumno);

export const deleteAlumnoRq = async (id) =>
    await axios.delete(`https://pwaback-production-23e5.up.railway.app/alumnos/${id}`);

export const getAlumnoRq = async (id) =>
    await axios.get(`https://pwaback-production-23e5.up.railway.app/alumnos/${id}`);

