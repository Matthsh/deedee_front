import apiZiggy from "./ApiZiggy"

export default {
    async getIEs() {
        return apiZiggy.get('/ie')
            .then((response) => {
                return response.data.productId
            })
            .catch(err => console.log(err));
    },
    async getCampus() {
        return await apiZiggy.get('/campus')
            .then((response) => {
                return response.data.productId
            })
            .catch((err) => console.log(err))
    },
    getPrograms() {
        return apiZiggy.get('/programs')
    },
    postProfessor(object){
        apiZiggy.post('/contato_docente/add', object)
    },
    async getProfessors() {
        return await apiZiggy.get('/contato_docente')
            .then((response) => {
                return response.data.productId
            })
            .catch((err) => console.log(err))
    },

    getProfessor(id) {
        return apiZiggy.get('/contato_docente/' + id)
    },
    getResume(id) {
        return apiZiggy.get('/professors/curriculo/' + id)
    }

}

