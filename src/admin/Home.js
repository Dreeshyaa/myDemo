import { useState,userEffect } from "react";
import http from "../http";
export default function Home(){
    const [user, setUsers] =useState([]);
    userEffect(()=>{
        fetchAllUsers();
    },[]);
    const fetchAllUsers=()=>{
        http.get('/users').then(res=>{
            setUsers(res.data);
        })
    }
    return(
    <div>
        <h1>
           User listing 
        </h1>
        <table>
            <thead>
                <tr>SNo</tr>
                <tr>Name</tr>
                <tr>Email</tr>
                <tr>Action</tr>
            </thead>
            <tbody>
                {user.map((user,index)=>
                <tr>
                    <td>1</td>
                    <td>name</td>
                    <td>email</td>
                    <td>edits</td>
                </tr>
                )}
            </tbody>
        </table>
        </div>
    )
}
