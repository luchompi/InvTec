import Navbar from "../components/Navbar.jsx";
import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

const App = () =>{
    const [dateTime,setDateTime] = useState('')
    useEffect(()=>{
        const interval = setInterval(()=>{
            setDateTime(new Date().toLocaleString('es-co'))
        },1000)
        return ()=>{
            clearInterval(interval)
        }
    },[dateTime])
    return(<>
        <Navbar dateTime={dateTime}/>
        <Outlet/>
    </>);
}

export default App;