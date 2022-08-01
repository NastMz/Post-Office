import React, {useEffect, useRef, useState} from "react";
import './AlertModal.css';
import {store} from "../../Redux/store";
import {alertDelete, closeAlert, resetAlertMessage} from "../../Redux/ReducersUtils/reducersList";

export const AlertModal: React.FC = () => {

    const alertRef = useRef<any>(null);

    const [isOpen, setOpen] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<Array<string>>([]);

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickBackground);
        } else {
            document.removeEventListener('mousedown', handleClickBackground);
        }
    }, [isOpen])

    const handleClickBackground = (e: MouseEvent) => {
        if (alertRef.current && store.getState().alertReducer.status && !alertRef.current.contains(e.target)) {
            store.dispatch(closeAlert());
            store.dispatch(resetAlertMessage());
        }
    };

    const handleClickAccept = () => {
        if (store.getState().alertReducer.message[0] === '¿Esta seguro que desea eliminar este correo?' || store.getState().alertReducer.message[0] === '¿Esta seguro que desea eliminar estos correos?') {
            store.dispatch(alertDelete());
        }
        store.dispatch(closeAlert());
        store.dispatch(resetAlertMessage());
    };

    const handleClickClose = () => {
        store.dispatch(closeAlert());
        store.dispatch(resetAlertMessage());
    };

    store.subscribe(() => {
        setOpen(store.getState().alertReducer.status);
        setAlertMessage(store.getState().alertReducer.message);
    });

    return (
        <div className={`alert-modal-background ${isOpen ? 'show' : 'hidde'}`}>
            <div ref={alertRef} className={`alert-modal-container ${isOpen ? 'show' : 'hidde'}`}>
                <div className={`alert-modal`}>
                    <div className={'close-alert-btn'} onClick={handleClickClose}>
                        X
                    </div>
                    <div className={'alert-title'}>
                        ¡Atención!
                    </div>
                    <div className={'alert-message'}>
                        {
                            alertMessage.toString().replaceAll(',', '\n')
                        }
                    </div>
                    <div className={'alert-btn'} onClick={handleClickAccept}>
                        Aceptar
                    </div>
                </div>
            </div>
        </div>
    )
}