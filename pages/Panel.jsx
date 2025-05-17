import React, { useState,useEffect } from "react";
import {showItems} from "./api/requests/panelReq";

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
                                    {usuario.idusuario === 1 ?(
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
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datos.map((evento) => (
                            <tr key={evento.idevento}>
                                <td>{evento.idevento}</td>
                                <td>{evento.eventofecha}</td>
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

const MerchManagement = () => (
    <div>
        <h2>Gestión de mercadería</h2>
        <p>Aquí puedes gestionar la mercadería.</p>
        {/* Agrega tu lógica para gestionar mercaderia */}
    </div>
);

const MessagesManagement = () => (
    <div>
        <h2>Gestión de mensajes</h2>
        <p>Aquí puedes gestionar los mensajes.</p>
        {/* Agrega tu lógica para gestionar mensajes */}
    </div>
);

export default Panel;