import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [crs, setCrs] = React.useState(null);
  const [showCad, setShowCad] = React.useState(false);

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
    <GlobalContext.Provider value={{ crs, teste, showCad, setShowCad }}>
      {children}
    </GlobalContext.Provider>
  );
};
