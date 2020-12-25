import React, {useEffect, useState} from 'react';
import { base_url_2} from "./utils";

const User = (props) => {
    const [joke, setJoke] = useState('');

    useEffect(() => {
        fetch(base_url_2, {
            headers: {Accept: "application/json"}
        }).then(response => response.json())
            .then(data => setJoke(data.joke))
    }, []);

    return (

            <div className='row form '>
                <div className='col-2 '>
                    <img src={props.profile.picture.medium}/>
                </div>
                <div className='col-10 '>
                    <h6 className='name m-0 p-0'>{props.profile.name.first} {props.profile.name.last}</h6>
                    <p className='text m-0 p-0'>{joke}</p>
                </div>
            </div>

    );
};

export default User;