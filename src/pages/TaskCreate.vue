<template>
    <q-page>
        <t-navigation-bar title="Task Create"></t-navigation-bar>

        <q-card class="q-pa-md">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <t-input-row label="Title" v-model="task.title"/>
                    <t-input-row label="Author" v-model="task.person"/>
                    <t-input-row label="Description" v-model="task.description"/>
                </div>
            </div>
        </q-card>

    </q-page>
</template>

<script>
import {reactive} from "vue";

export default {
    name: "TaskCreate",
    setup() {
        const task = reactive({
            title: "",
            person: "",
            description: ""
        })

        return {
            task
        }

    }

}
</script>

<style scoped>



</style>
