import React, { useEffect, useState } from 'react'


const getlocaldata=()=>{
  const lists=localStorage.getItem("myregdata");
   if(lists)
  {
    return JSON.parse(lists);
  }
  else
  {
    return [];
  }
}
const Signup = () => {
  const [username,SetUsername]=useState("");
 const [password,SetPassword]=useState("");
  
  const [email,SetEmail]=useState("");
  
  const [age,SetAge]=useState("");
  const [datas,SetDatas]=useState(getlocaldata());
  const[flag,SetFlag]=useState(false);

   
  //Add Items
  const addItems=()=>{
    if(!username || !password || !email||!age)
    {
      alert('Please Fills the field');
    }
    else
    {
        const mynewinputsdata={
          id:new Date().getTime().toString(),
          username:username,
          password:password,
          email:email,
          age:age
        }
        SetDatas([...datas,mynewinputsdata]);
        SetUsername('');
        SetFlag(true);
        
    }

  }
//adding  local storage
useEffect(()=>{
  localStorage.setItem("myregdata",JSON.stringify(datas))
},[datas]);


  return <>
  
  <div className=''>
  <div className='signup'>Signup with Us</div>
  { datas.map((curElem)=>(
     <h3> {curElem.username} You Have Successfully Registered.</h3>
)) }

<form className='main-div'>
  
<div className='username'><label className='sizetext'>Username</label>
    <input type="text" placeholder='Enter Username' value={username} onChange={(event)=>SetUsername(event.target.value)}></input></div>
    <div className='password'><label className='sizetext'>Password</label>
    <input type="password" placeholder='Enter Password' value={password} onChange={(event)=>SetPassword(event.target.value)}></input></div>
    <div className='email'><label className='sizetext'>Email</label>
    <input type="email" placeholder="Enter Email" value={email} onChange={(event)=>SetEmail(event.target.value)}></input></div>
    <div className='age'><label className='sizetext'>AGE</label>
    <input type="text" placeholder='Enter Age' value={age} onChange={(event)=>SetAge(event.target.value)}></input></div>
    <button type="button" className='submitbutton' onClick={addItems}>Submit</button>
</form>
  </div>
    
    
  
  </>
    
  
}

export default Signup