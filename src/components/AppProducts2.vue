<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "AppProducts",
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation],
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
    <div class="products d-flex align-items-center">
        <div class="col-3">
            <div class="product-text text-center d-flex align-items-center justify-content-center flex-column">

                <h2>Find a freshly baked product perfect for you</h2>
                <h6>Integer a nibh vitae ex porttitor rutrum et ut velit. Etiam ac felis at leo feugiat placerat. Sed ac
                    nulla id orci tempor convallis sed.</h6>
            </div>
            <div class="product-button text-center d-flex align-items-center justify-content-center flex-column mt-4">
                <button class="btn">Shop All Products</button>
            </div>
        </div>
        <div class="col-9">
            <div class="product-carousel">
                <swiper :navigation="true" :modules="modules" class="mySwiper" :loop="true">
                    <swiper-slide>
                        <div class="image">
                            <img src="../assets/choco-chip-cookies.jpg" alt="">
                            <h5>Choco Chip Cookies</h5>
                            <h6>$18.00 - $32.00</h6>
                        </div>
                        <div class="image">
                            <img src="../assets/strawberry-jam-cookies.jpg" alt="">
                            <h5>Strawberry Jam Cookies</h5>
                            <h6>$18.00 - $32.00</h6>
                        </div>
                        <div class="image">
                            <img src="../assets/strawberry-donut.jpg" alt="">
                            <h5>Strawberry Donut</h5>
                            <h6>$18.00 - $32.00</h6>
                        </div>
                        <div class="image">
                            <img src="../assets/perfect-macarons.jpg" alt="">
                            <h5>Perfect Macarons</h5>
                            <h6>$18.00 - $32.00</h6>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="image">
                            <img src="../assets/premium-bread.jpg" alt="">
                            <h5>Premium Bread</h5>
                            <h6>$18.00 - $32.00</h6>
                        </div>
                        <div class="image">
                            <img src="../assets/cherry-cake.jpg" alt="">
                            <h5>Cake with Cherry Topping</h5>
                            <h6>$18.00 - $32.00</h6>
                        </div>
                        <div class="image">
                            <img src="../assets/cookies-with-ice-cream.jpg" alt="">
                            <h5>Cookies with ice cream</h5>
                            <h6>$18.00 - $32.00</h6>
                        </div>
                        <div class="image">
                            <img src="../assets/blackberry-stuffed-bread.jpg" alt="">
                            <h5>Blackberry Stuffed Bread</h5>
                            <h6>$18.00 - $32.00</h6>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
@use '../styles/partials/variables' as *;

.products {
    padding: 0 10em;
    height: 100vh;
}

.product-text {
    color: $fontColorViolet;

    h6 {
        font-size: 16px;
        font-family: 'Work Sans';
        font-weight: 300;
    }

    h2 {
        font-size: 35px;
        font-weight: 700;
        font-family: 'Source Serif 4';
    }
}

.product-button {
    .btn {
        color: white;
        background-color: $fontColorViolet;
        font-size: 14px;
        font-weight: 300;
    }
}

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;

    .image {
        padding: 10px;

        h5 {
            font-size: 24px;
            font-family: 'Source Serif 4';
            font-weight: 700;
            color: $fontColorViolet;
            margin-top: 2rem;
        }

        h6 {
            font-family: 'Work Sans';
            font-weight: 400;
            font-size: 12px;
            color: $fontColorViolet;
            margin-top: 1rem;
        }
    }

}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>