import React from 'react'

import './List.scss'

import Card from '../Card/Card'

const List = () => {

    const data=[
        {
            id : 1,
            img : "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img2 : "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=411&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title : "Womens Clothes 1",
            isNew : true,
            oldPrice : 190,
            price : 100,
        },
        {
            id : 2,
            img : "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img2 : "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title : "Womens Clothes 2",
            isNew : true,
            oldPrice : 200,
            price : 150,
        },
        {
            id : 3,
            img : "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img2 : "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=411&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title : "Womens Clothes 3",
            isNew : true,
            oldPrice : 190,
            price : 100,
        },
        {
            id : 4,
            img : "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img2 : "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title : "Womens Clothes 4",
            isNew : true,
            oldPrice : 200,
            price : 150,
        },
    ];

    return (
    <div className='list'>
        {
            data.map((item)=><Card item={item} key={item.id}/>)
        }
    </div>
    )
}

export default List
