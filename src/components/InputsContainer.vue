<template>
	<div class="inputs__container">
		<div class="input-group__wrapper">
			<h2><span class="header-decorator"> > </span> Wprowadź dane</h2>
			<number-input
				:storeKey="'firstInput'"
				:labelText="'Pierwsza liczba'"
			/>
			<number-input
				:storeKey="'secondInput'"
				:labelText="'Druga liczba'"
			/>
			<number-input
				:storeKey="'thirdInput'"
				:labelText="'Trzecia liczba'"
			/>
			<randomize-button />
		</div>
		<img class="inputs__image" src="~@/assets/inputs-bg.jpg" />
	</div>
</template>

<script>
import RandomizeButton from "./RandomizeButton.vue";
import NumberInput from "./NumberInput.vue";
export default {
	components: { RandomizeButton, NumberInput },
};
</script>

<style lang="scss" scoped>
@use "sass:color";
$rounded: 0.25rem;
$base_color: #264653;

.inputs__container {
	position: relative;
	box-sizing: border-box;
	height: 100%;
	width: 100%;
	background-color: #f7fafc;
	text-align: left;
	padding: 4rem 5rem;
	color: #264653;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	overflow: hidden;
	h2 {
		font-weight: 600;
		font-size: 250%;
		color: color.adjust($base_color, $lightness: -80%);
	}
	@media (max-width: 800px) {
		padding: 2rem 5rem;
	}
}

.inputs__image {
	background-image: url("~@/assets/inputs-bg.jpg");
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0.05;
	height: 100%;
	z-index: 1;
}

.input-group__wrapper {
	position: relative;
	z-index: 2;
	width: 100%;
	max-width: 500px;

	.header-decorator {
		color: #560bad;
	}
}
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

		&:focus {
			outline: none;
		}
	}
	.dot-flashing {
		position: absolute;
		right: 2rem;
		bottom: 1.25rem;
	}
}
</style>
