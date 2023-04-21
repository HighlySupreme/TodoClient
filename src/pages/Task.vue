<template>
    <q-page>

        <q-table :rows="tasks"
                 :columns="fields"
                 row-key="id"
                 :loading="loading">

        </q-table>


    </q-page>
</template>

<script>

import {reactive} from "vue";
import restService from "src/services/rest.service";

const fields = [
    { name: "task", label: "task", align: "left", field: "task", sortable: true },
    { name: "date", label: "date", align: "left", field: "date", sortable: true },
    { name: "person", label: "person", align: "left", field: "person", sortable: true },
    { name: "description", label: "description", align: "left", field: "description", sortable: true }
];
export default {
    name: "Task",

    setup() {

        const tasks = reactive([])

        getTasks()

        function getTasks() {
            restService.getTasks()
                .then(t => Object.assign(tasks, t))
        }

        return {
            tasks,
            fields
        }

    }

}
</script>

<style scoped>

</style>
