import React, {useState} from 'react';

const FavColor = ()=>{
    const [favColor, setFavColor]=useState('red');
    return(
        <>
         <div style={{width:'50%',
          height:'100px',
          marginLeft:'25%',
          backgroundColor:favColor}}>{favColor}</div>
          <button style={{margin:'5px'}} onClick={()=>setFavColor('red')}>Red </button>
         <button style={{margin:'5px'}} onClick={()=>setFavColor('blue')}>Blue </button>
         <button style={{margin:'5px'}} onClick={()=>setFavColor('green')}>Green </button>
        </>
    )

}
export default FavColor;