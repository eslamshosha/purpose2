import React from 'react'
import ProfileInformation from './ProfileInformation'

export default function AddProject() {
    return (

        <div className='profile new-project'>
            <div className="right-side">
                <div className="add-project">
                    <div className="add-project-title">
                        <h2>اضافة مشروع</h2>
                        <span>مشروع جديد</span>
                    </div>
                    <div className="inputs">
                        <input type="text" name="projectName" id="projectName" placeholder='اسم المشروع' className='projectName' />
                        <input type="text" name="description" id="description" className='description' />
                        <select name="space" id="space" className='space'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                        <div className="half-cont">
                            <input type="text" name="start" id="start" placeholder='بداية المشروع' className='start half-width' />
                            <input type="text" name="end" id="end" placeholder='نهاية المشروع' className='end half-width' />
                            <input type="text" name="members" id="members" placeholder='أعضاء  الفريق للمشروع' className='members half-width' />
                            <input type="text" name="Leader" id="Leader" placeholder='قائد المشروع' className='Leader half-width' />
                            <select name="status" id="status" placeholder='حالة المشروع' className='status half-width'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                            <input type="text" name="value" id="value" placeholder='قيمة المشروع' className='value   half-width' />
                        </div>
                        <input type="text" name="source" id="source" placeholder='موارد المشروع' className='source ' />
                        <input type="text" name="link" id="link" placeholder='روابط مرجعية' className='link' />
                        <input type="text" name="file" id="file" placeholder='تحميل ملف' className='filh' />
                    </div>
                </div>
            </div>
            <ProfileInformation></ProfileInformation>
        </div>
    )
}
