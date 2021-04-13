import React from 'react';

function highestScore(totalUser, totalComputer, lastRoll) {
    let winner = '';

    if (lastRoll > 0) {
        if (totalUser > totalComputer) {
            winner = 'You won!'
        } else if (totalComputer > totalUser) {
            winner = 'The computer won!'
        } else {
            winner = 'Equal!'
        }
    }
    return winner;
}


function DeclareWinner(props) {

    const totalScoreUser = props.userDieOne + props.userDieTwo + props.userDieThree;

    const totalScoreComputer = (props.computerDieOne + props.computerDieTwo + props.computerDieThree);

    const won = highestScore(props.userDieOne + props.userDieTwo + props.userDieThree, props.computerDieOne + props.computerDieTwo + props.computerDieThree, props.computerDieThree)
    

    return (
        <section className="scoreContainer">
            <section className="userScore">
                <h3>You</h3>
                <div className="scoreUserComputer">
                    <div className="diceIcon">
                        <p>{props.userDieOne}</p>
                    </div>
                    <i className="fas fa-plus"></i>
                    <div className="diceIcon">
                        <p>{props.userDieTwo}</p>
                    </div>
                    <i className="fas fa-plus"></i>
                    <div className="diceIcon">
                        <p>{props.userDieThree}</p>
                    </div>
                    <i className="fas fa-equals"></i>
                    <div className="diceIcon">
                    <p>{totalScoreUser}</p>
                    </div>
                </div>
            </section>

            <section className="computerScore">
                <h3>Computer</h3>
                <div className="scoreUserComputer">
                    <div className="diceIcon">
                        <p>{props.computerDieOne}</p>
                    </div>
                    <i className="fas fa-plus"></i>
                    <div className="diceIcon">
                        <p>{props.computerDieTwo}</p>
                    </div>
                    <i className="fas fa-plus"></i>
                    <div className="diceIcon">
                        <p>{props.computerDieThree}</p>
                    </div>
                    <i className="fas fa-equals"></i>
                    <div className="diceIcon">
                    <p>{totalScoreComputer}</p>
                    </div>
                </div>
            </section>
            <div className="winner">
                <h3>{won}</h3>
            </div>
        </section>


    )
}



export default DeclareWinner;



