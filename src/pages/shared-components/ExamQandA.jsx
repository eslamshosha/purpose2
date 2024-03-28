import React from 'react'

export default function ExamQandA() {
    let questions = [
        {id :"1" ,Qname: "السؤال الأول:", questio: " في C ++ ، الـ cout موجود في أي مكتبة؟", Option1: "math.h", option2: "ctype.h", option3: "iostream.h0", option4: "stdlib.h" },
        {id :"2" ,Qname: "السؤال الثانى:", questio: "  ما نوع البيانات الذي يمكن استخدامه لعمل حرف عريض في C ++؟", Option1: "int", option2: "none of the above", option3: "wchar_t", option4: "stdlib.h" },
        {id :"3" ,Qname: "السؤال الثالث:", questio: " في C ++ ، الـ cout موجود في أي مكتبة؟", Option1: "math.h", option2: "ctype.h", option3: "iostream.h0", option4: "stdlib.h" },
    ]
    return (
        <div className="exam-cont">
            {questions.map((question) =>
                <div className="question" kwy={question}>
                    <div className="quest-name">
                        <p><span>{question.Qname}</span>{question.questio}</p>
                    </div>
                    <div className="options">
                        <label className="check-label">
                            <input type="radio" name={question.id} />
                            <span className="check-text">{question.Option1}</span>
                        </label>
                        <label className="check-label">
                            <input type="radio" name={question.id} />
                            <span className="check-text">{question.option2}</span>
                        </label>
                        <label className="check-label">
                            <input type="radio" name={question.id} />
                            <span className="check-text">{question.option3}</span>
                        </label>
                        <label className="check-label">
                            <input type="radio" name={question.id} />
                            <span className="check-text">{question.option4}</span>
                        </label>
                    </div>
                </div>
            )}
        </div>
    )
}
