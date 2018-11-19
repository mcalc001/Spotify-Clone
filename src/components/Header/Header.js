import React from 'react';
import './Header.css';

const Header = ({onRandomise})=> {
	return (
		<div className = "typeMatch">
           <div 
           id = 'typeMatch'
           className= " pa1 pa4-ns link  black b f1 f-headline-ns tc db mb3 mb4-ns"  
		   title="Home">Type Match

		   </div>
     	<div>
		   <nav className="pa1 pa3-ns">
		    <div className="tc pb3">
		    <button
		    onClick={onRandomise}
		    className="link dim gray f6 f5-ns dib mr3"  
		    name ="Randomise">Randomise
		    </button>
     </div>
       </nav>
           <div className= "box "> </div> 
          

     	</div> 
     	
	</div>
	);

}

export default Header;