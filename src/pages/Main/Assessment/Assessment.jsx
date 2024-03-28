import React from 'react'
import { Link } from 'react-router-dom'

export default function Assessment() {
    return (
        <div className='assessment'>
            <div className="assessment-cont">
                <h2><i className="fa-solid fa-crosshairs"></i>  Assessment</h2>
                <div className="container-class">
                    <div className="tet-field">
                        <p>Here are some tips on how to<br/> improve your score <span>Expansion</span></p>
                    </div>
                    <div className="tet-field">
                        <div className="pers">
                            <p>Digital Dexterity</p><span>35%</span>
                        </div>
                        <div className="pers">
                            <p>AI Impact Risk</p><span>35%</span>
                        </div>
                    </div>
                    <Link to="assessment-exam"><button>Know More</button></Link>
                </div>
            </div>
        </div>
    )
}
