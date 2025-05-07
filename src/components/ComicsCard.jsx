import React from 'react';

const ComicsCard = (props) => {
  return (
    <> 
      <div className="comics-card"> 
      <h5>{props.title}</h5>  
        <img src={props.image} alt={"DC Comics"} />
      </div>
    </>
  );
}

export default ComicsCard;

      /*chimata list card: 
      <ComicsCard comics={comics[0]}/> */

      // da riportar così
      //  <h4>{props.comics.title}</h4>
      // <img src={props.comics.image} alt={"DC Comics"} />