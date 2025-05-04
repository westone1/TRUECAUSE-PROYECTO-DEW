import React from "react";
import { Link } from "react-router-dom";

function Modal() {
    return (
        <>
            <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modalVih"
            >
                Quiero ser parte
            </button>
            <div
                className="modal fade"
                id="modalVih"
                tabIndex="-1"
                aria-labelledby="modalVihLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="modalVihLabel">
                                Únete a la causa
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Cerrar"
                            ></button>
                        </div>
                        <div className="modal-body">
                            Gracias por tu interés en formar parte de esta iniciativa. Juntos podemos hacer la diferencia.
                        </div>
                        <div className="modal-footer">
                            <Link to="/contacto" style={{ textDecoration: 'none', color: 'white' }}>
                                <button type="button" className="btn btn-primary">
                                    Regístrate
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Modal;