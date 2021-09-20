import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [crs, setCrs] = React.useState(null);
  const [doneList, setDoneList] = React.useState(null);
  const [showCad, setShowCad] = React.useState(false);
  const [showDone, setShowDone] = React.useState(false);

  function teste(arg) {
    setCrs(arg);
  }

  React.useEffect(() => {
    const localCRSs = localStorage.getItem("ListaCRSs");
    if (localCRSs) {
      setCrs(JSON.parse(localStorage.getItem("ListaCRSs")));
    }
    const localDone = localStorage.getItem("ListaDone");
    if (localDone) {
      setDoneList(JSON.parse(localStorage.getItem("ListaDone")));
    }
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        crs,
        teste,
        showCad,
        setShowCad,
        doneList,
        setDoneList,
        showDone,
        setShowDone,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
