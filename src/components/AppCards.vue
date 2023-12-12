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
        <div class="row p-5 image1">
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
        <div class="row image2 d-flex justify-content-between">
            <div class="col-6">
                <div class="wrapperImage1">
                    <div class="col-12 d-flex align-items-center">
                        <div class="col-6">
                            <h2>We Start Baking</h2>
                        </div>
                        <div class="col-6 d-flex align-items-center justify-content-end">
                            <h1>02</h1>
                        </div>
                    </div>
                    <div class="spacer col-12">

                    </div>
                    <div class="col-12 d-flex align-items-start flex-column">
                        <div class="leftText">
                            <h6>MANUAL INGREDIENTS SELECTION</h6>
                            <p>Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl varius. Ut eu laoreet ex.
                                Aliquam
                                erat volutpat. Nullam quis sagittis nibh. Morbi consectetur ultricies ante ac congue. Donec
                                lorem
                                erat,
                                finibus in velit placerat, rutrum augue.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="col-12 no-image d-flex align-items-center justify-content-between flex-column">

                    <h6>DONT JUST TAKE OUR WORLD FOR IT</h6>

                    <p>
                        “Finally found an alternative to the mass produced products. Something that incorporates real
                        organic ingredients, nutrient dense wellness while promoting sustainability and activity.”
                    </p>

                    <h6>
                        Rachel Cooper, Founder
                    </h6>
                </div>
            </div>
        </div>
        <div class="row p-5 image3">
            <div class="col-12 d-flex align-items-center">
                <div class="col-6">
                    <h2>Delivered to your home</h2>
                </div>
                <div class="col-6 d-flex align-items-center justify-content-end">
                    <h1>03</h1>
                </div>
            </div>
            <div class="spacer col-12">

            </div>
            <div class="col-12 d-flex align-items-start flex-column">
                <div class="leftText">
                    <h6>BAKED TO ORDER & GIFT WRAPPE</h6>
                    <p>Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl varius. Ut eu laoreet ex. Aliquam
                        erat volutpat. Nullam quis sagittis nibh. Morbi consectetur ultricies ante ac congue. Donec lorem
                        erat,
                        finibus in velit placerat, rutrum augue.</p>
                </div>
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

.wrapperImage1 {
    height: 100%;
}

.row.image1 {
    background-image:
        linear-gradient(to bottom, rgba(240, 156, 82, 0.464), rgba(164, 79, 188, 0.705)),
        url(../assets/bakery-process-1.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}

.row.image2 {

    .col-6 {
        .wrapperImage1 {
            padding: 50px;
            background-image:

                url(../assets/bakery-process-2.jpg);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: right;
            filter: opacity(80%) grayscale(10%);
            ;
        }
    }
}

.row.image3 {
    background-image:
        linear-gradient(to bottom, rgba(82, 177, 240, 0.464), rgba(164, 79, 188, 0.705)),
        url(../assets/bakery-process-3.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.row {


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

.bg-lilla {
    background-color: #F6F0F2;
}

.no-image {
    padding: 5rem;

    h6 {
        color: $fontColorViolet;
    }

    p {
        color: $fontColorViolet;
        font-size: 48px;
        font-family: "Source Serif 4";
        font-weight: 700;
    }
}

.spacer {
    height: 50%;
}

.leftText {
    width: 25em;
    color: white;

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