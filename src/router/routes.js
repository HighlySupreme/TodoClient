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
				component: TaskCreate,
                meta: {
                    title: 'Task Create',
                    breadcrumb: [
                        {labelKey: 'TODO List', to: '/tasks'},
                        {labelKey: 'Task Create'},
                    ]
                }
			},
			{
				path: '/tasks/edit/:id',
				name: 'TaskEdit',
				component: TaskCreate,
                meta: {
                    title: 'Task Edit',
                    breadcrumb: [
                        {labelKey: 'TODO List', to: '/tasks'},
                        {labelKey: 'Task Edit'},
                    ]
                }
			}
		]
	},

]

export default routes
