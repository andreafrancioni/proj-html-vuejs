<script>
import AppHeader from "./components/AppHeader.vue"
import AppHero from "./components/AppHero.vue"
import AppFooter from "./components/AppFooter.vue"
import AppProducts from "./components/AppProducts.vue";
import AppProducts2 from "./components/AppProducts2.vue";
import AppWeddingSection from "./components/AppWeddingSection.vue";
import AppCards from "./components/AppCards.vue";
import AppLocation from "./components/AppLocation.vue";
import AppSocialCards from "./components/AppSocialCards.vue";
import AppShopNow from "./components/AppShopNow.vue";

import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management

export default {
	components: {
		AppHeader,
		AppHero,
		AppFooter,
		AppProducts,
		AppWeddingSection,
		AppProducts2,
		AppCards,
		AppLocation,
		AppSocialCards,
		AppShopNow,
	},
	data() {
		return {
			store,
			headerBackgroundColor: 'transparent', // Colore di sfondo iniziale dell'header
			bannerDisplay: 'flex',
			scrollThreshold: 50, // Altezza di scroll per cambiare il colore
		}
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll);
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.handleScroll);
	},
	methods: {
		handleScroll() {
			// Verifica l'altezza dello scroll rispetto al threshold
			if (window.scrollY > this.scrollThreshold) {
				this.headerBackgroundColor = 'white'; // Cambia il colore dell'header
				this.bannerDisplay = 'none';
			} else {
				this.bannerDisplay = 'flex';
				this.headerBackgroundColor = 'transparent'; // Ripristina il colore di sfondo iniziale
			}
		},
	}
}
</script>

<template>
	<header>
		<section class="pb-96">
			<AppHeader :backgroundColor="headerBackgroundColor" :bannerDisplay="bannerDisplay" />
		</section>
	</header>
	<main>
		<AppHero />
		<AppProducts />
		<AppWeddingSection />
		<AppProducts2 />
		<AppCards />
		<AppLocation />
		<AppSocialCards />
		<AppShopNow />
	</main>
	<footer>
		<AppFooter />
	</footer>
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use './styles/general.scss';
</style>

<style scoped lang="scss">
// importo variabili
@use './styles/partials/variables' as *;


.pb-96 {
	padding-bottom: 96px;
}
</style>