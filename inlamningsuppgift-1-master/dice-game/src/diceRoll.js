import React from 'react';

function DiceRoll(props) {
    return (
            <section className="userButtons">
                <button disabled={ props.dieOneRolled } onClick={props.rollDieOne}>
                    <i className="fas fa-question"></i>
                </button>
                <button  disabled={ props.dieTwoRolled } onClick={props.rollDieTwo}>
                    <i className="fas fa-question"></i>
                </button>
                <button  disabled={ props.dieThreeRolled } onClick={props.rollDieThree}>
                    <i className="fas fa-question"></i>
                </button>
            </section>
    )
}

export default DiceRoll;

