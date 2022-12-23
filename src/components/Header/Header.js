import React from "react";
import {useHistory} from 'react-router-dom';

import './styles.css';

export default function Header(){
    const history = useHistory();

    function handleFavorites(){
        history.push('/favoritos');
    }

    return(
        <div>
            <div className="container header">
                <div className="header-content">
                    <h1 className="title">Lista de Livros Google</h1>
                </div>
                <div className="favorite">
                    <button onClick={()=>handleFavorites()} className="button">Favoritos</button>
                </div>
            </div>
        </div>
    )
}
