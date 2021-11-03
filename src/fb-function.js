import React from 'react'
import { collection, addDoc } from "firebase/firestore";
import { db } from "./fb-config";
import "./styles/menu/modalCancel.css"

function SendOrder({ name, table, totalOrder, pedido}) {

  const sendOrders = () => {
    const docRef = addDoc(collection(db, "orders"), {
      name: name,
      table: table,
      status: 'pending',
      pedidos: pedido,
      order: totalOrder,
      timestamp: new Date()
    }).then(() => {
      alert("Se envio el pedido")
    });
    return docRef
  }

  return (
    <button onClick={() => sendOrders()} className="buttonAccept">Enviar</button>
  )
}

export default SendOrder;