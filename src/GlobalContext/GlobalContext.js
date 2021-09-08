import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [crs, setCrs] = React.useState(null);
  function teste(arg) {
    setCrs(arg);
  }

  React.useEffect(() => {
    const localCRSs = localStorage.getItem("ListaCRSs");
    if (localCRSs) {
      setCrs(JSON.parse(localStorage.getItem("ListaCRSs")));
    }
  }, []);
  return (
    <GlobalContext.Provider value={{ crs, teste }}>
      {children}
    </GlobalContext.Provider>
  );
};
