import React from 'react';
import {useWebId} from '@solid/react';
//import "./Welcome.css";

export const User = props => {
    const webId = useWebId();

    return (
        <section>
            <div className="col-sm">
                <span>Estas logueado como: <a href={webId}>{webId}</a></span>
            </div>
                
        </section>
    );
}

export default User;