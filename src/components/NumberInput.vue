<template>
	<div class="input__wrapper">
		<label>{{ labelText }}: </label>
		<input
			@focusin="showDots"
			@focusout="hideDots"
			placeholder="Napisz tu cokolwiek błagam"
			type="number"
			:value="inputs[storeKey]"
			@input="updateInputValue"
		/>
		<transition name="slide-fade">
			<div v-if="state.dotsVisible" class="dot-flashing"></div>
		</transition>
	</div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { mapState, useStore } from "vuex";

export default {
	props: {
		labelText: {
			required: true,
			type: String,
		},
		storeKey: {
			required: true,
			type: String,
		},
	},
	setup(props) {
		// Pobieram dane z globalnego stanu aplikacji
		const store = useStore();

		// Tworze reaktywną wartość dotsVisible która będzie kontrolować status "kropek" wyświetlających się po prawej stronie inputa
		const state = reactive({
			dotsVisible: false,
		});

		// Funkcje modyfikujące stan dotsVisble
		const showDots = () => {
			state.dotsVisible = true;
		};
		const hideDots = () => {
			state.dotsVisible = false;
		};

		// Funkcja której zadaniem jest uaktualnienie wartości odpowiedniego inputa w stanie globalnym
		const updateInputValue = (e) => {
			store.commit("updateInputValue", {
				key: props.storeKey,
				value: e.target.value,
			});
		};

		return {
			state,
			showDots,
			hideDots,
			updateInputValue,
		};
	},
	// Pobieram dane ze stanu globalnego i mapuje je aby były dostępne w komponencie
	computed: mapState({
		inputs: (state) => state.inputs,
	}),
};
</script>

<style lang="scss" scoped>
@use "sass:color";
$rounded: 0.25rem;
$base_color: #264653;
.input__wrapper {
	position: relative;
	margin-top: 0.75rem;
	margin-bottom: 0.75rem;
	display: flex;
	flex-direction: column;

	label {
		font-size: 90%;
	}

	input {
		margin-top: 0.5rem;
		padding: 1rem;
		border: 0.05rem solid color.adjust($base_color, $lightness: +60%);
		border-radius: $rounded;
		transition: border 0.25s ease;

		&:focus {
			outline: none;
			border: 0.05rem solid #560bad;
		}
	}
	.dot-flashing {
		position: absolute;
		right: 2rem;
		bottom: 1.25rem;
		transition: all 0.25s ease;
	}
}

.slide-fade-enter-active {
	transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
	transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateX(20px);
	opacity: 0;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

/* Firefox */
input[type="number"] {
	-moz-appearance: textfield;
}
</style>
