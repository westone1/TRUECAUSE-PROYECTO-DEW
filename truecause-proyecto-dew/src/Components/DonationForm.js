import React, { useState,useEffect } from "react";
import  '../css/body/contacto/DonationForm.css'
import Footer from "../Components/Footer.js";


function DonacionForm() {
  useEffect(() => {
    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) {
      backdrop.remove();
    }
    document.body.classList.remove('modal-open');
    document.body.style.overflow = 'auto'; 
  }, []);

  const [formData, setFormData] = useState({
    empresa: "",
    correo: "",
    telefono: "",
    causa: "",
    comentario: "",
    acepto: false,
  });

  const [donaciones, setDonaciones] = useState([]);

  const manejarCambio = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const manejarEnviar = (e) => {
    e.preventDefault();
    setDonaciones([...donaciones, formData]);
    setFormData({
      empresa: "",
      correo: "",
      telefono: "",
      causa: "",
      comentario: "",
      acepto: false,
    });
  };

  return (
    <>
    <div className="form-mainContainer">
      <form className="donacion-form " onSubmit={manejarEnviar}>
        <h1>Unete a Lucha</h1>
        <label>Nombre de la Empresa</label>
        <input
          type="text"
          name="empresa"
          value={formData.empresa}
          onChange={manejarCambio}
          required
        />

        <label>Correo de Contacto</label>
        <input
          type="email"
          name="correo"
          value={formData.correo}
          onChange={manejarCambio}
          required
        />

        <label>Teléfono de la Empresa</label>
        <input
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={manejarCambio}
          pattern="[0-9]{7,15}"
          required
        />

        <label>Causa a Apoyar</label>
        <select
          name="causa"
          value={formData.causa}
          onChange={manejarCambio}
          required
        >
          <option value="">Seleccione una causa</option>
          <option value="Educación">
            Educación
          </option>
          <option value="Acceso a la atencion médica">
            Acceso a la atencion médica
          </option>
          <option value="Personas que conviven VIH ">
            Personas que conviven VIH{" "}
          </option>
          <option value="Otras">Otras</option>
        </select>

        <label>Mensaje o Comentario Opcional</label>
        <textarea
          name="comentario"
          value={formData.comentario}
          onChange={manejarCambio}
        />

        <div className="checkbox">
          <input
            type="checkbox"
            name="acepto"
            checked={formData.acepto}
            onChange={manejarCambio}
            required
          />
          <label>Acepto los términos y condiciones</label>
        </div>

        <button type="submit">Registrar Donación</button>
      </form>

      {donaciones.length > 0 && (
        <div className="donations-table">
          <h2> Ultimos Afiliados</h2>
          <table>
            <thead>
              <tr>
                <th>Donante</th>
                <th>Correo</th>
                <th>Causa</th>
                <th>Comentario</th>
              </tr>
            </thead>
            <tbody>
              {donaciones.map((donacion, index) => (
                <tr key={index}>
                  <td>{donacion.empresa}</td>
                  <td>{donacion.correo}</td>
                  <td>{donacion.causa}</td>
                  <td>{donacion.comentario}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
}

export default DonacionForm;
