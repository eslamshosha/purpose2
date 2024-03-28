import React from 'react'

export default function ExamDetails() {
    return (
        <div className='ExamDetails exam-welcome'>
            <div className="welcom-cont">
                <h5>Welcome</h5>
                <div>
                    <p>Assessment</p>
                    <span>This Assessment will help you to find your path in the AI world</span>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="inp1">Department</label>
                        <div className="select-cont">
                            <select name="inp1" id="">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inp2">Section</label>
                        <div className="select-cont">
                            <select name="inp2" id="" >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inp3">Job Tittle</label>
                        <div className="select-cont">
                            <select name="inp3" id="" >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inp4">Years of Exprince</label>
                        <div className="select-cont">
                            <select name="inp4" id="" >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
