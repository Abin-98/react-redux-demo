import React , {useState} from "react";
import { buyCake  } from "../redux";
import { connect } from "react-redux";

const CakeContainer = (props) => {
  const [num, setNum]=useState(1)
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <button onClick={()=>props.buyCake(num)}>Buy {num} cake&#40;s&#41;</button>
      <input value={num} onChange={(e)=>setNum(e.target.value)} type="number"/>
    </div>
  );
}; 

const mapStateToProps=(state)=>{
    return{
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        buyCake: (num)=>dispatch(buyCake(num))
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(CakeContainer)
