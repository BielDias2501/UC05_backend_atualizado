// Importando com (ESM)
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const sequelize = require('./src/config/configDb')
// const alunoRoutes = require('./src/modules/aluno/routes/index')
// const routerEndereco = require('./src/modules/endereco/routes/index')
dotenv.config();


const port = process.env.PORTA;
const app = express();


app.use(cors());
//Aplicação use express com json
app.use(express.json());

// /aluno/matricula
// /alunos

// app.use(alunoRoutes)

// app.use(routerEndereco)

app.listen(port, async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão bem sucedida!');
      } catch (error) {
        console.error('Não foi possível se conectar!', error);
      }
    console.log(`Servidor rodando em http://localhost:${port}`);
});