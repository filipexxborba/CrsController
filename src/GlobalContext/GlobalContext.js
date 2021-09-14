import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [crs, setCrs] = React.useState(null);
  const [showCad, setShowCad] = React.useState(false);

  const authURL = `https://api.imgur.com/oauth2/authorize`;
  const acessTokenURL = `https://api.imgur.com/oauth2/token`;
  const teste1 = 'https://api.imgur.com/oauth2/authorize?client_id=cef8bd3a6171506&response_type=refresh_token'
  const clientID = "cef8bd3a6171506";
  const clientSecret = "12bf5cf31a57b95bb2fbad758f2c4ac3f9b65366";
  function teste(arg) {
    setCrs(arg);
  }

  async function catchToken() {
    const response = await fetch(authURL, {
      method: 'GET',
      headers: {
        "client_id": clientID,
        "response_type": 'refresh_token',
      },
      mode: 'no-cors',
    })
    const jsonResponse = await response;
    console.log(jsonResponse);
  }

  React.useEffect(() => {
    const localCRSs = localStorage.getItem("ListaCRSs");
    if (localCRSs) {
      setCrs(JSON.parse(localStorage.getItem("ListaCRSs")));
    }
    catchToken();
  }, []);
  return (
    <GlobalContext.Provider value={{ crs, teste, showCad, setShowCad }}>
      {children}
    </GlobalContext.Provider>
  );
};
