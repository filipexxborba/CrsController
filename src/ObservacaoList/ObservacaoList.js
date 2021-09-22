import React from "react";
import "./ObservacaoList.css";
import { GlobalContext } from "../GlobalContext/GlobalContext";

const ObservacaoList = ({ index }) => {
  const { apiURL } = React.useContext(GlobalContext);
  const [obsList, setObsList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  async function getCrs(id) {
    setIsLoading(true);
    const response = await fetch(`${apiURL}/v1/getcrs/${index}`);
    const responseJson = await response.json();
    setObsList(responseJson.observacoes);
    setIsLoading(false);
  }

  React.useEffect(() => {
    getCrs(index);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="liLoading"></div>
      ) : (
        obsList.map((item, index) => (
          <li className="liObservacao" key={index}>
            {item}
          </li>
        ))
      )}
    </>
  );
};

export default ObservacaoList;
