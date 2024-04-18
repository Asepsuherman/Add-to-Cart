import React from "react";

const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-slate-100 ">
            {children}
        </div>
    );
};

export default MainLayout;
