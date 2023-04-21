import axiosService from "src/services/axios.service";

const apiVersion = "v1"

const getTasks = async () => {
    return axiosService.GET(`/api/${apiVersion}/tasks`)
        .then(r => r.data)
}

export default {
    getTasks
}
