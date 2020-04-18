import React,{Component} from 'react'
import Box from './Box.js'

class Row extends Component{
    constructor(props){
        super(props)
    }
    render(){
        var cell=[]
        for (let i=0;i<7;i++)
        cell.push(<Box key={i} row={this.props.row} col={i} cell={this.props.cells[i]} handleClick={this.props.handleClick}/>)
        
        const styles={
            display:'flex'
        }
        
        return(
            <div style={styles}>
                {cell}
            </div>
        )
    }
}

export default Row;