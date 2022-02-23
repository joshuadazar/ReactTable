import { useEffect, useState } from 'react';
import { Names } from '../models/INames';
import {NameArray, getMessage} from '../services/service'

interface title{
    title: string;
}
export const Main = ({ title }:title) => {

    const[namesLocal, setNames] = useState([]);
    const[msg, setMsg] = useState('');

    useEffect(() => {
        NameArray.getNames().subscribe((values: any) => setNames(values))
        getMessage().subscribe((val:any) =>setMsg(val))
       
    });

    

    return(
        <>
            { title ? <h3>{title}</h3> : <h3>no</h3>}
            <button>hay{msg}</button> 
            { namesLocal.map((name: Names) => (<li key={name.id}>{name.name}</li>))}
        </>
    )
}
    
