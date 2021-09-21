import { createStore } from "vuex";

const store = createStore({
	// Definiuje globalny stan mojej aplikacji
	state() {
		return {
			inputs: {
				firstInput: 0,
				secondInput: 0,
				thirdInput: 0,
			},
		};
	},
	// Definiuje funkcje które będą zmieniały globalny stan aplikacji
	mutations: {
		// Funkcja losująca wartości inputów
		randomize(state) {
			const inputs = { ...state.inputs };
			for (let input in state.inputs) {
				inputs[input] = Math.floor(Math.random() * 100);
			}
			state.inputs = inputs;
		},
		// Funkcja aktualizująca wartość inputa
		updateInputValue(state, { key, value }) {
			state.inputs[key] = parseInt(value) || 0;
		},
	},
	// Gettery umożliwiające mi tworzenie zmiennych na podstawie wartości znajdujących się w globalnym stanie aplikacji
	getters: {
		avg(state) {
			const inputValues = Object.values(state.inputs);
			const sum = inputValues.reduce((sum, input) => sum + input);
			const average = sum / inputValues.length;
			return average.toFixed(2);
		},
		max(state) {
			const inputValues = Object.values(state.inputs);
			return Math.max(...inputValues);
		},
		min(state) {
			const inputValues = Object.values(state.inputs);
			return Math.min(...inputValues);
		},
	},
});

export default store;
