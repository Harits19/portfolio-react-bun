import { createContext, useContext } from "react";


export const ScrollContext = createContext(false);


export const useScrollState = () => useContext(ScrollContext);

