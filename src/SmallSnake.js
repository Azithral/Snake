import {Component} from 'react';
import BodyMovement from './bodyMovement';
import GameStats from './GameStats';

class SmallSnake extends Component {
    state = {
        direction: 'South',
        Top: 250,
        Left:240,
        stopTimer: false,
        body:[[240,240],[230,240],[220,240],[210,240],[200,240],[190,240],[180,240]],
        fruit: [180,250],
        score:0,
        timer: null,
        gameover:false,
        rightarrow:"\u{27A1}",
        leftarrow: "\u{2B05}",
        uparrow:"\u{2B06}",
        downarrow:"\u{2B07}"

    }


    handleFruit = () => {
        let x = Math.floor(Math.random() * 390);
        x = x - (x%10);
        let y = Math.floor(Math.random() * 390);
        y = y - (y%10);
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
            direction: 'South',
            Top: 250,
            Left:240,
            stopTimer: false,
            body:[[240,240],[230,240],[220,240],[210,240],[200,240],[190,240],[180,240]],
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
                    if(this.state.Top < 390)
                    {
                        this.handlebite(this.state.Top  + 10 , this.state.Left);
                        this.setState({Top: this.state.Top + 10});
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
                        this.handlebite(this.state.Top -10 , this.state.Left);
                        this.setState({Top: this.state.Top - 10});
                    }
                    else{
                        this.handlebite(390 , this.state.Left);
                        this.setState({Top:390});
                    }
                }
                else if(this.state.direction === "West")
                {
                    if(this.state.Left > 0)
                    {
                        this.handlebite(this.state.Top , this.state.Left -10);
                        this.setState({Left: this.state.Left - 10});
                    }
                    else{
                        this.handlebite(this.state.Top , 390);
                        this.setState({Left:390});
                    }
                }
                else if(this.state.direction === "East")
                {
                    if(this.state.Left <390)
                    {
                        this.handlebite(this.state.Top , this.state.Left +10 );
                        this.setState({Left: this.state.Left + 10});
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

    handleClick = (arrow) => {
        if( arrow==="up" && (this.state.direction !== "North" && this.state.direction !== "South")){
            this.setState({direction:"North"});
        }
        else if(arrow === "down" && (this.state.direction !== "North" && this.state.direction !== "South"))
        {
            this.setState({direction:"South"});
        }
        else if(arrow === "left" && ( this.state.direction !== "West" && this.state.direction !=="East"))
        {
            this.setState({direction:"West"});
        }
        else if(arrow==='right' && (this.state.direction !== "West" && this.state.direction !=="East"))
        {
            this.setState({direction:"East"});
        }
    }

    componentDidMount() {
        this.handleRestart();
       }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    

    render() {
        return ( 
            <div className="snakegame">
                {(this.state.score === 0 || this.state.gameover) && <h1 style={{fontSize:"30px",margin: '20px auto'}}>Snake</h1>}
                {(!this.state.gameover && this.state.score >0 ) && <div className="info">
                    <p>Score : {this.state.score}</p>
                </div>}
                <div className="arena">
                    <div className="head" style={{top: this.state.Top +'px', left : this.state.Left + 'px'} }></div>
                    <div className="fruit" style={{top: this.state.fruit[0] + 'px',left:this.state.fruit[1] + 'px'}}></div>
                    <BodyMovement body={this.state.body}/>
                    <div className="gameover">
                        { this.state.gameover && <GameStats score={this.state.score} restart={()=>this.handleRestart()}/>}
                    </div>
                </div>

                <div className="controls">
                    <button className="controlButton" onClick={() => this.handleClick('left')}>{this.state.leftarrow}</button>
                    <button className="controlButton" onClick={() => this.handleClick('right')}>{this.state.rightarrow}</button>
                    <button className="controlButton" onClick={() => this.handleClick('up')}>{this.state.uparrow}</button>
                    <button className="controlButton" onClick={() => this.handleClick('down')}>{this.state.downarrow}</button>
                </div>
            </div>
         );
    }    
}

export default SmallSnake;