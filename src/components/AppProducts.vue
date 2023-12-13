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
        <div class="col-4">
            <div class="product-text">

                <h6>OUR PRODUCTS</h6>
                <h2>All our delectable pastries are backed fresh in our Kitchen very morning, and are made with all-natural,
                    all organic ingredients.</h2>
            </div>
            <div class="product-button">
                <button class="btn">Explore our products</button>
            </div>
        </div>
        <div class="col-8">
            <div class="product-carousel">
                <swiper :navigation="true" :modules="modules" class="mySwiper" :loop="true">
                    <swiper-slide>
                        <div class="productCard">
                            <div class="image">
                                <img src="../assets/choco-chip-cookies.jpg" alt="">
                            </div>
                            <div class="text d-flex flex-column align-items-center justify-content-center">
                                <h5>Choco Chip Cookies</h5>
                                <h6>Cookies, Pastries</h6>
                                <h3>$18.00 - $32.00</h3>
                            </div>
                        </div>
                        <div class="productCard">
                            <div class="image">
                                <img src="../assets/strawberry-jam-cookies.jpg" alt="">
                            </div>
                            <div class="text d-flex flex-column align-items-center justify-content-center">
                                <h5>Strawberry Jam Cookies</h5>
                                <h6>Cookies, Pastries</h6>
                                <h3>$18.00 - $32.00</h3>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="productCard">
                            <div class="image">
                                <img src="../assets/cookies-with-ice-cream.jpg" alt="">
                            </div>
                            <div class="text d-flex flex-column align-items-center justify-content-center">
                                <h5>Cookies with Ice Cream</h5>
                                <h6>Cookies, Pastries</h6>
                                <h3>$18.00 - $32.00</h3>
                            </div>
                        </div>
                        <div class="productCard">
                            <div class="image">
                                <img src="../assets/home-bread.jpg" alt="">
                            </div>
                            <div class="text d-flex flex-column align-items-center justify-content-center">
                                <h5>Homemade Bread</h5>
                                <h6>Cookies, Pastries</h6>
                                <h3>$18.00 - $32.00</h3>
                            </div>
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
    padding: 10em;
    height: 100vh;
}

.product-text {
    color: $fontColorViolet;

    h6 {
        font-size: 12px;
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

.image {
    position: relative;

    img {
        padding: 10px;
    }

}


.productCard:hover .text {
    opacity: 1;
}

.text {
    width: 50%;
    padding: 10px;
    transition: opacity 1s;
    opacity: 0;
    position: absolute;
    top: 0;
    height: 100%;
    background-color: #56328b6f;

    h3 {
        font-family: 'Work Sans';
        color: white;
    }

    h5 {
        font-size: 24px;
        font-family: 'Source Serif 4';
        font-weight: 700;
        color: white;
        margin-top: 2rem;
    }

    h6 {
        font-family: 'Work Sans';
        font-weight: 400;
        font-size: 12px;
        color: white;
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

}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>