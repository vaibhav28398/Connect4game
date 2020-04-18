import React,{Component} from 'react'
import Row from './Row.js'

class Grid extends Component{
    render(){
        var cell=[]
        for (let i=0;i<6;i++)
        cell.push(<Row key={i} row={i} handleClick={this.props.handleClick} cells={this.props.cells[i]} />)
        
        return(
            <div>
                {cell}
            </div>
        )
    }
}

export default Grid;