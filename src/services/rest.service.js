import axiosService from "src/services/axios.service";

const apiVersion = "v1"

const getTasks = async () => {
    return axiosService.GET(`/api/${apiVersion}/task`)
        .then(r => r.data)
}

const createTask = async (task) => {
    return axiosService.POST(`/api/${apiVersion}/task`, task)
        .then(r => r.data)
}

const updateTask = async (task) => {
    return axiosService.PUT(`/api/${apiVersion}/task`, task)
        .then(r => r.data)
}

const deleteTasks = async (tasks) => {
    return axiosService.DELETE(`/api/${apiVersion}/task`, tasks)
        .then(r => r.data)
}

export default {
    getTasks,
    createTask,
    updateTask,
    deleteTasks
}
