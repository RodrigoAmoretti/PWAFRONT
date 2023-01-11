import { Form, Formik } from "formik";
import { useAlumnos } from "../context/AlumnoProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function AlumnoForm() {
    const { createAlumno, getAlumno, updateAlumno } = useAlumnos();
    const [alumno, setAlumno] = useState({
        nombre: "",
        email: "",
        telefono: "",
        disciplina: "",
    });
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const loadAlumno = async () => {
            if (params.id) {
            const alumno = await getAlumno(params.id);
            console.log(alumno);
            setAlumno({
                nombre: alumno.nombre,
                email: alumno.email,
                telefono: alumno.telefono,
                disciplina: alumno.disciplina,
            });
            }
        };
        loadAlumno();
    }, []);

    return (
        <div>
            <br/>
<br/>
<br/>
<br/>
<br/>

<h2>Estas a punto de formar parte de la familia Cobra Kai, sumate!</h2>
        <Formik
            initialValues={alumno}
            enableReinitialize={true}
            onSubmit={async (values, actions) => {
            console.log(values);
            if (params.id) {
                await updateAlumno(params.id, values);
            } else {
                await createAlumno(values);
            }
            navigate("/Alumnos");
            setAlumno({
                nombre: "",
                email: "",
                telefono: "",
                disciplina: "",
            });
            }}
        >
            {({ handleChange, handleSubmit, values, isSubmitting }) => (
            <Form
                onSubmit={handleSubmit}
                className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
            >
                <h1 className="text-xl font-bold uppercase text-center">
                {params.id ? "Editar Alumno" : "Nuevo Alumno"}
                </h1>
                <label className="block text-white"></label>
                <input
                type="text"
                name="nombre"
                placeholder="Escribí tu Nombre"
                className="px-2 py-1 rounded-sm w-full m-3"
                onChange={handleChange}
                value={values.nombre}
                />
                <label className="block text-white"></label>
                <input
                type="text"
                name="email"
                placeholder="Escribí tu Email"
                className="px-2 py-1 rounded-sm w-full m-3"
                onChange={handleChange}
                value={values.email}
                />
                <label className="block text-white"></label>
                <input
                type="text"
                name="telefono"
                placeholder="Escribí tu teléfono"
                className="px-2 py-1 rounded-sm w-full m-3"
                onChange={handleChange}
                value={values.telefono}
                />
                <label className="block text-white"></label>
                <input
                type="text"
                name="disciplina"
                placeholder="Escribí tu Disciplina"
                className="px-2 py-1 rounded-sm w-full m-3"
                onChange={handleChange}
                value={values.disciplina}
                />
                

                <button
                type="submit"
                disabled={isSubmitting}
                className="block bg-indigo-500 px-2 py-1 w-full rounded-md"
                >
                {isSubmitting ? "Enviando..." : "Enviar!"}
                </button>
            </Form>
            )}
        </Formik>
        <br/>
<br/>
<br/>
<br/><br/>
<br/>
<br/>
<br/><br/>
<br/>
<br/>
<br/><br/>
<br/>
<br/>
<br/>
<br/>
        </div>
    );
}

export default AlumnoForm;