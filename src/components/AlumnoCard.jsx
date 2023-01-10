import { useAlumnos } from "../context/AlumnoProvider";
import { useNavigate } from "react-router-dom";

function AlumnoCard({ alumno }) {
    const { deleteAlumno } = useAlumnos();
    const navigate = useNavigate();


    return (
        <div className="bg-zinc-700 text-white rounded-md p-4">
        <header className="flex justify-between">
            <h2 className="text-sm font-bold">{alumno.nombre}</h2>
        </header>
        <p className="text-xs">{alumno.email}</p>
        <p className="text-xs">{alumno.telefono}</p>
        <p className="text-xs">{alumno.disciplina}</p>
        <span>{alumno.createAt}</span>
        <div className="flex gap-x-1">
            <button
            className="bg-slate-300 px-2 py-1 text-black"
            onClick={() => deleteAlumno(alumno.id)}
            >
            Eliminar alumno
            </button>
        </div>
        </div>
    );
}

export default AlumnoCard;