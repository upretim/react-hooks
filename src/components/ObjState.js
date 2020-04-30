import React, {useState} from 'react';

const ObjState = ()=>{
    const [name, setName] = useState({firstName:'', lastName:''}); 
   

    return(
        <div>
         First name:  <input type="text" value={name.firstName} onChange={(event)=> setName({...name, firstName: event.target.value})}/>
        <br/> Last Name:  <input type="text" value={name.lastName} onChange={(event)=> setName( {...name, lastName: event.target.value})}/>
           <div>
               First name is {name.firstName}
               <br/>
               Last name is {name.lastName}
           </div>

         {JSON.stringify(name)}
          

        </div>
    )
}
export default ObjState;