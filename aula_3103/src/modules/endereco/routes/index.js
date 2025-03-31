const express = require('express')
const EnderecoController = require ("../controllers/index")

const router = express.Router()

//Buscar todos endereços http://localhost:3000/endereco
router.get("/endereco", EnderecoController.listarEnderecos)

//Buscar endereço pelo CEP http://localhost:3000/endereco/59054500
router.get("/endereco/cep/:cep", EnderecoController.listarEnderecoCep)

//Buscar endereço pela Cidade http://localhost:3000/endereco/cidade/natal
router.get("/endereco/cidade/:cidade", EnderecoController.listarEnderecoCidade)

//Buscar endereço pela matrícula http://localhost:3000/endereco/aluno/a1234
router.get("/endereco/:matricula",EnderecoController.listarEnderecoAluno)

//Criar endereço aluno http://localhost:3000/endereco
router.post("/endereco", EnderecoController.criarEnderecoAluno)

//Editar endereço aluno http://localhost:3000/endereco/a1234
router.put("/endereco/aluno/:matricula", EnderecoController.editarEnderecoAluno)

module.exports = router