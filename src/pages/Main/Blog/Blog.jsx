import React from 'react'
import { Outlet } from 'react-router-dom'
import BlogArr from './BlogArr';

export default function Blog() {
    return (
        <div className='bolg'>
            <h2>مدونات عالم <span>PURPOSE</span></h2>
            <Outlet/>
            <BlogArr/>
            
        </div>
    )
}
