import React from "react";
import Tablebody from "../Tablebody";

function Table(props){
    return (
       <table>
           <thead>
               <tr>E-mail Address</tr>
           </thead>
           <Tablebody users={props.users}/>
       </table>
    )
}
export default Table;
