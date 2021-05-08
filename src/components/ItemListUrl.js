import { useState, useEffect } from "react";
import "./ItemListUrl.css";

const ItemListUrl = (props) => {
  const [click, setClick] = useState(false);

  // useEffect(() => {
  //   setData();
  // }, []);

  function handelclick() {
    setClick(!click);
  }
  return (
    <div
      className="itemListUrl" /*style={{ border: "solid 2px black", width: "50%", height: "25px" }}*/
    >
      <div className="Barre">
        <div>{props.urlList.url}</div>
        <div>{props.urlList.shortUrl}</div>
        <div>
          <button onClick={handelclick} className={click ? "copy" : "copied"}>
            {click ? "copied" : "copy"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemListUrl;
