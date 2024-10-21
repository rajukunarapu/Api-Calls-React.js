import { useEffect, useState } from "react"
import Product from "./product"

function Fetch1(){
    let [data,setData]  = useState([])

    useEffect(()=>{
        getData()
        postData()
        patchData()
        putData()
        deleteData()
    },[])

    async function getData(){
        let res = await fetch('https://fakestoreapi.com/products')
        let apiData = await res.json()
        setData(apiData)
    }

    async function postData(){
        let res = await fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify({
                title: 'test product',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
            })
        })

        let data = await res.json()
        console.log(data)
    }

    async function patchData(){
        let res = await fetch("https://fakestoreapi.com/products/6",{
            method:"PATCH",
            body:JSON.stringify({
                category:"Hardware"
            })
        })
        let data = await res.json()
        console.log(data)

    }
    async function putData(){
        let res = await fetch("https://fakestoreapi.com/products/7",{
            method:"PUT",
            body:JSON.stringify({
                title: 'test product',
                price: 100,
                category:"Hardware"
            })
        })
        let data = await res.json()
        console.log(data)

    }
    async function deleteData(){
        let res = await fetch("https://fakestoreapi.com/products/1",{
            method:"DELETE"
        })
        let data = await res.json()
        console.log(data)

    }

    return(
        <>
            <h1>This is an fetch component</h1>
            <h1>These are some Products Details:</h1>
            {
                data.map((d)=>{
                    return(
                       <Product {...d} key={d.id}></Product>
                    )
                })
            }
        </>
    )
}

export default Fetch1