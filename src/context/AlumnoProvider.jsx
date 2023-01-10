import { createContext, useContext, useState } from "react";
import {
    getAlumnosRq,
    deleteAlumnoRq,
    createAlumnoRq,
    getAlumnoRq
} from "../axioss/alumno.api";
import { AlumnoContext } from "./AlumnoContext";

export const useAlumnos = () => {
    const context = useContext(AlumnoContext);
    if (context === undefined) {
    throw new Error("Necesita un Provider");
    }
    return context;
};

export const AlumnoContextProvider = ({ children }) => {
    const [alumnos, setAlumnos] = useState([]);

    async function loadAlumnos() {
    const response = await getAlumnosRq();
    setAlumnos(response.data);
    }

    const deleteAlumno = async (id) => {
    try {
        const response = await deleteAlumnoRq(id);
        setAlumnos(alumnos.filter((alumno) => alumno.id !== id));
    } catch (error) {
        console.error(error);
    }
    };

    const createAlumno = async (alumno) => {
    try {
        await createAlumnoRq(alumno);
    } catch (error) {
        console.error(error);
    }
    };

    const getAlumno = async (id) => {
        try {
        const response = await getAlumnoRq(id);
        return response.data;
        } catch (error) {
        console.error(error);
        }
    };


    return (
        <AlumnoContext.Provider
        value={{
            alumnos,
            loadAlumnos,
            deleteAlumno,
            createAlumno,
            getAlumno
        }}
    >
        {children}
    </AlumnoContext.Provider>
    );
};