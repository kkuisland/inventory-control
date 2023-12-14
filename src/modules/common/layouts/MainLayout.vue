<script setup lang="ts">
	import { ref } from 'vue'
	import EssentialLink, { EssentialLinkProps } from 'src/modules/common/components/EssentialLink.vue'

	const essentialLinks: EssentialLinkProps[] = [
		{
			title: '대시보드',
			caption: '재고현황 확인',
			icon: 'school',
			// link: 'https://quasar.dev',
			link: '/inventory',
		},
		{
			title: '입고',
			caption: '재고 입고 기록',
			icon: 'code',
			link: '/inventory/input',
			// link: 'https://github.com/quasarframework',
		},
		{
			title: '출고',
			caption: '재고 출고 기록',
			icon: 'chat',
			link: 'https://chat.quasar.dev',
		},
		{
			title: 'A/S',
			caption: 'AS 기록',
			icon: 'record_voice_over',
			link: 'https://forum.quasar.dev',
		},
		{
			title: 'Twitter',
			caption: '@quasarframework',
			icon: 'rss_feed',
			link: 'https://twitter.quasar.dev',
		},
		{
			title: 'Facebook',
			caption: '@QuasarFramework',
			icon: 'public',
			link: 'https://facebook.quasar.dev',
		},
		{
			title: 'Quasar Awesome',
			caption: 'Community Quasar projects',
			icon: 'favorite',
			link: 'https://awesome.quasar.dev',
		},
	]

	const leftDrawerOpen = ref(false)

	function toggleLeftDrawer() {
		leftDrawerOpen.value = !leftDrawerOpen.value
	}
</script>

<template>
	<q-layout view="lHh Lpr lFf" class="bg-grey-1">
		<q-header elevated class="bg-grey-3 text-grey-9">
			<q-toolbar>
				<q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

				<q-toolbar-title>재고관리</q-toolbar-title>

				<div>버전 v{{ $q.version }}</div>
			</q-toolbar>
		</q-header>

		<q-drawer v-model="leftDrawerOpen" show-if-above bordered>
			<q-list>
				<q-item-label header> Essential Links</q-item-label>

				<EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
			</q-list>
		</q-drawer>

		<q-page-container>
			<router-view />
		</q-page-container>
	</q-layout>
</template>
