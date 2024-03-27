import React from "react";

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    return (
        <div>
            Im AuthLayout
            {children}
        </div>
    );
}

export default AuthLayout;
