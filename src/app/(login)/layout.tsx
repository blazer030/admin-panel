import React from "react";

interface UnAuthLayoutProps {
    children: React.ReactNode;
}

const UnAuthLayout: React.FC<UnAuthLayoutProps> = ({ children }) => {
    return (
        <div>
            Im UnAuthLayout
            {children}
        </div>
    );
}

export default UnAuthLayout;
