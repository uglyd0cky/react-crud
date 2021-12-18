import React from "react"
import "./card.css"
import FormDialogUpdate from "../dialog/dialog_update"
import FormDialogDelete from "../dialog/dialog_delete"

export default function Card(props) {


    return <>
            <div className="card-container">
            <h3 className="card-title">{props.name}</h3>
            <p className="card-price">R$ {props.price}</p>
            <hr/>
            <p className="card-caregory">{props.category}</p>
            <FormDialogUpdate id={props.id} name={props.name} price={props.price} category={props.category}/>
            <FormDialogDelete id={props.id}></FormDialogDelete>
            </div>
           </>
}