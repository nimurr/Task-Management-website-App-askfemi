import React from 'react';
import TaskManagementTabs from './TaskManagementTabs';
import TaskManagementLiveActivity from './TaskManagementLiveActivity';

const TaskManagementMain = () => {
    return (
        <div className='grid lg:grid-cols-5 gap-6 mt-6'>
            <div className='lg:col-span-3'>
                <TaskManagementTabs />
            </div>
            <div className='lg:col-span-2'>
                <TaskManagementLiveActivity />
            </div>
        </div>
    );
}

export default TaskManagementMain;
