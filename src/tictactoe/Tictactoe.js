import React from "react";
import "./style.css";

class Tictactoe extends React.Component {
  constructor() {
    super();
    this.state = {
      turn: "X",
      gameEnded: false,
      winner: undefined,
      totalMoves: 0,
      board: Array(9).fill(""),
    };
  }

  clicked(event) {
    if (this.state.board[event.target.dataset.square] === "") {
      this.state.board[event.target.dataset.square] = this.state.turn;
      event.target.innerText = this.state.turn;

      this.setState((prevState) => ({
        totalMoves: prevState.totalMoves + 1,
      }));

      this.setState({
        turn: this.state.turn === "X" ? "O" : "X",
        board: this.state.board,
        // totalMoves: this.state.totalMoves++,
      });
    }
    var result = this.checkWinner();

    if (result == "X") {
      this.setState({
        gameEnded: true,
        winner: "X",
        winnerLine: "Match Won by X",
      });
    }
    if (result == "O") {
      this.setState({
        gameEnded: true,
        winner: "O",
        winnerLine: "Match Won by O",
      });
    }
    if (this.state.totalMoves == 8) {
      this.setState({
        gameEnded: true,
        winner: "draw",
        winnerLine: "Match is Drawn",
      });
    }
  }

  rsButton(event) {
    console.log(event.target.value);
    var cells = document.getElementsByClassName("square");
    for (var cell of cells) {
      console.log(cell);
      cell.textContent = " ";
      // console.log(this.state.totalMoves);
    }
    this.setState({
      turn: "X",
      gameEnded: false,
      winner: undefined,
      winnerLine: " ",
      totalMoves: 0,
      board: Array(9).fill(""),
    });
  }

  checkWinner() {
    var moves = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];
    var board = this.state.board;
    for (let i = 0; i < moves.length; i++) {
      if (
        board[moves[i][0]] == board[moves[i][1]] &&
        board[moves[i][1]] == board[moves[i][2]]
      )
        return board[moves[i][0]];
    }
    if (this.state.totalMoves == 9) {
      return "D";
    }
  }

  render() {
    return (
      <div id="game">
        <br /> <br />
        <div id="head">
          <h1>Welcome to Srikanth Tic-tac-toe Game</h1>
          <br />
          <p>Be ready to play to improve logical thinking...!!!</p>
          <br />
          <div id="status">{this.state.winnerLine}</div>
        </div>
        <div id="board" onClick={(e) => this.clicked(e)}>
          <div className="square" data-square="0"></div>
          <div className="square" data-square="1"></div>
          <div className="square" data-square="2"></div>
          <div className="square" data-square="3"></div>
          <div className="square" data-square="4"></div>
          <div className="square" data-square="5"></div>
          <div className="square" data-square="6"></div>
          <div className="square" data-square="7"></div>
          <div className="square" data-square="8"></div>
        </div>
        <div id="sreebtn">
          <button id="btn" onClick={(e) => this.rsButton(e)}>
            Restart
          </button>
        </div>
      </div>
    );
  }
}

export default Tictactoe;
