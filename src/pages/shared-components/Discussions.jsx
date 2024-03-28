import React from 'react'
import member1 from "../../assets/Main/team/2.png"
import member2 from "../../assets/Main/team/4.png"
import member3 from "../../assets/Main/team/5.png"

export default function Discussions() {
    let comments = [
        { img: member1, username: "محمد علي", title: "ولي امر طالب", time: "منذ ساعتين", comment: "في هذا الشابتر، سيتمكن الطفل من استخدام الأدوات الاساسية للبرنامج ويبدأ بالتعامل شيء فشيء. سيُنشؤون تطبيقات وألعاب للهواتف الذكية، ويبدؤون في البرمجة على الفور، ويخطون أولى خطواتهم في الإبداع الرقمي" },
        { img: member2, username: "ياسر أمين", title: "ولي امر طالب", time: "منذ ساعتين", comment: "في هذا الشابتر، سيتمكن الطفل من استخدام الأدوات الاساسية للبرنامج ويبدأ بالتعامل شيء فشيء. سيُنشؤون تطبيقات وألعاب للهواتف الذكية، ويبدؤون في البرمجة على الفور، ويخطون أولى خطواتهم في الإبداع الرقمي" },
        { img: member3, username: "سمية صافي", title: "ولي امر طالب", time: "منذ ساعتين", comment: "في هذا الشابتر، سيتمكن الطفل من استخدام الأدوات الاساسية للبرنامج ويبدأ بالتعامل شيء فشيء. سيُنشؤون تطبيقات وألعاب للهواتف الذكية، ويبدؤون في البرمجة على الفور، ويخطون أولى خطواتهم في الإبداع الرقمي" },
    ]
    return (
        <div className='discussions'>
            {comments.map((ele) => <div className="discuss" key={ele}>
                <div className="user-section">
                    <div className="image">
                        <img src={ele.img} alt="Team Member" />
                    </div>
                    <div className="username">
                        <h3>{ele.username}</h3>
                        <p><spam>{ele.title}</spam> | <span>{ele.time}</span></p>
                    </div>
                </div>
                <div className="comment-section">
                    <p>{ele.comment}</p>
                </div>
            </div>)}
        </div>
    )
}
