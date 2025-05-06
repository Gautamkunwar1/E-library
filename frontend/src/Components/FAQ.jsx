import React from 'react'
import Accordion from './Accordion'

function FAQ() {
    const accordionData = [
        {
            id:1,
            title : "How do I register for an account?",
            desc : "You can sign up using the 'Signup' button on the homepage with your email address."
        },
        {
            id:2,
            title : "Is there a fee to access books?",
            desc : "Most resources are free, but some premium titles may require a subscription."
        },
        {
            id:3,
            title : "Can I download books for offline reading?",
            desc : "Yes, many titles are available for download in PDF or ePub formats."
        },
        {
            id:4,
            title : "How long can I borrow a digital book?",
            desc : "Borrowing periods typically last 14 days but may vary by title."
        },
        {
            id:5,
            title : "What devices are supported?",
            desc : "Our e-library works on desktops, tablets, and smartphones via browser or app.."
        },

    ]
    return (
        <>
            <div className="mb-10">
            <h1 className="text-center text-3xl font-bold mt-20 mb-5">Frequently Asked Questions(FAQ)</h1>
            {
                accordionData.map((data)=>{
                    return <Accordion key= {data.id} title={data.title} desc ={data.desc}/>
                })
            }
            </div>
        </>
    )
}

export default FAQ
