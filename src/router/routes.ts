import { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: () => import('src/modules/common/layouts/MainLayout.vue'),
		children: [
			{
				path: '',
				component: () => import('src/modules/common/pages/IndexPage.vue'),
			},
		],
	}, // Always leave this as last one, // but you can also remove it
	{
		path: '/sample',
		component: () => import('src/modules/common/layouts/MainLayout.vue'),
		children: [
			{
				path: '',
				component: () => import('src/modules/sample/pages/SamplePage.vue'),
			},
		],
	}, // Sample Route
	{
		path: '/inventory',
		component: () => import('src/modules/common/layouts/MainLayout.vue'),
		children: [
			{
				path: '',
				component: () => import('src/modules/inventory/pages/InventoryDashboardPage.vue'),
			},
			{
				path: 'input',
				component: () => import('src/modules/inventory/pages/InventoryInputPage.vue'),
			},
		],
	}, // Inventory Route
	{
		path: '/:catchAll(.*)*',
		component: () => import('src/modules/common/pages/ErrorNotFound.vue'),
	},
]
export default routes
