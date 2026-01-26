import React from 'react'
import RightCard from './RightCard'
import RightCardContent from './RightCardContent'

const RightContent = (props) => {
  
  return (
    <div id="right" className='h-full w-2/3 overflow-x-auto flex flex-nowrap gap-10 p-6'>
    {props.user.map(function(elem , idx){
return <RightCard  key={idx} id={idx}  color={elem.color}img={elem.img} tag={elem.tag}/>
    })}
   </div>
  )
}

export default RightContent