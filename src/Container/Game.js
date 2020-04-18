import React,{Component} from 'react'
import Grid from './Grid'

class Game extends Component{
    constructor(props)
    {
        super(props)
        var cell=[]
        for(let i=0;i<6;i++)
        {
            var l=[]
            for(let j=0;j<7;j++)
            l.push(0)
            cell.push(l)
        }
        this.state={
            player:false,
            cells:cell,
            winner:0
        }
    }
    checkDiagonal(row,col){
        //find right and left tops
        var c = this.state.cells;
        var val = this.state.player? 2:1;
        var rR = row;
        var cR = col;
        while(rR < 5 && cR < 6){
            rR++; 
            cR++;
        }

        while( rR >= 3 && cR >= 3){
            if(c[rR][cR] == val && c[rR-1][cR-1] == val && c[rR-2][cR-2] == val && c[rR-3][cR-3] == val){
                return 1
            }
            rR--
            cR--
        }   

        var rL = row;
        var cL = col;

        while(rL < 5 && cL > 0){
            rL++
            cL--
        }

        while(rL >= 3 && cL <= 3){
            if(c[rL][cL] == val && c[rL-1][cL+1] == val && c[rL-2][cL+2] == val && c[rL-3][cL+3] == val){
                return 1
            }
            rL--
            cL++
        }
        return 0
    }
    checkHorizontal(row,col){
        var c = this.state.cells;
        var i = 6;
        var val = this.state.player? 2:1;

        while( i >= 3){
            if(c[row][i] == val && c[row][i-1] == val && c[row][i-2] == val && c[row][i-3] == val){
                return 1
            }
            i--
        }
        return 0
    }
    checkVertical(row,col){
        var c = this.state.cells;
        var i = row;
        var val = this.state.player? 2: 1;

        if(i >= 3){
            if(c[i][col] == val && c[i - 1][col] == val && c[i - 2][col] == val && c[i - 3][col] == val){
                return 1
        }
        }
        return 0

    }
    checkVictory(row,col){
        return this.checkVertical(row,col)   || this.checkHorizontal(row,col) ||   this.checkDiagonal(row,col)


    }
    handleClick=(row,col)=>{
        if(this.state.winner)
            return
        console.log('Clicked'+row)
        var temp=[]
        for(let i=0;i<6;i++)
        {
            var l=[]
            for(let j=0;j<7;j++)
            l.push(this.state.cells[i][j])
            temp.push(l)
        }
        for(let i=5;i>=0;i--)
        {
            if(this.state.cells[i][col]==0)
            {row=i
                break}
        }
        temp[row][col]=this.state.player?1:2;
        this.setState({cells:temp,player:!this.state.player},()=>{
            if(this.checkVictory(row,col) > 0){
                console.log("win")
                this.setState({winner:this.state.player?2:1})
            }
        })
    }
    
    restart(){
        var cells = [];
        for(let i = 0; i < 6; i++ ){
          cells.push(new Array(7).fill(0));
        }
        this.setState({ player : false, cells : cells, winner:0})
    }
    render(){
        return (
            <div>
                <h1>{this.state.winner > 0 ?  this.state.winner == 1? "Black Wins":"Red Wins": this.state.player? "Blacks Turn" : "Reds Turn"}</h1>
                <Grid cells={this.state.cells} handleClick={this.handleClick}/>
                <button onClick = { () => this.restart()}>Restart</button>   
            </div>
        )
    }

}

export default Game