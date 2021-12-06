const AlunoModel = require('../models/AlunoModel');

let alunos = [
    {_id:1,nome:"jaime",curso:"si",ira:7},
    {_id:2,nome:"jefferson",curso:"es",ira:11},
    {_id:3,nome:"Ronaldo",curso:"cc",ira:9}
];
let _id = 4;

class AlunoService{

    static register (data){
        let aluno = new AlunoModel(
            _id++,
            data.nome,
            data.curso,
            data.ira
        )
        alunos.push(aluno);
        return aluno;
    }

    static list(){
        return alunos;
    }

    static update(_id,data){
        for (let e of alunos) {
            if (e._id == _id) {
                e.nome = data.nome
                e.curso = data.curso
                e.ira = data.ira
                return e
            }
        }
        return null;
    }

    static delete(_id){
        for (let i = 0; i < alunos.length; i++) {
            if (alunos[i]._id == _id) {
                alunos.splice(i,1);
                return true;
            }
        }
        return false;
    }

    static retrieve(_id){
        for (let i = 0; i < alunos.length; i++) {
            if (alunos[i]._id == _id) {
                return alunos[i];
            }
        }
        return {};
    }
}

module.exports = AlunoService;