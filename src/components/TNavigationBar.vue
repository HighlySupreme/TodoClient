<template>
    <div className="k-navigation-bar">
        <div className="title">{{ title }}</div>
        <q-breadcrumbs className="" active-color="blue">
            <q-breadcrumbs-el v-for="(breadcrumb, index) in breadcrumb" :key="index" :label="breadcrumb.labelKey"
                              :to="breadcrumb.to"/>
        </q-breadcrumbs>
    </div>
</template>

<script>
import {defineComponent} from 'vue'
import {useRoute} from "vue-router";

export default defineComponent({
    name: 'TNavigationBar',
    props: {
        title: {
            type: String,
            required: true
        },

        caption: {
            type: String,
            default: ''
        },

        link: {
            type: String,
            default: '#'
        },

        icon: {
            type: String,
            default: ''
        }
    },
    setup() {
        const route = useRoute()
        const breadcrumb = route.meta.breadcrumb ? route.meta.breadcrumb : []

        return {
            breadcrumb
        }
    }
})
</script>

<style lang="scss">
.k-navigation-bar {
    display: flex;
    justify-content: space-between;
    padding: 16px 0;
}

.k-navigation-bar > .title {
    font-size: 22px;
    font-weight: 500;
    color: #424242FF;
}

.k-navigation-bar > .q-breadcrumbs {
    margin: auto 0;
}
</style>
