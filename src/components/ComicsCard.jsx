import React from "react";

const ComicsCard = (props) => {
  return (
   <div>Singolo Fumetto
      <h4>{props.comics.title}</h4>
      <img src={props.comic.thumb} alt={"DC Comics"} />
   </div>
  );
}

export default ComicsCard;

