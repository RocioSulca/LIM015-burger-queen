import React, { useEffect, useState } from "react";
import NavBar from "../nav-footer/nav";
import Footer from "../nav-footer/footer";
// import OrderWaiter from './order-waiter'
import { db } from "../../fb-config";
import { collection, getDocs, query, where } from "firebase/firestore";
import "../../styles/pages/waiter.css";
import ModalOrderConfirm from "../menu/modal-confirm";
import ModalOrderCancel from "../menu/modal-cancel";

function Waiter() {
  const [pedido, setPedido]= useState([]);
  // const [contador, setContador] = useState(0);
  const [arrayProductList, setArrayProductList] = useState([]);
  const [type, setType] = useState("breakfast");
// console.log(pedido)
  const moreClick = (products) => {
    // console.log(products)
  setPedido([...pedido,products])
  };
  const lessClick = (products) => {
    setPedido([...pedido,products]);
  };

  const getProductsFirebase = async (type) => {
    const arrayProduct = [];
    const querySnapshot = await getDocs(query(collection(db, "products"),where("type", "==", type)));
    querySnapshot.forEach((doc) => {
      arrayProduct.push(doc.data());
    });

    return arrayProduct;
  };

  useEffect(() => {
    async function fetchList() {
      const listMenu = await getProductsFirebase(type);
      // console.log(listMenu);
      setArrayProductList(listMenu);
    }
    fetchList();
  }, [type]);

  return (
    <div className="waiter">
      {/* PARTE DE NAV */}
      <>
        <NavBar />
      </>

      {/* PARTE DONDE INGRESA EL NOMBRE DEL CLIENTE Y EL NUMERO DE MESA */}
      <section className="padre">
        <section className="temp-waiter side">
          <div>
            <section className="dataClient">
              <p>NOMBRE DEL CLIENTE:</p>
              <input type="text" className="text" />
            </section>
            <section className="dataClient">
              <p>NUMERO DE MESA:</p>
              <input type="text" className="text" />
            </section>
          </div>

          <section>
            <div className="order">
              {/* *Aqui iran dinamicamente los pedidos(cambiar los div por otro elemento)* */}
              {/* <OrderWaiter /> */}
            </div>
            <div className="btn-send-order">
              <button className="btn-order-red"><ModalOrderCancel /></button>
              <button className="btn-order-green"><ModalOrderConfirm /></button>
            </div>
          </section>
        </section>
        {/*AGREGADO 10/10 */}
        <section className="temp-waiter">
          <section className="btn-order">
            <button className="btn-roder-waiter" onClick={()=>setType('breakfast')}>DESAYUNOS</button>
            {/* <button className="btn-roder-waiter" value='lunch' onClick={(e)=>setType(e.target.value)}>HAMBURGUESAS</button> */}
            <button className="btn-roder-waiter" onClick={()=>setType('dinner')}>HAMBURGUESAS</button>
            <button className="btn-roder-waiter" onClick={()=>setType('addfood')}>ACOMPAÑAMIENTOS</button>
            <button className="btn-roder-waiter" onClick={()=>setType('drink')}>BEBIDAS</button>
          </section>

          <div className="order-container-list">
            {arrayProductList.map((item, index) => {
              console.log('type', type);
              return (
                <div className="order-container" key={index}>
                  <p className="">S/. {item.price}.00</p>
                  <img className="img-product" src={item.URL}></img>
                  <p className="">{item.name}</p>
                  <div className="btn--order">
                    <button className="btn-order-container-less" onClick={()=>lessClick(item)}> - </button>
                    <p>{pedido.filter(p =>p.id!==item.id).length}</p>
                    <button className="btn-order-container-more" onClick={()=>moreClick(item)}> + </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </section>

      {/* FOOTER DE LA PAGINA */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Waiter;
