<template>
    <div class="k-input-row">
        <div class="row">
            <div class="col col-2 k-label">{{ label }}</div>
            <div class="col col-10 k-input">
                <q-input
                         dense :type="isNumberInput ? 'number' : ''"
                         :model-value="modelValue"
                         @update:modelValue="event => $emit('update:modelValue', event)">
                </q-input>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, defineComponent } from "vue";

export default defineComponent({
    props: ['label', 'modelValue', 'type',],
    emits: ['update:modelValue'],
    setup(props) {
        const isNumberInput = computed(() => props.type == 'number')

        return {
            isNumberInput,
        }
    }
});
</script>

<style lang="scss">
.k-input-row .k-label {
    text-align: left;
    margin: auto 0;
    font-weight: 500;
    padding: 0 16px;
}
.k-input-row {
    padding: 4px;
}
</style>
