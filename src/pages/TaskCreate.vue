<template>
    <q-page>
        <t-navigation-bar :title="title"></t-navigation-bar>

        <q-card class="q-pa-md">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <t-input-row label="Title" v-model="task.title"/>
                    <t-input-row label="Author" v-model="task.person"/>
                    <t-input-row label="Description" v-model="task.description"/>
                </div>
            </div>

            <q-card-actions align="center">
                <q-btn label="Cancel" stack no-caps class="k-button" @click="cancelTask"/>
                <q-btn :label="isTaskEdit ? 'Save task' : 'Create task'" color="blue" stack no-caps class="k-button" @click="saveTask"/>
            </q-card-actions>
        </q-card>

    </q-page>
</template>

<script>
import {reactive} from "vue";
import restService from "src/services/rest.service";
import {useRouter} from "vue-router";

export default {
    name: "TaskCreate",
    setup() {
        const router = useRouter()

        const taskId = router.currentRoute.value.params.taskId
        const title = router.currentRoute.value.meta.title
        const isTaskEdit = router.currentRoute.value.name === "TaskEdit"

        const task = reactive({
            title: "",
            person: "",
            description: ""
        })

        function cancelTask() {
            router.go(-1)
        }

        function saveTask() {
            let promise;
            if (isTaskEdit) {
                promise = restService.updateTask(taskId, task)
            } else {
                promise = restService.createTask(task)
            }

            promise
                .then(() => router.back())
                .catch(() => {})
        }

        return {
            cancelTask,
            saveTask,
            task,
            title,
            isTaskEdit
        }

    }

}
</script>

<style scoped>



</style>
