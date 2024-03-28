import React from 'react'
import { useOutletContext } from "react-router-dom";


export default function Quiz() {
    const [question] = useOutletContext();
    console.log(question);
    return (
        <div className="quiz">
            <div className='ExamDetails exam-welcome'>
                <div className="welcom-cont">
                    <p>{question.question}</p>
                    {question.type == "area" ?
                        <div className="form-group">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Type here ...'></textarea>
                        </div>
                        :
                        <div className={question.type}>
                            {question.answars.map((ele) =>
                                <div className="form-group">
                                    <label className="select-cont" for={ele}>
                                    <input type="radio" id={ele} name={question.type==="multi"?ele:"ans"} className='radio-btn'>
                                    </input>
                                        {ele}
                                    </label>
                                </div>
                            )}
                        </div>}
                </div>
            </div>
        </div>
    )
}
