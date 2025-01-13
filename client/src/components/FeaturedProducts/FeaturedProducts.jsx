import React from 'react'
import './FeaturedProducts.scss'
import Card from '../Card/Card'

const FeaturedProducts = ({type}) => {

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
    <div className='featured-products'>
        <div className="top">
            <h1>{type} Featured Products</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt unde ex consequatur vel sint architecto ratione praesentium ut at? Deleniti fuga illo quisquam similique!</p>
        </div>
        <div className="bottom">
            {
                data.map(item=>(
                    // <div className="item" key={item.id} >
                    //     <div className="left">
                    //         <img src={item.img} alt="" />
                    //     </div>
                    //     <div className="right">
                    //         <h1>{item.title}</h1>
                    //         <h2>{item.oldPrice}</h2>
                    //         <h3>{item.price}</h3>
                    //     </div>
                    // </div>
                    <Card item={item} key={item.id} />
                ))
            }
        </div>
    </div>
    )
}

export default FeaturedProducts
