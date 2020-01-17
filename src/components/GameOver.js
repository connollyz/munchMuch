import React from 'react';
const name ="player"
const score = 1000
function GameOver() {
    return (

        <div className="gameOver">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e7008a" fillOpacity="1" d="M0,192L20,192C40,192,80,192,120,170.7C160,149,200,107,240,122.7C280,139,320,213,360,250.7C400,288,440,288,480,250.7C520,213,560,139,600,133.3C640,128,680,192,720,224C760,256,800,256,840,229.3C880,203,920,149,960,133.3C1000,117,1040,139,1080,144C1120,149,1160,139,1200,128C1240,117,1280,107,1320,128C1360,149,1400,203,1420,229.3L1440,256L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path></svg>
            <h1>Game Over!</h1>
            <h2>{name} got {score} donuts</h2>
            <ul className="scoreCard">
                <div className="scoreLi">
                    <li>{name}</li>
                    <li className="playerScore">{score}</li>
                </div>
                <div className="scoreLi">
                    <li>{name}</li>
                    <li className="playerScore">{score}</li>
                </div>
                <div className="scoreLi">
                    <li>{name}</li>
                    <li className="playerScore">{score}</li>
                </div>
                <div className="scoreLi">
                    <li>{name}</li>
                    <li className="playerScore">{score}</li>
                </div>
            </ul>
            <button className="again">Play Agian</button>
        </div>


    )
}

//exports Start component to App.js
export default GameOver; 