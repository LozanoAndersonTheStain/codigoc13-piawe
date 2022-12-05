import axios from "axios";
import React, { useState } from "react";
import "../User/User.css";

const SingIn = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [typeDocument, setTypeDocument] = useState("");
  const [numberDocument, setNumberDocument] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumbers] = useState("");
  const [role, setRole] = useState("");

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [singin, setSingIn] = useState("");

  const postSingIn = async () => {
    const response = await axios.post(
      "https://c13-app-back.up.railway.app/api/users"
    );
    setSingIn(response.data.login);
  };

  return (
    <form className="contenedor-formulario" onSubmit={postSingIn}>
      <h1>Sing In</h1>

      <input
        type="text"
        placeholder="Nombre"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
      />

      <input
        type="text"
        placeholder="Apellido"
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
      />

      <input
        type="text"
        placeholder="Nombre de Usuario"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      />

      <input
        type="text"
        placeholder="Tipo de documento"
        onChange={(e) => setTypeDocument(e.target.value)}
        value={typeDocument}
      />

      <input
        type="text"
        placeholder="Número de documento"
        onChange={(e) => setNumberDocument(e.target.value)}
        value={numberDocument}
      />

      <input
        type="text"
        placeholder="Direccion de residencia"
        onChange={(e) => setAddress(e.target.value)}
        value={address}
      />

      <input
        type="text"
        placeholder="Número de telefono"
        onChange={(e) => setPhoneNumbers(e.target.value)}
        value={phoneNumber}
      />

      <input
        type="email"
        placeholder="Correo"
        onChange={(e) => setCorreo(e.target.value)}
        value={correo}
      />

      <input
        type="password"
        placeholder="Contraseña"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <input
        type="password"
        placeholder="Cual es tú rol"
        onChange={(e) => setRole(e.target.value)}
        value={role}
      />

      <button type="submit">Ingresar</button>
    </form>
  );
};

export default SingIn;
