import React, { useState } from "react";
import { ChooseSize } from "./ChooseSize";
import { BlackButton } from "../Button/BlackButton";

export const ItemCount = (props) => {
  //Desestructuracion del props
  const { talle, initial, stock, onAdd } = props;

  const [fade, setFade] = useState(false);
  const [objeto, setObjeto] = useState({
    cantidadSeleccionada: parseInt(initial),
    stockDisponible: parseInt(stock),
    talleElegido: 0,
  });

  //Desestructuracion del state de ItemCount
  const { cantidadSeleccionada, stockDisponible, talleElegido } = objeto;

  const reducirCantidadProducto = (cantidad) => {
    if (cantidad === 1) {
      cantidad = 1;
    } else if (cantidad === 0) {
      cantidad = 0;
    } else {
      cantidad -= 1;
    }
    setObjeto({ ...objeto, cantidadSeleccionada: cantidad });
  };

  const sumarCantidadProducto = (cantidad, stock) => {
    cantidad < stock && stock !== 0 ? (cantidad += 1) : (cantidad = stock);
    setObjeto({ ...objeto, cantidadSeleccionada: cantidad });
  };

  const conocerStockDelProducto = (cantidad, stock) => {
    if (stock !== 0) {
      return cantidad;
    } else if (cantidad === 0 && stock !== 0) {
      return (cantidad = 1);
    } else {
      cantidad = "Sin stock";
      return cantidad;
    }
  };

  //Seleccionar talle
  const talleSelect = (talle) => {
    setObjeto({ ...objeto, talleElegido: talle });
  };

  const [trolleyContenedor, settrolleyContenedor] = useState("block");
  const [botontrolley, setBotontrolley] = useState("none");

  //Funcion para el trolley y que valida onAdd y hace aparecer ver trolley
  const agregarProductoAltrolley = (stock, cantidad, talleElegido) => {
    if (talleElegido !== 0) {
      let cantidadDeProductosSeleccionados = cantidad;
      onAdd(cantidadDeProductosSeleccionados, talleElegido);
      setBotontrolley("block");
      settrolleyContenedor("none");
      setTimeout(() => {
        setFade(true);
      }, 50);
    } else if (stock === 0) {
      alert("No hay stock");
    } else {
      alert("Seleccione un talle por favor");
    }
  };

  return (
    <>
      <div style={{ display: trolleyContenedor }}>
        <div className="contenedor-talle">
          <p>Choose your size:</p>
          <ChooseSize talle={talle} talleSelect={talleSelect} />
        </div>
        <div className="contenedor-botones">
          <div className="botonesCantGral">
            <button
              className="cant-boton"
              onClick={() => reducirCantidadProducto(cantidadSeleccionada)}
            >
              -
            </button>
            <span className="boton-span">
              {conocerStockDelProducto(cantidadSeleccionada, stockDisponible)}
            </span>
            <button
              className="cant-boton"
              onClick={() =>
                sumarCantidadProducto(cantidadSeleccionada, stockDisponible)
              }
            >
              +
            </button>
          </div>
          <div className="botonPurchaserGral">
            <button
              onClick={() =>
                agregarProductoAltrolley(
                  stockDisponible,
                  cantidadSeleccionada,
                  talleElegido
                )
              }
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div
        className={`contenedor-agregado ${
          fade === false ? "fadeOut" : "fadeIn"
        }`}
        style={{ display: botontrolley }}
      >
        <h4>Add to cart!</h4>
        <BlackButton
          text={`View cart`}
          link={`/cart`}
          submit={`agregado-boton`}
        />
      </div>
    </>
  );
};
