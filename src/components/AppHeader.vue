<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "AppHeader",
    data() {
        return {
            store
        }
    },
    methods: {

    },
    mounted() {
        register(this); //per debuggare il componente da console

    }
}
</script>

<template>
    <div>
        <div class="row">
            <div class="col-3">
                <img src="../assets/" alt="">
            </div>
            <div class="col-6">
                NavMenu
            </div>
            <div class="col-3">
                Profile
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di AppComponent
</style>