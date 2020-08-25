import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Jumbotron, ListGroup, Modal } from 'react-bootstrap';

const styles = {
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  button:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 25
  }
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {target: 0,
                  num1: 0,
                  num2: 0,
                  num3: 0,
                  num4: 0,
                  num5: 0,
                  num6: 0,
                  bignums: [25,50,75,100],
                  clock: "Countdown!",
                  disable_button: false,
                  show_modal: false,
                  show_answer: false
                }
    this.oneBig = this.oneBig.bind(this);
    this.twoBig = this.twoBig.bind(this);
    this.threeBig = this.threeBig.bind(this);
    this.fourBig = this.fourBig.bind(this);
    this.zeroBig = this.zeroBig.bind(this);
    this.target = this.target.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }


  handleModal(){
    this.setState({show_modal: !this.state.show_modal, clock: "Countdown!"});
  }
  target(){
    this.setState({
      target: Math.floor(Math.random() * (999 - 100 + 1)) + 100
    })
    this.timer = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick(){
    this.setState({
      clock: this.state.clock - 1,
    })
    if (this.state.clock === 0){
      clearInterval(this.timer);
      this.setState({
                      clock: "Time Up!",
                      disable_button: false,
                      show_answer: true,
                      answer_link: "http://panzi.github.io/numbers-js/?target=".concat(this.state.target.toString(), "&numbers=", this.state.num1.toString(), ",", this.state.num2.toString(), ",", this.state.num3.toString(), ",", this.state.num4.toString(), ",", this.state.num5.toString(), ",", this.state.num6.toString())
                    });
    }
  }
  oneBig(){
    this.setState({
                  num1: this.state.bignums[Math.floor(Math.random() * 4)],
                  num2: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
                  num3: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
                  num4: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
                  num5: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
                  num6: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
                  clock: 30,
                  disable_button: true,
                  show_answer: false
                })
    this.target()

  }
  twoBig(){
    this.setState({
                  num1: this.state.bignums[Math.floor(Math.random() * 4)],
                  num2: this.state.bignums[Math.floor(Math.random() * 4)],
                  num3: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
                  num4: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
                  num5: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
                  num6: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
                  clock: 30,
                  disable_button: true,
                  show_answer: false
                })
    this.target()

  }
  threeBig(){
    this.setState({
                  num1: this.state.bignums[Math.floor(Math.random() * 4)],
                  num2: this.state.bignums[Math.floor(Math.random() * 4)],
                  num3: this.state.bignums[Math.floor(Math.random() * 4)],
                  num4: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
                  num5: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
                  num6: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
                  clock: 30,
                  disable_button: true,
                  show_answer: false
                })
    this.target()

  }
  fourBig(){
    this.setState({
                  num1: this.state.bignums[Math.floor(Math.random() * 4)],
                  num2: this.state.bignums[Math.floor(Math.random() * 4)],
                  num3: this.state.bignums[Math.floor(Math.random() * 4)],
                  num4: this.state.bignums[Math.floor(Math.random() * 4)],
                  num5: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
                  num6: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
                  clock: 30,
                  disable_button: true,
                  show_answer: false
                })
    this.target()

  }
  zeroBig(){
    this.setState({
                  num1: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
                  num2: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
                  num3: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
                  num4: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
                  num5: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
                  num6: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
                  clock: 30,
                  disable_button: true,
                  show_answer: false
                })
    this.target()

  }

  render(){
    let button_group;
    if (this.state.disable_button){
      button_group =
      <div>
        <ButtonGroup style={styles.button}>
          <Button onClick={this.oneBig} disabled>
            1 big, 5 small
          </Button>
          <Button variant="outline-primary" onClick={this.twoBig} disabled>
            2 big, 4 small
          </Button>
          <Button onClick={this.threeBig} disabled>
            3 big, 3 small
          </Button>
          <Button variant="outline-primary" onClick={this.fourBig} disabled>
            4 big, 2 small
          </Button>
          <Button onClick={this.zeroBig} disabled>
            0 big, 6 small
          </Button>
        </ButtonGroup>
        <Button style={{marginLeft: "45%"}} variant="outline-primary" onClick={this.handleModal} disabled>
          How To Play
        </Button>
      </div>

    } else{
      button_group =
      <div>
        <ButtonGroup style={styles.button}>
          <Button onClick={this.oneBig}>
            1 big, 5 small
          </Button>
          <Button variant="outline-primary" onClick={this.twoBig}>
            2 big, 4 small
          </Button>
          <Button onClick={this.threeBig}>
            3 big, 3 small
          </Button>
          <Button variant="outline-primary" onClick={this.fourBig}>
            4 big, 2 small
          </Button>
          <Button onClick={this.zeroBig}>
            0 big, 6 small
          </Button>
        </ButtonGroup>
        <Button style={{marginLeft:"45%"}} variant="outline-primary" onClick={this.handleModal}>
          How To Play
        </Button>
      </div>
    }
    let answer_button;
    if(this.state.show_answer){
      answer_button = <a href={this.state.answer_link} target="_blank"><Button style={{marginLeft:"42%", marginTop: "10px"}}>
        Click Here To See Answers
      </Button></a>
    } else{
      answer_button = <p></p>
    }
    return(
      <Jumbotron fluid>
        <h1 style={styles.center}>{this.state.clock}</h1>
        <hr></hr>
        <h3 style={styles.center}>Your Target:</h3>
        <h2 style={styles.center}>{this.state.target}</h2>
        <h3 style={styles.center}>Your numbers:</h3>
        <ListGroup horizontal style={styles.center}>
          <ListGroup.Item>{this.state.num1}</ListGroup.Item>
          <ListGroup.Item>{this.state.num2}</ListGroup.Item>
          <ListGroup.Item>{this.state.num3}</ListGroup.Item>
          <ListGroup.Item>{this.state.num4}</ListGroup.Item>
          <ListGroup.Item>{this.state.num5}</ListGroup.Item>
          <ListGroup.Item>{this.state.num6}</ListGroup.Item>
        </ListGroup>
        {button_group}
        {answer_button}

        <Modal show={this.state.show_modal} onHide={this.handleModal}>
          <Modal.Header closeButton  >
            <Modal.Title>How To Play</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <ul>
              <li>Players should split themselves into 2 teams. Both teams marticipate in each round.</li>
              <li>6 numbers will be chosen. Teams will take turns choosing how many large numbers you get, from 0 to 4. The remaining ones will be small numbers.</li>
              <li>All cards within each category are drawn at random, with uniform probability.</li>
              <li>The target is a 3-digit number from 100 to 999, picked at random with uniform distribution.</li>
              <li>Your objective is to use the 6 numbers to get the target number within 30 seconds. It may be useful to have a pen and paper.</li>
              <li>Only the 4 elementary mathematical operations are allowed (+ - * /).</li>
              <li>You can use as many of the 6 input numbers as you want, but can only use each number once.</li>
              <li>All operations must result in integers.</li>
              <li>Once you choose how many big numbers and how many small numbers you would like, the numbers are chosen, then the target number is generated and a 30 second timer will begin.</li>
              <li>Don't worry if you can't solve the problem within 30 seconds! Take as much time as you'd like.</li>
            </ul>
            <h3>Scoring:</h3>
              <p>Points are awarded to the contestant which gets closest to the target number, in the following manner:</p>
              <ul>
                <li>10 Points if the target was hit exactly.</li>
                <li>7 points if the result is within a distance of 1 to 5 from the target.</li>
                <li>5 points if the result is within a distance of 6 to 10 from the target.</li>
                <li>0 otherwise.</li>
              </ul>
          </Modal.Body>
        </Modal>




      </Jumbotron>
    )
  }

}

export default App;
