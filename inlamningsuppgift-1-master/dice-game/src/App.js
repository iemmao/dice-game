import React from 'react';
import DiceRoll from './diceRoll';
import DeclareWinner from './declareWinner';
import NewGame from './newGame';

class App extends React.Component {
  constructor() {
    super()


    this.state = {
      randomNumber: [1, 2, 3, 4, 5, 6],

      userDieOne: 0,
      userDieTwo: 0,
      userDieThree: 0,
      computerDieOne: 0,
      computerDieTwo: 0,
      computerDieThree: 0,
      
      dieOneRolled: false,
      dieTwoRolled: true,
      dieThreeRolled: true,
    }
    this.rollFirstDie = this.rollFirstDie.bind(this);
    this.rollSecondDie = this.rollSecondDie.bind(this);
    this.rollThirdDie = this.rollThirdDie.bind(this);
  }


  // Computer
  randomComputerDieOne() {
    const randomNumberComputerOne = Math.round(Math.random() * 5);
    this.setState({ computerDieOne: this.state.randomNumber[randomNumberComputerOne] })
  }
  randomComputerDieTwo() {
    const randomNumberComputerTwo = Math.round(Math.random() * 5);
    this.setState({ computerDieTwo: this.state.randomNumber[randomNumberComputerTwo] })
  }
  randomComputerDieThree() {
    const randomNumberComputerThree = Math.round(Math.random() * 5);
    this.setState({ computerDieThree: this.state.randomNumber[randomNumberComputerThree] })
  }

  // User
  rollFirstDie(event) {
    const randomNumberUserOne = Math.round(Math.random() * 5);
    this.setState({ userDieOne: this.state.randomNumber[randomNumberUserOne], dieOneRolled: true, dieTwoRolled: false });
    this.randomComputerDieOne();
  }
  rollSecondDie(event) {
    const randomNumberUserTwo = Math.round(Math.random() * 5);
    this.setState({ userDieTwo: this.state.randomNumber[randomNumberUserTwo], dieTwoRolled: true, dieThreeRolled: false });
    this.randomComputerDieTwo();
  }
  rollThirdDie(event) {
    const randomNumberUserThree = Math.round(Math.random() * 5);
    this.setState({ userDieThree: this.state.randomNumber[randomNumberUserThree], dieThreeRolled: true });
    this.randomComputerDieThree();
  }

  render() {
    return (
      <section className="container">
        <h1>Roll the dice</h1>
        <h2>The player with the highest score wins!</h2>

        <DiceRoll rollDieOne={this.rollFirstDie} rollDieTwo={this.rollSecondDie} rollDieThree={this.rollThirdDie} computerDieOne={this.state.computerDieOne} computerDieTwo={this.state.computerDieTwo} computerDieThree={this.state.computerDieThree} dieOneRolled={this.state.dieOneRolled} dieTwoRolled={this.state.dieTwoRolled} dieThreeRolled={this.state.dieThreeRolled} />

        <DeclareWinner userDieOne={this.state.userDieOne} userDieTwo={this.state.userDieTwo} userDieThree={this.state.userDieThree} computerDieOne={this.state.computerDieOne} computerDieTwo={this.state.computerDieTwo} computerDieThree={this.state.computerDieThree} />

        <NewGame />
      </section>
    )
  }
}

export default App;
