import { createContext, useContext } from "react";

const StoreContext = createContext(null);

export const StoreProvider = ({ store, children }) => (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)

export const useMst = () => {
    const store = useContext(StoreContext);
    if (!store) throw new Error("Store not available in context");
    return store;
}