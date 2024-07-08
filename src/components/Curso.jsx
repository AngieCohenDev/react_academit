import React from 'react'

export const Curso = ({ title, text, image, link }) => {
    return (
        <a href={link}>
            <div className='overflow-hidden border-4 bg-slate-200'>
                <img src={image} alt=""/>
                <h1 className='font-sans text-xl bold' style={{paddingTop: '5px', paddingBottom: '2px'}}>{title}</h1>
                <p className='font-sans' style={{paddingTop: '2px', paddingBottom: '2px'}}>{text}</p>
            </div>
        </a>
    )
}
