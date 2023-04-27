import { Outlet } from "react-router-dom";

const AuthLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      {children && children}
      <h1>Auth Layout</h1>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
