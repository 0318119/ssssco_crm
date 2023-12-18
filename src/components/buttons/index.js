import React, { useEffect } from "react";
import { message } from 'antd';
import style from './button.module.css'

function Button({ title, onClick, loading, type, isClickable }) {
    return (
        <>
            <button  className={`px-4 py-2 ${style.bg}`} type={type} disabled={loading} 
            onClick={(e) => { 
                if(isClickable == true){
                    onClick()
                }else{return false;}
             }}>{loading ? 'Loading..' : title}</button>
        </>
    )
}

function SimpleButton({ title, loading, type ,isClickable,onClick}) {
    return (
        <>
            <button type={type} disabled={loading}
            onClick={(e) => { 
                if(isClickable == true){
                    onClick(e)
                }else{return false;}
             }}
            >{loading ? 'Loading..' : title}</button>
        </>
    )
}

function PrimaryButton({ title, loading, type,isClickable,onClick }) {
    const [messageApi, contextHolder] = message.useMessage();
    useEffect(() => {
        if (loading) {
            messageApi.open({
                type: 'loading',
                content: 'Please Wait..',
                duration: 0,
            });
        }
        else {
            messageApi.destroy()
        }
    }, [loading])

    return (
        <>
            {contextHolder}
            <button type={type} disabled={loading}
            onClick={(e) => { 
                if(isClickable == true){
                    onClick(e)
                }else{return false;}
             }}
            >{title}</button>
        </>
    )
}

function CancelButton({ title, onClick,isClickable }) {
    return (
        <>
            <button
            onClick={(e) => { 
                if(isClickable == true){
                    onClick(e)
                }else{return false;}
             }}
            >{title}</button>
        </>
    )
}

function DeleteButton({ title, onClick, loading,isClickable }) {
    return (
        <>
            <button disabled={loading} 
            onClick={(e) => { 
                if(isClickable == true){
                    onClick(e)
                }else{return false;}
             }}
            >{loading ? 'Loading..' : title}</button>
        </>
    )
}

export { PrimaryButton, CancelButton, Button, DeleteButton, SimpleButton }