import React from "react";
import {
  FormUseStates,
  FormUseReducer,
  FormWithCustomHook,
} from "./components/form";

export default function App() {
  return (
    <div>
      <div>
        <FormWithCustomHook />
        <FormUseReducer />
        <FormUseStates />
      </div>
    </div>
  );
}
