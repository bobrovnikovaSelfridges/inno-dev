import { createContext, useContext } from "react";
import { ContextType } from "../tools/types";

export const AppContext = createContext<ContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("Must be used in scope of a QuizContextProvider");
  }

  return context;
};
