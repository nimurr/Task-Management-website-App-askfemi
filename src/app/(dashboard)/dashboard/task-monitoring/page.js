import TaskManagementMain from '@/Components/Dashboard/Home/TaskManagementMain';
import TaskMonitoringOverview from '@/Components/Dashboard/TaskMonitoring/TaskMonitoringOverview';
import TaskMonitoringTaskActivity from '@/Components/Dashboard/TaskMonitoring/TaskMonitoringTaskActivity';
import React from 'react';

const Page = () => {
    return (
        <div>
            <TaskMonitoringOverview />
            <TaskMonitoringTaskActivity />
             <TaskManagementMain />
        </div>
    );
}

export default Page;
