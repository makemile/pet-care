import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col mt-32 items-center gap-9">{children}</div>
  );
};
