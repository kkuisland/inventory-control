<script setup lang="ts">
	import { reactive } from 'vue'

	const po = reactive({
		name: 'Sample Page',
	})
</script>
<template>
	<q-page padding>
		<div class="text-h5">
			{{ po.name }}
		</div>
	</q-page>
</template>
