import React, { useState, useEffect } from "react";
import axios from 'axios';

function ListarAlunos() {
    const [alunos, setAlunos] = useState([]);

    async function listarAlunos() {
        try {
            const response = await axios.get('http://localhost:3000/aluno');
            if (response) {
                setAlunos(response.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        listarAlunos();
    }, []);




    return (
        <div>
            <h1>Listagem de Alunos</h1>
            <ul>
                {
                    alunos.map((aluno) => (
                        <li key={aluno.matricula}>
                            {aluno.nome} - {aluno.email} - Matrícula: {aluno.matricula}
                        </li>
                    ))
                }
            </ul>

        </div>

    );

}

export default ListarAlunos;