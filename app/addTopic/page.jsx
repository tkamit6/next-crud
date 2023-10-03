'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function page() {
    const [title, seTitle] = useState()
    const [description, seDescription] = useState()

    const router = useRouter()

    const sunbmitHandle = async (e)=>{
        e.preventDefault();
        if(!title || !description){
            alert("Title and Description required")
            return;
        }try {
    const res = await fetch("http://localhost:3000/api/topics/", {
                method: "POST",
                headers:{
                    "Content-type" : "application/json" 
                } ,
                body: JSON.stringify({title, description})
            })
            if(res.ok){
                alert("Created")
                router.push('/')
            } else{
                throw new Error("Failed to create new Topic")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (

        <form action="" onSubmit={sunbmitHandle} className="flex flex-col gap-3">
            <input type="text" onChange={(e)=> seTitle(e.target.value)} value={title} placeholder="Topic title" className="border border-slate-500 px-8 py-2" />
            <input type="text" onChange={(e)=> seDescription(e.target.value)} value={description} placeholder="Topic Description" className="border border-slate-500 px-8 py-2" />
            <button type="submit" className="bg-green-600 text-white py-3 px-6 w-fit">Add Topic</button>
        </form>
    )
}
