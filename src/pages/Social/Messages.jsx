import React from 'react'
import mess from '../../assets/mess.png'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link, useLocation } from 'react-router-dom';
import MessegesFriends from './MessegesFriends';
import MessegesBody from './MessegesBody'

export default function Messages() {
    const location = useLocation();
    let id = location.pathname.slice(15);
    id = id - 1

    return (

        <div className={id>=0?"body-main":"names-main"}>
            <div className="message">
            {id>=0?<MessegesBody></MessegesBody>:<div className='messegIMG'><LazyLoadImage src={mess}></LazyLoadImage></div>}
                <MessegesFriends></MessegesFriends>
            </div>
        </div>
    )
}
