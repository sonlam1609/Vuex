<template>
	<div>Student Details</div>
</template>

<script>
export default {
	props: {
		id: String,
	},
	mounted() {
		console.log(this.id)
	},
}
</script>

<style lang="scss" scoped>
</style>