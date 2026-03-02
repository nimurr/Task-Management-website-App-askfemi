
import TaskManagementMain from '@/Components/Dashboard/Home/TaskManagementMain';
import TeamOverview from '@/Components/Dashboard/Home/TeamOverview';
import React from 'react';

const Page = () => {
    return (
        <div>
            <TeamOverview />
            <TaskManagementMain />
        </div>
    );
}

export default Page;
