import React from "react";
import {useHistory} from 'react-router-dom';

import './styles.css';

export default function Header(){
    const history = useHistory();

    function handleHome(){
        history.push('/');
    }

    return(
        <div>
            <div className="container header">
                <div className="header-content">
                    <h1 className="title">Lista de Livros Favoritos</h1>
                </div>
                <div className="favorite">
                    <button onClick={()=>handleHome()} className="button">Home</button>
                </div>
            </div>
        </div>
    )
}
