import TeamMembersOverview from '@/Components/Dashboard/TeamMembers/TeamMembersOverview';
import TeamMembersUserTable from '@/Components/Dashboard/TeamMembers/TeamMembersUserTable';
import React from 'react';

const Page = () => {
    return (
        <div>
            <TeamMembersOverview />
            <br />
            <TeamMembersUserTable />

        </div>
    );
}

export default Page;
