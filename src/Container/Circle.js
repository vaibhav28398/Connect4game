import React,{Component} from 'react'

class Circle extends Component{
    constructor(props)
    {
        super(props)
    }
    
    render(){
        var color="white"
        if(this.props.cell==1)
        color="black"
        if(this.props.cell==2)
        color="red"
        const styles={
            height: '50px',
            width: "50px",
            borderRadius: '25px',
            backgroundColor: color
        }
        return(
            <div style={styles}>                
            </div>
        )
    }
}

export default Circle;