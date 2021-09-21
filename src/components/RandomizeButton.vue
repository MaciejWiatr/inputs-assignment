<template>
	<button
		@click="randomizeInputs"
		v-on:mouseover="setHovered"
		v-on:mouseleave="setUnhovered"
		class="randomize__button"
	>
		<span class="button__label">Wylosuj liczby za mnie</span>
		<transition name="slide-fade">
			<div v-if="state.hovered" class="button__arrow">
				<arrow-right />
			</div>
		</transition>
	</button>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { useStore } from "vuex";
import ArrowRight from "./ArrowRight.vue";

export default {
	components: { ArrowRight },
	setup() {
		// Uzyskuję dostęp do stanu aplikacji
		const store = useStore();
		// Tworze reaktywną zmienną hovered
		const state = reactive({
			hovered: false,
		});

		// Tworze zmienne modyfikujące reaktywny stan hovered
		const setHovered = () => {
			state.hovered = true;
		};

		const setUnhovered = () => {
			state.hovered = false;
		};

		// Tworzę funkcje której zadaniem jest wywołanie funkcji mieszającej liczby w inputach
		const randomizeInputs = () => {
			store.commit("randomize");
		};

		return {
			state,
			setHovered,
			setUnhovered,
			randomizeInputs,
		};
	},
};
</script>

<style lang="scss" scoped>
@use "sass:color";
$rounded: 0.25rem;
$base_color: #264653;
.randomize__button {
	position: relative;
	margin-top: 2rem;
	background-color: color.adjust($base_color, $lightness: -90%);
	color: #f7fafc;
	padding: 1rem;
	border-radius: $rounded;
	border: none;
	cursor: pointer;

	span {
		position: relative;
		z-index: 2;
	}
	.button__arrow {
		position: absolute;
		color: white;
		right: -9px;
		top: 13.5px;
		z-index: 99;
	}

	&::after {
		content: "";
		position: absolute;
		background-color: color.adjust($base_color, $lightness: -90%);
		height: 47px;
		width: 47px;
		border-radius: $rounded;
		right: 0;
		top: 0;
		z-index: 1;
		transition: transform 0.25s ease;
	}

	&:hover::after {
		transform: translateX(20px);
	}
}

.slide-fade-enter-active {
	transition: all 0.25s ease;
}

.slide-fade-leave-active {
	transition: all 0.25s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateX(25px);
	opacity: 0;
}
</style>
