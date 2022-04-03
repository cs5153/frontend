import React from 'react'


function Log() {

return (
    <>
        <label>Username : </label>   
            <input type="text" placeholder="Enter Username" name="username" required/>  
            <label>Password : </label>   
            <input type="password" placeholder="Enter Password" name="password" required/>  
            <button type="submit" >Login</button>   
  
    </>
)
}

export default Log;