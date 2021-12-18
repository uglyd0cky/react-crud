
//credits for this CRUD!!
//https://www.youtube.com/watch?v=vzPsUWLprAw (Vitor Cunha Code)
//https://github.com/mui-org/material-ui/blob/v3.x/docs/src/pages/demos/dialogs/FormDialog.js


import React, {useEffect, useState} from "react";
import './App.css';
import Axios from "axios";
import Card from "./components/card/card";

function App() {

  const [values, setValues] = useState()
  const [listProducts,setListProducts] = useState()
  const [update,setUpdate] = useState(false)


  const handleChangeValues = (value) =>{
    setValues(prevValue=>({
      ...prevValue,
      [value.target.name]: value.target.value
    }))
  }

  const handleClick = () => {

    Axios.post("http://localhost:3001/products", {

    name: values.name,
    price: values.price,
    category: values.category

    })
    .then((response)=> {
      console.log(response.insertId)
      
    })
    setUpdate(!update)
  }

  useEffect(()=>{
    Axios.get("http://localhost:3001/products")
    .then((response)=>{
      setListProducts(response.data)
    })
  },[update])

  return (
    <div className="App">

      <div className="Nav">
        Uga Store
      </div>
      <div className="Container">
        <div className="Container-border">

            <input type="text"
            name="name"
            placeholder="Name"
            className="Register-input"
            onChange={handleChangeValues} //manda o objeto todo pra handleChangeValues???!!!
            />

            <input type="text"
            name="price"
            placeholder="Price"
            className="Register-input"
            onChange={handleChangeValues}
            />

            <input type="text"
            name="category"
            placeholder="Category"
            className="Register-input"
            onChange={handleChangeValues}
            />

            <button className="cadastrar" onClick={()=>handleClick()}>Submit</button>
        </div>
      </div>
      <div className="Container">
        {
          typeof listProducts != "undefined" && 
          listProducts.map((value)=>{

            return <Card
            key={value.id}
            listCard={listProducts}
            setlistCard={setListProducts}
            id={value.idproducts}
            name={value.name}
            price={value.price}
            category={value.category}
            >

            </Card>
          })
        }

        
      </div>
    </div>
  );
}

export default App;
