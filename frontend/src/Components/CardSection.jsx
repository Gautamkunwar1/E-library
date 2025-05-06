import React from 'react'

function CardSection({heading, description ,children}) {
    return (
        <>
        {heading &&   <h2 className='text-4xl font-bold text-center mt-15 '>{heading}</h2>}
        {description && <p className='text-center mt-2 text-lg'>{description}</p> }
        
        {children}
        
        </>
    )
}

export default CardSection
