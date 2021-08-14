
import React, {useEffect, useRef} from 'react'
import socketIOClient from "socket.io-client";

const sk = socketIOClient("localhost:5000/counceling", {autoConnect: false})

export function ChatPage({children}){
    
    const socket = useRef();
    socket.current = sk;
    const socketManager = socket.current;


    useEffect(()=>{
        console.log("컴포넌트 마운트 됨");
        socketManager.connect();
        socketManager.on("loby",({message})=>{
            console.log("message", message);
        }) 

        return ()=>{
            console.log("컴포넌트 언마운트 됨")
        }
    },[])
    return (
            <div>
                chat page
            </div>
        )
}