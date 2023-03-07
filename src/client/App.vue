<script setup lang="ts"></script>

<template>
    <div class="container">
        <div class="main">
            <CrudEl></CrudEl>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container {
    width: calc(100vw - 20px);
    height: calc(100vh - 20px);
    background-color: #f5f6f7;
    padding: 10px;
    .main {
        padding: 20px;
        background-color: #fff;
        border-radius: 20px;
    }
}
</style>
