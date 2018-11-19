import React from 'react';
import './Card.css'

const Card = ({id, textOne, textTwo})=> {

	return (
		<div className= " center ">

 <article className="  pa2 bw0 fl w-50 w-25-ns shadow-5 mv4 w-100 w-50-m w-25-l mw8 ">
  <div className="  pa2 ph3-ns pb3-ns">
    <div className="dt w-100 mt1 poo">
      <div className="dtc">
        <h1 className="  f7 f2-ns mv0">{textOne}</h1>
      </div>
      <div className="dtc tr">
      </div>
    </div>
    <p className=" poo f4 lh-copy  measure mt2 mid-gray">
     {textTwo}
    </p>
  </div>
</article>
    </div>
	);

}

export default Card ;