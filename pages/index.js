// @generated: @expo/next-adapter@2.1.52
import React from "react";
import Login from "../components/Login";
import { TailwindProvider } from "tailwind-rn";
import utilities from "../tailwind.json";

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <Login />
    </TailwindProvider>
  );
}
