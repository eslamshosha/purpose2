import React from 'react'
import SignSlider from './../../shared-components/SignSlider';
import SignupForm from './SignupForm';
import Bg from "../../../assets/sign-bg.png";

export default function Signup() {
    let swiperArr = [{
        image: Bg,
        title: "التعلم عن بعد",
        pargh: "من اهم مراحل الوقت الحالي في التعليم هو التعليم عن بعد، ندرب أطفالنا بشكل دقيق للتواصل عن بعد "
    },
    {
        image: Bg,
        title: "2 التعلم عن بعد",
        pargh: "من اهم مراحل الوقت الحالي في التعليم هو التعليم عن بعد، ندرب أطفالنا بشكل دقيق للتواصل عن بعد "
    },
    {
        image: Bg,
        title: " 3 التعلم عن بعد",
        pargh: "من اهم مراحل الوقت الحالي في التعليم هو التعليم عن بعد، ندرب أطفالنا بشكل دقيق للتواصل عن بعد "
    },
    {
        image: Bg,
        title: " 3 التعلم عن بعد",
        pargh: "من اهم مراحل الوقت الحالي في التعليم هو التعليم عن بعد، ندرب أطفالنا بشكل دقيق للتواصل عن بعد "
    }]
    return (

        <>
            <section className="page-wrapper">
                <div className="sign-container">
                    <div className="row">
                        <div className="col-lg-6">
                            <SignSlider isSignupPage={true} swiperArr={swiperArr}/>
                        </div>
                        <div className="col-lg-6">
                            <SignupForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
