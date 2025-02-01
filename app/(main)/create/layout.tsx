import React from 'react';
import Header from "@/components/custom/Header";

const DashboardLayout = ({children}:{children:any}) => {
    return (
        <div>
            <Header/>
            {children}
        </div>
    );
};

export default DashboardLayout;
