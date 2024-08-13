import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import {Link} from'react-router-dom';





const Home = ()=>{
    const [items, setitems] = useState([]);
    const [item, setitem] = useState("cake");
    

    let getRecipe = async()=> {
        let res = await axios.get(`https://api.edamam.com/search?q=${item}&app_id=d0a05e5a&app_key=45710e8952f9dbcf7f8afc6f96598a5e`)
        console.log(res.data.hits)
        setitems(res.data.hits)
        
    }
    useEffect(()=>{
        getRecipe()

    },[item])

    let searchRef = useRef()
    const search=(e)=>{
    e.preventDefault()
    console.log("hello")

    let value= searchRef.current.value
    console.log(value) 
    setitem(value)

    }

    return (
        <div className='bg-light'>
            <form className="d-flex col-6 m-auto my-4">
                <input className="form-control me-2" type="search" ref={searchRef} placeholder="Search" aria-label="Search" />
                <button onClick={search} className="btn btn-outline-success" type="submit">Search</button>
            </form>
           
            <div className='row mt-0 p-0 gap-2 justify-content-center  '>
                {
                    items.map((ele,index) => {
                        return <div className="card" style={{ width: '18rem' }}>
                            <img src={ele.recipe.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{ele.recipe.label}</h5>

                               
                             <Link state={ele} to="/ViewRecipe" className="btn btn-primary">View Recipe</Link>
                             <button className='btn btn-success ms-4' >Favourite</button>
                            </div>
                        </div>

                    })
                }

            </div>


        </div >



    )

}
export default Home
