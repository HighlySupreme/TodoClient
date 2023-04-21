<template>
    <q-layout>
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>

</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
    name: 'MainLayout',
    setup() {

    }
});

</script>

<style>
.q-page-container {
    padding: 10px;
    max-width: 90%;
    margin: 0 auto;
}
</style>
