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
		placeholder: {
			required: false
		}
	}
}
</script>

<template>
	<textarea class="form-control" :list="list" :type="type" :name="name" :id="id" :title="title" :placeholder="placeholder"></textarea>
</template>

<style lang="scss" scoped>
textarea {
  width: 100%;
  height: 100px;
}
</style>