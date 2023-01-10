import React from 'react'
import { useAlumnos } from '../context/AlumnoProvider';
import { useEffect } from 'react';
import AlumnoCard from '../components/AlumnoCard'
function AlumnoPage() {
    const { alumnos, loadAlumnos } = useAlumnos();

    useEffect(() => {
        loadAlumnos();
    }, []);

    function renderMain() {
        if (alumnos.length === 0) return <h1 className="font-bold">No hay alumnos registrados</h1>;
        return alumnos.map((alumno) => <AlumnoCard alumno={alumno} key={alumno.id} />);
    }

    return (
        <div>

<br/>
<br/>
<br/>
<br/>
<br/>
        <h1 className="text-5xl font-bold text-center">ALUMNOS REGISTRADOS</h1>
        <div className="grid grid-cols-3 gap-2">{renderMain()}</div>

        <br/>
<br/>
<br/>
<br/>
<br/><br/>
<br/>
<br/>
<br/>
<br/>
<br/>
        </div>
    );
}

export default AlumnoPage;