<script>
export default {
	props: {
		list: {
			require: false
		},
		name: {
			require: false
		},
		title: {
			required: false
		},
		id: {
			required: false
		},
		type: {
			default: "text"
		},
		value: {
			required: false
		},
		placeholder: {
			required: false
		}
	}
}
</script>

<template>
	<input class="form-control" :list="list" :type="type" :name="name" :id="id" :title="title" :value="value" :placeholder="placeholder">
</template>

<style lang="scss" scoped>
</style>