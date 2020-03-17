import React, { Component } from 'react';

class NuevoComponente extends Component {

    render() {
        let receta = {
            nombre: 'pizza',
            ingredientes: [
                'Tomate', 'Queso'
            ],
            calorias: 400
        };


        return (
            <div>
                <p>Nombre de la receta: {receta.nombre}</p>
                <p>{'Calorias: '+receta.calorias}</p>
                <ol>
                    {
                        receta.ingredientes.map((ingredientes, i) => {
                            console.log(ingredientes)
                            return(
                                <li key={i}>
                                    {ingredientes}
                                </li>
                            )
                        })
                    }
                </ol>

            </div>
            
        );
    }

}

export default NuevoComponente;