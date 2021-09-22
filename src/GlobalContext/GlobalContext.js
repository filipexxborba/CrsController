import React from "react";
export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const apiURL = `http://172.17.0.243:9995`;
  const [crs, setCrs] = React.useState(null);
  const [doneList, setDoneList] = React.useState(null);
  const [showCad, setShowCad] = React.useState(false);
  const [showDone, setShowDone] = React.useState(false);

  function teste(arg) {
    setCrs(arg);
  }

  async function callApiAberta() {
    const response = await fetch(`${apiURL}/v1/crsaberta`);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    setCrs(jsonResponse);
  }

  async function callApiResolvida() {
    const response = await fetch(`${apiURL}/v1/crsresolvida`);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    setDoneList(jsonResponse);
  }

  React.useEffect(() => {
    callApiAberta();
    callApiResolvida();
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
        apiURL,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
