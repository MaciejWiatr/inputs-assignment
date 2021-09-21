<template>
	<main class="main__container">
		<inputs-container />
		<results-container />
	</main>
</template>

<script>
import "three-dots/dist/three-dots.css";
import InputsContainer from "./components/InputsContainer.vue";
import ResultsContainer from "./components/ResultsContainer.vue";
export default {
	name: "App",
	components: { InputsContainer, ResultsContainer },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap");
body {
	height: 100vh;
	padding: 0;
	margin: 0;
}
#app {
	font-family: "Poppins", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	height: 100%;
}
.main__container {
	height: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
}

@media (max-width: 800px) {
	.main__container {
		grid-template-columns: 1fr;
		grid-template-rows: auto auto;
	}
}
</style>
