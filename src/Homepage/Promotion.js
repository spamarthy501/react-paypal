import React from 'react'
import PromotionImage from "../Images/Promotion.png"
import Button from '../Utils/Button';
import Title from '../Utils/Title';

const Promotion = () => {
    return (
        <div className='my-8'>
        <Title>Special Offer</Title>
        <div className='grid grid-cols-2 items-center justify-start bg-[#F4FEF0] p-16 mt-8'>
            <img src={PromotionImage} alt="Promotion" className='w-[60%] ml-20' />
            <div className='ml-32'>
                <h2 className='text-primary font-bold text-2xl'>Special Collection</h2>
                <p className='font-semibold mb-4'>Buy full body pack</p>
                <Button>SHOP NOW</Button>
            </div>
        </div>
        </div>
    )
}

export default Promotion;