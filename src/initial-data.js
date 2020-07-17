const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Get started' },
        'task-2': { id: 'task-2', content: 'Start working' },
        'task-3': { id: 'task-3', content: 'Add features' },
        'task-4': { id: 'task-4', content: 'Set up connections' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Links',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-1'],
};

export default initialData;