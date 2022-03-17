<script>
export default {
	props: {
		style: {
			type: String,
			default: 'primary'
		},
		type: {
			type: String,
			default: 'link'
		},
		href: {
			type: String,
			default: '#'
		},
		dataBsToggle: {
			type: String,
			default: ""
		},
		dataBsTarget: {
			type: String,
			default: ""
		},
		dataBsDismiss: {
			type: String,
			default: ""
		}
	}
}
</script>

<template>
<RouterLink v-if="type == 'router'" :to="href" :class="'btn btn-' + style" :data-bs-toggle="dataBsToggle" :data-bs-target="dataBsTarget" :data-bs-dismiss="dataBsDismiss">
  <slot></slot>
</RouterLink>

<a v-else :class="'btn btn-' + style" :data-bs-toggle="dataBsToggle" :data-bs-dismiss="dataBsDismiss" :data-bs-target="dataBsTarget">
  <slot></slot>
</a>
</template>

<style lang="scss" scoped>
.btn {
  font-family: "Libre Franklin", Sans-serif;
  font-size: 19px;
  font-weight: 700;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 3px 0px 16px 0px rgb(0 0 0 / 17%);
}

.btn-primary {
  fill: #FFFFFF;
  color: #FFFFFF;
  background-color: #25A7C3 !important;
}

.btn-primary:hover {
	background-color: #00449F !important;
}
</style>