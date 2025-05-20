import React, { useState,useEffect } from "react";
import {showItems,actualizarProducto} from "./api/requests/utils";
import EditarProductoModal from "../components/EditarProductoModal";
// import { updateProducto } from "./api/requests/producto";

const Panel = () => {
    const [activeTab, setActiveTab] = useState("usuario");
    const [datos, setDatos] = useState([]);



    useEffect(() => {
        const cargarElementos = async () => {
          const elementos = await showItems(activeTab);
          setDatos(elementos) //guardo los datos en el estado
          console.log(elementos);
        };
    
        cargarElementos();
    
      },[activeTab]);

    const renderContent = () => {
        switch (activeTab) {
            case "usuario":
                return <UsersManagement datos={datos}/>;
            case "pedido":
                return <OrdersManagement datos={datos}/>;
            case "evento":
                return <EventsManagement datos={datos}/>;
            case "producto":
                return <MerchManagement datos={datos}/>;
            case "mensaje":
                return <MessagesManagement datos={datos}/>;
            case "compra":
                return <PurchasingManagement datos={datos}/>;
            default:
                return null;
        }
    };

    return (
        <div style={{ marginTop:"80px", padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>Panel de Administración</h1>
            <div style={{ marginBottom: "20px" }}>
                <button onClick={() => setActiveTab("usuario")}>Usuarios</button>
                <button onClick={() => setActiveTab("pedido")}>Pedidos</button>
                <button onClick={() => setActiveTab("evento")}>Eventos</button>
                <button onClick={() => setActiveTab("producto")}>Mercaderia</button>
                <button onClick={() => setActiveTab("mensaje")}>mensajes</button>
                <button onClick={() => setActiveTab("compra")}>compras</button>
            </div>
            <div>{renderContent()}</div>
            
                
        </div>
    );
};

const UsersManagement = ({ datos }) => {
    return (
        <div>
            <h2>Gestión de Usuarios</h2>
            {datos.length === 0 ? (
                <p>No hay usuarios disponibles.</p>
            ) : (
                <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datos.map((usuario) => (
                            <tr key={usuario.idusuario}>
                                <td>{usuario.idusuario}</td>
                                <td>{usuario.usnombre}</td>
                                <td>{usuario.usmail}</td>
                                <td>
                                    {usuario.usuariorol === 'admin' ?(
                                        <button onClick={() => console.log("Eliminar", usuario.id)} disabled>admin</button>
                                    ):(
                                        <button onClick={() => console.log("Eliminar", usuario.id)} >deshabilitar usuario</button>
                                    )}
                                    
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};


const OrdersManagement = () => (
    <div>
        <h2>Gestión de Pedidos</h2>
        <p>Aquí puedes gestionar los pedidos.</p>
        {/* Agrega tu lógica para gestionar pedidos */}
    </div>
);

const EventsManagement = ({ datos }) => {
    return (
        <div>
            <h2>Gestión de Eventos</h2>
            {datos.length === 0 ? (
                <p>No hay eventos disponibles.</p>
            ) : (
                <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>fecha</th>
                            <th>lugar</th>
                            <th>URL</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datos.filter(evento => evento && evento.idevento).map((evento,index) => (
                            <tr key={`evento-${evento.idevento ?? index}`}>
                                <td>{evento.idevento}</td>
                                <td>{evento.eventofecha}</td>
                                <td>{evento.eventolugar}</td>
                                <td>{evento.eventourl}</td>
                                <td><button onClick={() => console.log("Modificar: ", evento.idevento)} >modificar evento</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

const MerchManagement = ({datos}) => {

    const [mostrarModal, setMostrarModal] = useState(false);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);


    // función para manejar el clic del botón
    const manejarClickEditar = (producto) => {
        setProductoSeleccionado(producto);
        setMostrarModal(true);
    };

    // actualiza el estado global del producto actualizado
    const handleEditarProducto = async(formData) => {
        // lógica para editar producto
        console.log("producto a editar: ",formData);
        // antes de actualizar los productos, convierto el dato a uno válido.
        if(formData.prodhabilitado !== undefined && formData.prodhabilitado !== ""){
            formData.prodhabilitado = (formData.prodhabilitado === "1") ? 1 : 0;
        } 
        var resultado = actualizarProducto(formData.idproducto,formData);
        resultado.then(valor => console.log("resultado:",valor));
        // console.log("resultado: "+ resultado);
    }

    return (
        <div>
            <h2>Gestión de mercadería</h2>
            {datos.length === 0 ? (
                <p>No hay mercadería disponible.</p>
            ) : (
                <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>nombre</th>
                            <th>detalle</th>
                            <th>categoría</th>
                            <th>origen</th>
                            <th>stock</th>
                            <th>precio</th>
                            <th>disponibilidad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datos.filter(producto => producto && producto.idproducto).map((producto) => (
                            <tr key={producto.idproducto}>
                                <td>{producto.idproducto}</td>
                                <td>{producto.nombreprod}</td>
                                <td>{producto.detalleprod}</td>
                                <td>{producto.categoriaprod}</td>
                                <td>{producto.origenprod}</td>
                                <td>{producto.stockprod}</td>
                                <td>{producto.precioprod}</td>
                                <td>{producto.prodhabilitado === 1 ? "disponible" : "no disponible"}</td>

                                <td><button onClick={() => manejarClickEditar(producto)} >Editar producto</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            {/* // muestro el modal solo si es true */}
            {mostrarModal && (
                <EditarProductoModal
                producto={productoSeleccionado}
                onClose={() => setMostrarModal(false)}
                onSubmit={handleEditarProducto}
                />
            )}
        </div>
    )
}; 

  

const MessagesManagement = () => (
    <div>
        <h2>Gestión de mensajes</h2>
        <p>Aquí puedes gestionar los mensajes.</p>
        {/* Agrega tu lógica para gestionar mensajes */}
    </div>
);

const PurchasingManagement = () => (
    <div>
        <h2>Gestión de Compras</h2>
        <p>Aquí puedes gestionar las compras.</p>
        {/* Agrega tu lógica para gestionar pedidos */}
    </div>
);

export default Panel;