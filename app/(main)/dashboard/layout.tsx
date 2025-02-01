import React from 'react';
import Header from "@/components/custom/Header";

const DashboardLayout = ({children}:{children:any}) => {
    console.log("layout")
    return (
        <div>
            <Header/>
            {children}
        </div>
    );
};

export default DashboardLayout;
