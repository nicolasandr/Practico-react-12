import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import ListaNoticias from './ListaNoticias';
import consultarAPI from './helpers/getNoticias';

const options = [
    { value: 'business', label: 'business' },
    { value: 'entertainment', label: 'entertainment' },
    { value: 'general', label: 'general' },
    { value: 'health', label: 'health' },
    { value: 'science', label: 'science' },
    { value: 'sports', label: 'sports' },
    { value: 'technology', label: 'technology' },
];
const optionsPais = [
    { value: 'en', label: 'Austria' },
    { value: 'ar', label: 'Argentina' },
    { value: 'ru', label: 'Rusia' },
    { value: 'us', label: 'Estados Unidos' },
    { value: 'fr', label: 'Francia' },
    { value: 'br', label: 'Brazil' },
];

const Formulario = () => {
    const [arregloNoticiass, setArregloNoticias] = useState([]);
    const [categorias, setvalueCategorias] = useState('general');
    const [pais, setvaluePais] = useState('ar');

    const onDropdownChange = (e) => {
        setvalueCategorias(e.value);
    };
    const onChange = (e) => {
        setvaluePais(e.value);
    };
    useEffect(() => {
     consultarAPI(categorias,pais,setArregloNoticias);
    }, [categorias, pais]);

    return (
        <div>
            <div className="container py-3">
                <div className="row text-center border py-4">
                    <div className="col-12 col-md-6">
                        <h5>Buscar por categoria:</h5>
                    </div>
                    <div className="col-12 col-md-6">
                        <Select
                            options={options}
                        
                            onChange={onDropdownChange}
                        ></Select>
                    </div>
                </div>
                <div className="row text-center border py-4">
                    <div className="col-12 col-md-6">
                        <h5>Buscar por Pais:</h5>
                    </div>
                    <div className="col-12 col-md-6">
                        <Select
                            options={optionsPais}

                            onChange={onChange}
                        ></Select>
                    </div>
                </div>

                <ListaNoticias
                    arregloNoticias={arregloNoticiass}
                ></ListaNoticias>
            </div>
        </div>
    );
};

export default Formulario;
