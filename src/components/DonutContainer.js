import React from 'react'
import { connect } from 'react-redux'
import { buyDonut } from '../redux'


const DonutContainer = (props) => {
  return (
    <div>
      <h2>Num of donuts - {props.numOfDonuts}</h2>
      <button onClick={()=>props.buyDonut()}>Buy donuts</button>
    </div>
  )
}

const mapStateToProps=(state)=>{
    return {
        numOfDonuts:state.donut.numOfDonuts
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        buyDonut: ()=>dispatch(buyDonut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DonutContainer)
