import { NavLink } from "react-router-dom";

export const Page404 = () => {
  return (
    <>
      <h2 className="text-5xl text-center mt-10">Page404</h2>
      <NavLink to="/" className="underline text-2xl mt-5">
        <p className="mt-5 text-center">Return to this Site</p>
      </NavLink>
    </>
  );
};
