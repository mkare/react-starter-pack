import { Outlet } from "react-router-dom";

const BaseLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      {children && children}
      <h1>Base Layout</h1>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default BaseLayout;
