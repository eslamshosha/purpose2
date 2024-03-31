import React from 'react'
import { useOutletContext } from "react-router-dom";


export default function Quiz() {
    console.log(useOutletContext());
    // function enableBtn() {
    //     document.getElementById("nextBtn").removeAttribute("disabled");
    // }
    // let [question] = [{ id: 1, question: "?What is generative artificial intelligence", answars: ["1. Lorem ipsum dolor sit tetur massa tellus.", "2. Lorem ipsum dolor sit tetur massa tellus.", "3. Lorem ipsum dolor sit tetur massa tellus.", "4. Lorem ipsum dolor sit tetur massa tellus."], type: "form" }]

    const [question] = useOutletContext();

    if (useOutletContext()[0] === undefined) {
        return (
            <div className='ExamDetails exam-welcome'>
                <div className="welcom-cont">
                    Click Button Below to Restart Exam ..!!
                </div>
            </div>
        )
    }
    else {
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
                                    <div className="form-group" id='form-group'>
                                        <label className="select-cont" for={ele} >
                                            <input type="radio" id={ele} name={question.type === "multi" ? ele : "ans"} className='radio-btn'>
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
}