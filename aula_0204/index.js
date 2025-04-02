// Importando com (ESM)
const express = require('express')
const dotenv = require('dotenv')
const alunoRoutes = require('./src/modules/aluno/routes/index')
const routerEndereco = require('./src/modules/endereco/routes/index')
dotenv.config();

const port = process.env.PORTA;
const app = express();

//Aplicação use express com json
app.use(express.json());

// /aluno/matricula
// /alunos

app.use(alunoRoutes)

app.use(routerEndereco)

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});