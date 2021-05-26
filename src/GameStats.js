const GameStats = (props) => {
    return (  
        <div className="stats">
            <p className="declareGameOver">Game Over!</p>
            <p className="result">Your score: {props.score}</p>
            <button className="restart" onClick={props.restart}>Restart</button>
        </div>
    );
}
 
export default GameStats;