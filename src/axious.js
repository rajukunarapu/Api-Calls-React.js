import { useEffect } from "react"
import axios from "axios"


function Axios(){

    useEffect(()=>{
        getData()
        postData()
        putData()
        patchData()
        deleteData()
    },[])

    async function getData(){
        let res = await axios.get("https://fakestoreapi.com/products")
        console.log(res)
    }
    async function postData(){
        let res = await axios("https://fakestoreapi.com/products",{
            method:"POST",
            data:{
                title: 'test product',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
            }
        })
        console.log(res)
    }
    async function putData(){
        let res = await axios("https://fakestoreapi.com/products/10",{
            method:"PUT",
            data:{
                title: 'test product',
                price: 100,
                description: 'lorem ipsum set',
            }
        })
        console.log(res)
    }
    async function patchData(){
        let res = await axios("https://fakestoreapi.com/products/11",{
            method:"PATCH",
            data:{
                price:200
            }
        })
        console.log(res)
    }
    async function deleteData(){
        let res = await axios("https://fakestoreapi.com/products/12",{
            method:"DELETE",
        })
        console.log(res)
    }


    return(
        <>
            <h1>This is an axious component</h1>
        </>
    )
}

export default Axios