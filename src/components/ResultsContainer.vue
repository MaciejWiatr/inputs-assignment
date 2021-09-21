<template>
	<div class="results__container">
		<div class="results__wrapper">
			<h1><span class="header-decorator"> > </span>Twoje wyniki</h1>
			<div class="result__wrapper">
				<label>Średnia:</label>
				<div class="result__value">
					<transition name="slide-fade" mode="out-in">
						<div :key="avg">
							{{ avg }}
						</div>
					</transition>
				</div>
			</div>
			<div class="result__wrapper">
				<label>Największa:</label>
				<div class="result__value">
					<transition name="slide-fade" mode="out-in">
						<div :key="max">
							{{ max }}
						</div>
					</transition>
				</div>
			</div>
			<div class="result__wrapper">
				<label>Najmniejsza:</label>
				<div class="result__value">
					<transition name="slide-fade" mode="out-in">
						<div :key="min">
							{{ min }}
						</div>
					</transition>
				</div>
			</div>
		</div>
		<first-wave />
		<second-wave />
	</div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import FirstWave from "./FirstWave.vue";
import SecondWave from "./SecondWave.vue";
export default {
	components: { FirstWave, SecondWave },
	setup() {
		const store = useStore();
		return {
			avg: computed(() => store.getters.avg),
			min: computed(() => store.getters.min),
			max: computed(() => store.getters.max),
		};
	},
};
</script>

<style lang="scss" scoped>
.second-wave {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 150%;
	opacity: 0.1;
	animation: wave-animation 10s alternate-reverse infinite ease;
	transform-origin: center !important;
}
.first-wave {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 150%;
	opacity: 0.1;
	animation: wave-animation 5s alternate infinite ease;
	transform-origin: center !important;
}

@keyframes wave-animation {
	from {
		transform: translate3d(0px, 0, 0);
	}
	to {
		transform: translate3d(-300px, 0, 0);
	}
}

.results__container {
	position: relative;
	width: 100%;
	height: 100%;
	background-color: #1f2937;
	color: #f3f4f6;
	display: flex;
	padding: 4rem 5rem;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	overflow: hidden;
	@media (max-width: 800px) {
		padding: 2rem 5rem;
	}
}

h1 {
	font-weight: 600;
	font-size: 250%;
}

.header-decorator {
	color: #6366f1;
}

.results__wrapper {
	text-align: left;
	width: 100%;
	max-width: 500px;
	height: 470px;

	@media (max-width: 800px) {
		height: initial;
	}
}

.result__wrapper {
	display: flex;
	flex-direction: column;

	label {
		font-size: 90%;
		margin: 10px 0px;
	}

	.result__value {
		border: 1px solid #4b5563;
		padding: 0.75rem 1rem;
		border-radius: 0.25rem;
		overflow: hidden;
	}

	@media (max-width: 800px) {
		flex-direction: row;

		align-items: center;
		.result__value {
			margin-left: 1rem;
			border: none;
		}
	}

	&:first-of-type {
		margin-top: -7px;
	}
}

.slide-fade-enter-active {
	transition: all 0.3s ease;
}

.slide-fade-leave-active {
	transition: all 0.3s ease;
}

.slide-fade-enter-from {
	transform: translateY(30px);
}
.slide-fade-leave-to {
	transform: translateY(-30px);
	opacity: 0;
}
</style>
