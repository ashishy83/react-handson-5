import React from "react";

const HOCCounter = (Component) =>{
    function NewComponent (props){
        return <Component/>
    }
    return (
        <NewComponent/>
    )
}
export default HOCCounter;