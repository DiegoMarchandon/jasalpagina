import React, { useState } from "react";

const Panel = () => {
    const [activeTab, setActiveTab] = useState("users");

    const renderContent = () => {
        switch (activeTab) {
            case "users":
                return <UsersManagement />;
            case "orders":
                return <OrdersManagement />;
            case "events":
                return <EventsManagement />;
            default:
                return null;
        }
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>Panel de Administración</h1>
            <div style={{ marginBottom: "20px" }}>
                <button onClick={() => setActiveTab("users")}>Usuarios</button>
                <button onClick={() => setActiveTab("orders")}>Pedidos</button>
                <button onClick={() => setActiveTab("events")}>Eventos</button>
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

export default Panel;