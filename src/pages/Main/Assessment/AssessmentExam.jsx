import React, { useState } from 'react'
import logo from '../../../assets/logo.png'

import { Link, Outlet} from 'react-router-dom';

export default function AssessmentExam() {
    let acctuWid;
    let widt;
    let btnName = "Start Now";
    const [num, setNum] = useState(-1);
    let numLink = num+1;
    let activeBtnTo = "";
    if (num <= 0) {
        acctuWid = 0;
        widt = acctuWid / 20 * 100;
        btnName = "Start Now";
        activeBtnTo="activeBtnTo";

    }
    else if(num < 20){
        btnName = "Continue";
        acctuWid = num;
        widt = num / 20 * 100;
    }
    else if (num === 20){
        btnName = "Finish";
        acctuWid = num;
        widt = 100;
        numLink = "";
    }
    else{
        btnName = "Finish";
        setNum(-1);
        acctuWid = num;
        widt = 100;
        numLink = "";
    }
    let arr = [
        {id : num ,question:"?What is generative artificial intelligence" , answars:["1. Lorem ipsum dolor sit tetur massa tellus.","2. Lorem ipsum dolor sit tetur massa tellus.","3. Lorem ipsum dolor sit tetur massa tellus.","4. Lorem ipsum dolor sit tetur massa tellus."], type:"form"},
        {id : num ,question:"?What is generative artificial intelligence" , answars:["totally agree","agree","neutral","Don’t agree","Strongly Disagree"], type:"multi"},
        {id : num ,question:"?What are the top 3 job skills you would like to develop yourself in with the help of artificial intelligence" , answars:[], type:"area"},
        {id : num ,question:"?What is generative artificial intelligence" , answars:["1. Lorem ipsum dolor sit tetur massa tellus.","2. Lorem ipsum dolor sit tetur massa tellus.","3. Lorem ipsum dolor sit tetur massa tellus.","4. Lorem ipsum dolor sit tetur massa tellus."], type:"form"},
        {id : num ,question:"?What is generative artificial intelligence" , answars:["totally agree","agree","neutral","Don’t agree","Strongly Disagree"], type:"multi"},
        {id : num ,question:"?What are the top 3 job skills you would like to develop yourself in with the help of artificial intelligence" , answars:[], type:"area"},
        {id : num ,question:"?What is generative artificial intelligence" , answars:["1. Lorem ipsum dolor sit tetur massa tellus.","2. Lorem ipsum dolor sit tetur massa tellus.","3. Lorem ipsum dolor sit tetur massa tellus.","4. Lorem ipsum dolor sit tetur massa tellus."], type:"form"},
        {id : num ,question:"?What is generative artificial intelligence" , answars:["totally agree","agree","neutral","Don’t agree","Strongly Disagree"], type:"multi"},
        {id : num ,question:"?What are the top 3 job skills you would like to develop yourself in with the help of a- rtificial intelligence" , answars:[], type:"area"},
        {id : num ,question:"?What is generative artificial intelligence" , answars:["1. Lorem ipsum dolor sit tetur massa tellus.","2. Lorem ipsum dolor sit tetur massa tellus.","3. Lorem ipsum dolor sit tetur massa tellus.","4. Lorem ipsum dolor sit tetur massa tellus."], type:"form"},
        {id : num ,question:"?What is generative artificial intelligence" , answars:["totally agree","agree","neutral","Don’t agree","Strongly Disagree"], type:"multi"},
        {id : num ,question:"?What are the top 3 job skills you would like to develop yourself in with the help of artificial intelligence" , answars:[], type:"area"},
        {id : num ,question:"?What is generative artificial intelligence" , answars:["1. Lorem ipsum dolor sit tetur massa tellus.","2. Lorem ipsum dolor sit tetur massa tellus.","3. Lorem ipsum dolor sit tetur massa tellus.","4. Lorem ipsum dolor sit tetur massa tellus."], type:"form"},
        {id : num ,question:"?What is generative artificial intelligence" , answars:["totally agree","agree","neutral","Don’t agree","Strongly Disagree"], type:"multi"},
        {id : num ,question:"?What are the top 3 job skills you would like to develop yourself in with the help of artificial intelligence" , answars:[], type:"area"},
        {id : num ,question:"?What is generative artificial intelligence" , answars:["1. Lorem ipsum dolor sit tetur massa tellus.","2. Lorem ipsum dolor sit tetur massa tellus.","3. Lorem ipsum dolor sit tetur massa tellus.","4. Lorem ipsum dolor sit tetur massa tellus."], type:"form"},
        {id : num ,question:"?What is generative artificial intelligence" , answars:["totally agree","agree","neutral","Don’t agree","Strongly Disagree"], type:"multi"},
        {id : num ,question:"?What are the top 3 job skills you would like to develop yourself in with the help of artificial intelligence" , answars:[], type:"area"},
        {id : num ,question:"?What is generative artificial intelligence" , answars:["1. Lorem ipsum dolor sit tetur massa tellus.","2. Lorem ipsum dolor sit tetur massa tellus.","3. Lorem ipsum dolor sit tetur massa tellus.","4. Lorem ipsum dolor sit tetur massa tellus."], type:"form"},
        {id : num ,question:"?What is generative artificial intelligence" , answars:["totally agree","agree","neutral","Don’t agree","Strongly Disagree"], type:"multi"},
    ]
    function addNum() {
        setNum(num + 1)
    }
    return (
        <div className='assessment-exam'>
            <div className="exam-head">
                <div className="cont">
                    <div className="logo"><img src={logo} alt='logo'></img></div>
                    <div className="progres">
                        <div className="prg-bar" style={{ width: widt + "%" }}>
                        </div>
                    </div>
                    <div className="close"><i className="fa-solid fa-xmark"></i></div>
                </div>
            </div>
        <Outlet context={[arr[num-1]]}></Outlet>
            
            <div className={activeBtnTo + " exam-footer"}>
                <div className=" counter"><span>{acctuWid}</span>/20</div>
                <Link to={"/main/assessment/assessment-exam/"+numLink}><button onClick={addNum}  id='nextBtn'>{btnName}</button></Link>

            </div>
        </div>
    )
}
