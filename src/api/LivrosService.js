import axios from "axios";

const BASE_URL = "http://localhost:4000"

export class LivrosService{
    static getLivros(){
        return axios.get(`${BASE_URL}/obter-livros`);
    }

    static getLivro(id){
        return axios.get(`${BASE_URL}/obter-livro/${id}`);
    }

    static createLivro(body){
        return axios.post(`${BASE_URL}/criar`,body);
    }

    static updateLivro(id,body){
        return axios.put(`${BASE_URL}/editar/${id}`,body);
    }

    static deleteLivro(id){
        return axios.delete(`${BASE_URL}/deletar/${id}`);
    }
    
}