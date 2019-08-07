<template>
    <div id="app">
        <Morgue/>
    </div>
</template>

<script>
    import Morgue from "./views/Morgue.vue"

    export default {
        name: "App",

        components: {
            Morgue
        }
    };
</script>

<style lang="scss">
body {
    margin: 0;
}

#app {
    font-family: 'Courier Prime Code', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

    max-width: 600px;
    margin: auto;
}

.keyword {
    font-weight: bold;
}
</style>
