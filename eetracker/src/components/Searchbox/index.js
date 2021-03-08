import React from "react";
function Searchbox (props){
    return (
        <input type="search"onChange={e =>props.handleSearchChange(e)}></input>
    )
}

export default Searchbox;