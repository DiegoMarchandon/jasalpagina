import React, { useState,useEffect } from "react";
import {showItems} from "./api/requests/panelReq";

const Panel = () => {
    const [activeTab, setActiveTab] = useState("usuario");

    useEffect(() => {
        const cargarElementos = async () => {
          const eventos = await showItems(activeTab);
          // setEventos(Eventos)
          console.log(eventos);
        //   setDatos(eventos);
        };
    
        cargarElementos();
    
      },[activeTab]);

    const renderContent = () => {
        switch (activeTab) {
            case "usuario":
                return <UsersManagement />;
            case "pedido":
                return <OrdersManagement />;
            case "evento":
                return <EventsManagement />;
            case "producto":
                return <MerchManagement />;
            case "mensaje":
                return <MessagesManagement />;
            default:
                return null;
        }
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
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

const UsersManagement = () => (
    <div>
        <h2>Gestión de Usuarios</h2>
        <p>Aquí puedes gestionar los usuarios.</p>
        {/* Agrega tu lógica para gestionar usuarios */}

    </div>
);

const OrdersManagement = () => (
    <div>
        <h2>Gestión de Pedidos</h2>
        <p>Aquí puedes gestionar los pedidos.</p>
        {/* Agrega tu lógica para gestionar pedidos */}
    </div>
);

const EventsManagement = () => (
    <div>
        <h2>Gestión de Eventos</h2>
        <p>Aquí puedes gestionar los eventos.</p>
        {/* Agrega tu lógica para gestionar eventos */}
    </div>
);

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