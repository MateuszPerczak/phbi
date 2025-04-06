import { AnimatedOutlet, Nav } from "@components/index";
import { Suspense } from "react";
import { ScrollRestoration } from "react-router-dom";

export const App = (): JSX.Element => {
  return (
    <>
      <ScrollRestoration />
      <Nav />
      <Suspense fallback={<>Loader</>}>
        <AnimatedOutlet />
      </Suspense>
    </>
  );
};
