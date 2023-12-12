<script>
// Import Swiper Vue.js components

import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "AppCards",
    components: {

    },
    setup() {
        return {

        };
    },
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
    <div class="services">
        <div class="row image1">
            <div class="col-12 d-flex align-items-center">
                <div class="col-6">
                    <h2>Tell us what you have in mind</h2>
                </div>
                <div class="col-6 d-flex align-items-center justify-content-end">
                    <h1>01</h1>
                </div>
            </div>
            <div class="spacer col-12">

            </div>
            <div class="col-12 d-flex align-items-end flex-column">
                <div class="leftText">
                    <h6>MANUAL INGREDIENTS SELECTION</h6>
                    <p>Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl varius. Ut eu laoreet ex. Aliquam
                        erat volutpat. Nullam quis sagittis nibh. Morbi consectetur ultricies ante ac congue. Donec lorem
                        erat,
                        finibus in velit placerat, rutrum augue.</p>
                </div>
            </div>
        </div>
        <div class="row d-flex align-items-center justify-content-between">
            <div class="col-6">

            </div>
            <div class="col-6">


            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
@use '../styles/partials/variables' as *;



.services {
    padding: 0 10em;
}

.row.image1 {
    background-image:
        linear-gradient(to bottom, rgba(240, 156, 82, 0.464), rgba(164, 79, 188, 0.705)),
        url(../assets/bakery-process-1.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 100px;

    .col-6 {
        h2 {
            color: white;
            font-size: 56px;
            font-family: "Source Serif 4";
            font-weight: 700;
        }

        h1 {
            color: white;
            font-size: 96px;
            font-family: "Work Sans";
            font-weight: 300;
        }
    }
}

.spacer {
    height: 300px;
}

.leftText {
    width: 20em;
    color: white;

    h6 {
        font-size: 12px;
        font-weight: 400;
        font-family: "Work Sans";
    }

    p {
        font-size: 18px;
        font-weight: 400;
        font-family: "Work Sans";
    }
}
</style>