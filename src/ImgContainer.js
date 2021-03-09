import React from 'react'

const ImgContainer = ({images}) => {
    return (
        <section className='showcase'>
            {images.map((image) => (
                <div className="container">
                    <img  src={image.urls.small} alt=""/>
                </div>
                
            ))}
            
        </section>
    )
}

export default ImgContainer
