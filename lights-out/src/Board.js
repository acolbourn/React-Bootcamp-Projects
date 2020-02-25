import React, { Component } from 'react';
import Cell from './Cell';
import './Board.css';

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25
  };

  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      board: this.createBoard()
    };
    this.createBoard = this.createBoard.bind(this);
    this.flipCellsAround = this.flipCellsAround.bind(this);
    this.makeTable = this.makeTable.bind(this);
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  createBoard() {
    let board = [];
    let { ncols, nrows } = this.props;

    for (let y = 0; y < nrows; y++) {
      let row = [];
      for (let x = 0; x < ncols; x++) {
        row.push(Math.random() < this.props.chanceLightStartsOn);
      }
      board.push(row);
    }
    return board;
  }

  /** handle changing a cell: update board & determine if winner */
  flipCellsAround(coord) {
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split('-').map(Number);

    function flipCell(y, x) {
      // if this coord is actually on board, flip it
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    // Flip this cell and the cells around it
    flipCell(y, x);
    flipCell(y + 1, x);
    flipCell(y - 1, x);
    flipCell(y, x + 1);
    flipCell(y, x - 1);

    // win when every cell is false
    let hasWon = board.every(row => row.every(cell => !cell));

    this.setState({ board, hasWon });
  }

  /** Returns HTML table to render */
  makeTable() {
    return (
      <table className='Board'>
        <tbody>
          {this.state.board.map((row, xCord) => (
            <tr key={xCord}>
              {row.map((cell, yCord) => (
                <Cell
                  key={`${xCord}-${yCord}`}
                  coord={`${xCord}-${yCord}`}
                  isLit={cell}
                  flipCellsAround={this.flipCellsAround}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  /** Render game board or winning message. */
  render() {
    return (
      <div>
        {this.state.hasWon ? (
          <div className='Board-title'>
            <div className='winner'>
              <span className='neon-orange'>YOU</span>
              <span className='neon-blue'>WIN!</span>
            </div>
          </div>
        ) : (
          <div>
            <div className='Board-title'>
              <div className='neon-orange'>Lights</div>
              <div className='neon-blue'>Out</div>
            </div>
            {this.makeTable()}
          </div>
        )}
      </div>
    );
  }
}

export default Board;
