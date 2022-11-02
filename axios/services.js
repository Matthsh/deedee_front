import apiZiggy from "./ApiZiggy"

export default {
    async getIEs() {
        return apiZiggy.get('/ie')
        .then((response) => {
            return response.data.productId
        })
        .catch(err => {
            console.log(err)
        });
    },
    getPrograms() {
        return apiZiggy.get('/programs')
    },
    getProfessors() {
        return apiZiggy.get('/professors')
    },
    getProfessor(id) {
        return apiZiggy.get('/professors/'+id)
    },
    getResume(id) {
        return apiZiggy.get('/professors/curriculo/'+id)
    }
}
