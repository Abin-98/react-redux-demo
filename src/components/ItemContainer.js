import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

const ItemContainer = (props) => {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button onClick={props.buyitem}>Buy Item</button>
    </div>
  )
}

const mapStateToProps=(state, ownProps)=>{
    const items=ownProps.cake?state.cake.numOfCakes:state.iceCream.numOfIceCreams
    return{
        item:items
    }
}
const mapDispatchToProps=(dispatch, ownProps)=>{
    const dispatchfn=ownProps.cake?()=>dispatch(buyCake()):()=>dispatch(buyIceCream())
    return {
        buyitem:dispatchfn
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)
