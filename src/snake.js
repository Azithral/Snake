import { Component } from "react";
import BodyMovement from "./bodyMovement";
import GameStats from "./GameStats";

class Snake extends Component {

    state = {
        direction: 'East',
        Top: 260,
        Left:240,
        stopTimer: false,
        body:[[240,240],[220,240],[200,240],[180,240],[160,240],[140,240],[120,240]],
        fruit: [180,250],
        score:0,
        timer: null,
        gameover:false
    }

    handleFruit = () => {
        let x = Math.floor(Math.random() * 480);
        x = x - (x%20);
        let y = Math.floor(Math.random() * 480);
        y = y - (y%20);
        this.setState({fruit:[x,y]});     
        //console.log(x,y);

    }

    handlebite = (x,y) => {
        for(let i =0;i<this.state.body.length;i++)
        {
            if(x === this.state.body[i][0] && y === this.state.body[i][1])
            {
                this.handleGameOver();
            }
        }
    }


    

    handleRestart = () => {  
        this.setState({
            direction: 'East',
            Top: 260,
            Left:240,
            stopTimer: false,
            body:[[240,240],[220,240],[200,240],[180,240],[160,240],[140,240],[120,240]],
            fruit: [180,240],
            score:0,
            timer: null,
            gameover:false
        });
        this.handleFruit();
        this.setState({timer : setInterval(
            () => {
                let prev_t = this.state.Top;
                let prev_l = this.state.Left;
                if(this.state.direction === "South")
                {
                    if(this.state.Top < 480)
                    {
                        this.handlebite(this.state.Top  + 20 , this.state.Left);
                        this.setState({Top: this.state.Top + 20});
                    }
                    else{
                        this.handlebite(0 , this.state.Left);
                        this.setState({Top:0});
                    }                   
                }
                else if(this.state.direction === "North")
                {
                    if(this.state.Top > 0)
                    {
                        this.handlebite(this.state.Top -20 , this.state.Left);
                        this.setState({Top: this.state.Top - 20});
                    }
                    else{
                        this.handlebite(480 , this.state.Left);
                        this.setState({Top:480});
                    }
                }
                else if(this.state.direction === "West")
                {
                    if(this.state.Left > 0)
                    {
                        this.handlebite(this.state.Top , this.state.Left -20);
                        this.setState({Left: this.state.Left - 20});
                    }
                    else{
                        this.handlebite(this.state.Top , 480);
                        this.setState({Left:480});
                    }
                }
                else if(this.state.direction === "East")
                {
                    if(this.state.Left <480)
                    {
                        this.handlebite(this.state.Top , this.state.Left +20 );
                        this.setState({Left: this.state.Left + 20});
                    }
                    else{
                        this.handlebite(this.state.Top , 0);
                        this.setState({Left:0});
                    }
                }

                let newBody = []
                for(let i=0;i<this.state.body.length;i++)
                {
                    newBody.push([prev_t,prev_l]);
                    prev_t = this.state.body[i][0];
                    prev_l = this.state.body[i][1];
                }
                

                if(this.state.Top === this.state.fruit[0] && this.state.Left === this.state.fruit[1])
                {
                    this.handleFruit();
                    newBody.push([prev_t,prev_l]);
                    this.setState({score:this.state.score + 1});
                }

                this.setState({body:newBody});


                }, 100)     
            });
    }


    handleGameOver = () => {
        clearInterval(this.state.timer);
        this.setState({gameover:true});
    }

    handleKeyDown = (event) => {
        if((event.key === 'w' || event.key === 'ArrowUp') && (this.state.direction !== "North" && this.state.direction !== "South")){
            this.setState({direction:"North"});
        }
        else if((event.key === 's'  || event.key === 'ArrowDown') && (this.state.direction !== "North" && this.state.direction !== "South"))
        {
            this.setState({direction:"South"});
        }
        else if((event.key ==='a' || event.key === 'ArrowLeft') && ( this.state.direction !== "West" && this.state.direction !=="East"))
        {
            this.setState({direction:"West"});
        }
        else if((event.key === 'd' || event.key ==='ArrowRight') && (this.state.direction !== "West" && this.state.direction !=="East"))
        {
            this.setState({direction:"East"});
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
        this.handleRestart();
       }

    componentWillUnmount() {
        clearInterval(this.state.timer);
        window.removeEventListener('keydown', this.handleKeyDown);
      }


    render() {
        return ( 
            <div className="snakegame">
                <div className="arena">
                    <div className="head" style={{top: this.state.Top +'px', left : this.state.Left + 'px'} }></div>
                    <div className="fruit" style={{top: this.state.fruit[0] + 'px',left:this.state.fruit[1] + 'px'}}></div>
                    <BodyMovement body={this.state.body}/>
                    <div className="gameover">
                        { this.state.gameover && <GameStats score={this.state.score} restart={()=>this.handleRestart()}/>}
                    </div>
                </div>
                
                {!this.state.gameover && <div className="info">
                    <p>Score : {this.state.score}</p>
                </div>}
            </div>
         );
    }    
}
 
export default Snake;