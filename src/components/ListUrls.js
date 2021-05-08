import React from "react";
import ItemListUrl from "./ItemListUrl";

const ListUrls = (props) => {
  return props.data.map((el) => <ItemListUrl urlList={el} key={el.id} />);
};

export default ListUrls;
