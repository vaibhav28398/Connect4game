import React,{Component} from 'react'
import Circle from './Circle.js'

class Box extends Component{
    constructor(props){
        super(props)
    }
    render(){

        const styles={
            height:'50px',
            width: '50px',
            backgroundColor:'yellow'
        }
        return(
            <div style={styles} onClick={()=>this.props.handleClick(this.props.row,this.props.col)}>
                <Circle cell={this.props.cell}/>
            </div>
        )
    }
}

export default Box;