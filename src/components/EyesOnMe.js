import React from "react"




function EyesOnMe() {

    const handleEyes = () => {
        console.log('Good!')
    };

    const handleBlur = () => {
        console.log('Hey! Eyes on me!')
    }
    
    return (
        <>
            <button onFocus={handleEyes} onBlur={handleBlur}>Eyes on me</button>
            
        </>
        
        

    )
}


export default EyesOnMe