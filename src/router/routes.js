const MainLayout = () => import('layouts/MainLayout.vue');
const Tasks = () => import('pages/Task.vue');

const routes = [
	{
		path: '/',
		component: MainLayout,
		children: [
			{
				path: '/tasks',
				name: 'Tasks',
				component: Tasks
			}
		]
	},

]

export default routes
