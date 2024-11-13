import React from 'react'
import { sofaCategories } from '../../utils/Utils'

const CategorePG = () => {
  return (
    <div>
        <div className="body w-full h-full bg-black p-10 rounded-2xl">
            <div className="title grid grid-cols-3">
                <h1 className=' text-white capitalize font-PT font-extralight text-9xl'>category..</h1>
                <button className=' w-full border-b-[1px] text-white'>play</button>
            </div>
            <div className="cate_body grid grid-cols-2 ">
                <div className="blank_div">

                </div>
            <div className="categorys grid grid-cols-3 w-4/5 h-full mx-auto gap-4">
                {
                    sofaCategories.map(abc => <SofaCard key={abc.id} card={abc}></SofaCard>)
                }
            </div>
            </div>
        </div>
    </div>
  )
}


export default CategorePG


const SofaCard = ({card}) =>{
    const {name,number,image,title,category} = card
    return(
        <div className=' bg-zinc-950 p-6 w-full h-[50vh] rounded-xl'>
            <div className="numbers">
                <p className=' text-zinc-200 font-PT text-5xl'>{number}</p>
            </div>
            <div className="infor space-y-10 ">
                <img className=' rounded' src={image} alt="" />
                <p className=' text-3xl text-zinc-200 font-PT uppercase '>{title}</p>
                <p className=' text-orange-400'>{category}</p>
            </div>
        </div>
    )
}