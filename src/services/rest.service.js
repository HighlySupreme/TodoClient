import axiosService from "src/services/axios.service";

const apiVersion = "v1"

const getTasks = async () => {
    return axiosService.GET(`/api/${apiVersion}/task`)
        .then(r => r.data)
}
const deleteTasks = async (tasks) => {
    return axiosService.DELETE(`/api/${apiVersion}/task/delete`, tasks)
        .then(r => r.data)
}

export default {
    getTasks,
    deleteTasks
}
