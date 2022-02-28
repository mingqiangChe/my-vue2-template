<template>
	<div class="color">{{ text }}</div>
</template>

<script>
export default {
	data() {
		return {
			text: 'vue项目成功运行了'
		}
	}
}
</script>

<style scoped>
.color {
	color: red;
}
</style>
