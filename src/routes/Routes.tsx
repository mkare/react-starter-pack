import { Route, Routes } from "react-router-dom";

import { BaseLayout, AuthLayout } from "@layouts/index";
import Home from "./Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/login" element={<AuthLayout />}>
        <Route index element={<h1>Login</h1>} />
      </Route>
    </Routes>
  );
}
