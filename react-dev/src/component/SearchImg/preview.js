import React from 'react'

function Preview({ src }) {
    return (
        <div className='preview-img'>
            <img src={src}/>
        </div>
    )
}

export default Preview