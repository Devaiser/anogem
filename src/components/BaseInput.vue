<template>
    <input :placeholder="placeholder" class="input" />
</template>

<script setup lang="ts">
defineProps({
    placeholder: { type: String, required: false }
})
</script>

<style scoped>
.input {
    width: 100%;
    height: 44px;
    background: transparent;
    border-bottom: 1px solid #F3511F;
    font-weight: 300;
    color: #fff;
    font-size: 20px;
    outline: none;
}

@media(max-width: 640px) {
    .input {
        font-size: 16px;
    }
}
</style>