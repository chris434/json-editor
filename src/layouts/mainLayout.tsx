import { ReactNode } from "react";
import { Header } from "../components/header";

type mainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: mainLayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
