<template>
    <q-page>
        <t-navigation-bar title="TODO List"></t-navigation-bar>

        <q-card>
            <q-table :rows="tasks"
                     :columns="fields"
                     row-key="id"
                     selection="multiple"
                     :selected.sync="selectedTaskArray"
                     @row-click="addToSelectedList"
                     :filter="filter">


                <template v-slot:top-left>
                    <div class="flex">
                        <q-input
                            class="q-mr-sm"
                            dense outlined
                            debounce="300"
                            v-model="filter"
                            placeholder="Search"
                        >
                            <template v-slot:append>
                                <q-icon name="search" />
                            </template>
                        </q-input>

                        <q-btn label="Filter" icon="mdi-filter-outline"
                               class="k-filter-button shadow-0"></q-btn>
                    </div>
                </template>
                <template v-slot:top-right>
                    <q-btn flat round color="k-primary" icon="mdi-trash-can-outline" :disable="!isMultipleTasksSelected" @click="deleteTasks">
                        <q-tooltip :offset="[0,0]">Delete</q-tooltip>
                    </q-btn>
                    <q-btn flat round color="k-primary" icon="mdi-pencil-outline" :disable="!isSingleTaskSelected" @click="editTask()">
                        <q-tooltip :offset="[0,0]">Edit</q-tooltip>
                    </q-btn>
<!--                    <q-btn flat round color="k-primary" icon="mdi-content-copy" :disable="!isSingleTaskSelected" @click="copyTask">
                        <q-tooltip :offset="[0,0]">Copy</q-tooltip>
                    </q-btn>-->
                    <q-btn flat round color="k-primary" icon="mdi-plus" @click="createTask">
                        <q-tooltip :offset="[0,0]">Add</q-tooltip>
                    </q-btn>
                    <q-btn flat round color="k-primary" icon="mdi-refresh" @click="refreshTasks">
                        <q-tooltip :offset="[0,0]">Refresh</q-tooltip>
                    </q-btn>
                </template>

                <template v-slot:body-cell-code="props">
                    <q-td :props="props">
                        <div class="k-table-cell-click">
                            <p @click="editTask(props.row)">{{ props.row.code }}</p>
                        </div>
                    </q-td>
                </template>
                <template v-slot:body-cell-edit="props">
                    <q-td :props="props">
                        <q-btn
                            color="blue"
                            dense icon="mdi-pencil-outline" flat
                            @click="editTask(props.row)"/>
                    </q-td>
                </template>
            </q-table>
        </q-card>
    </q-page>
</template>

<script>

import {computed, reactive, ref} from "vue";
import restService from "src/services/rest.service";
import {useQuasar} from "quasar";
import {useRouter} from "vue-router";

const fields = [
    { name: "title", label: "Title", align: "left", field: "title", sortable: true },
    { name: "person", label: "Person", align: "left", field: "person", sortable: true },
    { name: "description", label: "Description", align: "left", field: "description", sortable: true },
    { name: "createdDate", label: "Created Date", align: "left", field: "createdDateStr", sortable: true },
    { name: "edit", label: "Edit", align: "left", field: "edit", sortable: true }
];
export default {
    name: "Tasks",

    setup() {
        getTasks()

        let selectedTaskArray = ref([]);
        const isSingleTaskSelected = computed(() => selectedTaskArray.value.length === 1)
        const isMultipleTasksSelected = computed(() => selectedTaskArray.value.length > 0)
        const tasks = reactive([])

        function getTasks() {
            restService.getTasks()
                .then(t => {
                    console.log(t)
                    Object.assign(tasks, t)
                })
        }

        function refreshTasks() {
            selectedTaskArray.value = [];
            getTasks();
        }

        const $q = useQuasar();

        function deleteTasks() {
            restService.deleteTasks(selectedTaskArray.value)
                .then(refreshTasks)
                .catch(err => {
                    console.error(err);
                });
        }

        function addToSelectedList(e, item) {
            if (selectedTaskArray.value.includes(item)) {
                let index = selectedTaskArray.value.indexOf(item)
                selectedTaskArray.value.splice(index, 1)
            } else {
                selectedTaskArray.value.push(item)
            }
        }

        let filter = ref("");
        //let pagination = reactive(UtilService.getPagination);

        const router = useRouter();

        function editTask(task) {
            if (!task && selectedTaskArray.value.length > 0) task = selectedTaskArray.value[0]

            router.push({
                name: "TaskEdit",
                params: { ...router.currentRoute.value.params, id: task.id }
            });
        }

        function copyTask() {

        }

        function createTask() {
            router.push({ name: "TaskCreate" });
        }


        return {
            refreshTasks,
            addToSelectedList,
            editTask,
            deleteTasks,
            copyTask,
            createTask,
            filter,
            tasks,
            fields,
            isSingleTaskSelected,
            isMultipleTasksSelected,
            selectedTaskArray

        }

    }

}
</script>

<style scoped>

</style>
