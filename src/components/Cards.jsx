import React from 'react'
import Card from './Card'

function Cards() {
    return (
        <div className='max-w-screen-xl mx-auto py-20 flex gap-2'>
            <Card width={"basis-1/3"} start={false} param={true} />
            <Card width={"basis-2/3"} start={true} param={false} hov={"bg-purple-700"} />
        </div>
    )
}

export default Cards