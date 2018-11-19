import React from 'react';
import Card from './Card';


const CardList = ({textArray}) => {
	
    const cardComponent = textArray.map((user, i) => {
	return <Card key={i} id={textArray[i].id} textOne={textArray[i].textOne} textTwo={textArray[i].textTwo}/>
	 })
  

	return (
		<div>
       {cardComponent}
	    </div>
	);
  
}


export default CardList ;

