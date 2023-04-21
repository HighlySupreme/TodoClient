const MainLayout = () => import('layouts/MainLayout.vue');
const Tasks = () => import('pages/Task.vue');
const TaskCreate = () => import('pages/TaskCreate.vue');

const routes = [
	{
		path: '/',
		component: MainLayout,
		children: [
			{
				path: '/tasks',
				name: 'Tasks',
				component: Tasks
			},
			{
				path: '/tasks/create',
				name: 'TaskCreate',
				component: TaskCreate
			},
			{
				path: '/tasks/edit/:taskId',
				name: 'TaskEdit',
				component: TaskCreate
			}
		]
	},

]

export default routes
