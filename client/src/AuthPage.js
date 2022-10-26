import React, {useCallback, useContext, useEffect, useState} from 'react'
import {withRouter } from "react-router-dom";


import axios from 'axios'
import Application from './Application'


const AuthPage = () => {
 const[email,setEmail]=useState('')
  const [password, setPassword] = useState('')
 






const loginHandler=useCallback(async()=>{
    try{const objHandler={
        email,password
    }
    await axios.post('/login',objHandler,{
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(response=>{
          
        localStorage.setItem('token',response.data.token)
        window.location.reload()
    } )}
    catch(e){
        alert(e.message)
    }



})


const registerHandler=useCallback(async()=>{

    const objHandler={
        email,password
    }
    await axios.post('/register',objHandler,{
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(response=>console.log(response.data)) 

    
})

  const  exitBtn = () =>  { return <button style={{float:"center"}} onClick={()=>{
                localStorage.clear()
                window.location.reload()
                }}>
              Выход
            </button>
}

if (localStorage.getItem('token')){

    return(
      
        <div>
            
       <Application exitBtn={exitBtn} />
       
       </div>    
    )
}


  return (
    
    <div style={{
      display:"flex",
      justifyContent:"center",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "15vh",
      marginBottom: "15vh",

      
      
  }}>
<div className="row">
  <div className="col s6 offset-s3">
    <h1 style={{textAlign: "center"}}>Вход</h1>
    <div className="card blue darken-1">
      <div className="card-content white-text">
      
        <div>

          <div style={{
              display:"flex",
              flexDirection:"column"
          }}className="input-field">
              <label htmlFor="email">Email</label>
            <input
              placeholder="Введите email"
              id="email"
              type="text"
              name="email"
              className="yellow-input"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
             
            />
            
          </div>

          <div  style={{
              display:"flex",
              flexDirection:"column"
          }} className="input-field">
              <label htmlFor="email">Пароль</label>
            <input
              placeholder="Введите пароль"
              id="password"
              type="password"
              name="password"
              className="yellow-input"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              
            />
            
          </div>

        </div>
      </div>
      <div className="card-action">
        <button
          className="btn yellow darken-4"
          style={{marginRight: 10, textAlign: "center", margin: "0 auto",
          display: "block",     fontWeight: "500"  }}
         onClick={loginHandler}
        >
              Войти
            </button>
            {/* <button
              className="btn yellow darken-4"
              style={{marginRight: 10}}
              onClick={registerHandler}
             
            >
              Регистрация
            </button>
          */}
          </div>
        </div>
      </div>
    </div>
    </div>
    
  )
  
}

export default withRouter(AuthPage)
