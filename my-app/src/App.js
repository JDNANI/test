// import logo from './logo.svg';
import './App.css';
// import Image from 'C:/Users/jdnan/OneDrive/Desktop/test/my-app/public/img.png';
import {useState} from 'react';

// const products=[
//   {title:'Cabbage', isFruit:false, id:1},
//   {title:'Garlic',isFruit:false, id:2},
//   {title:'Apple',isFruit:true, id:3}
// ];





// function MyButton(){
//   const [count, setCount] =useState(0);
//   function handleClick(){
//     setCount(count+1);
//     alert('You clicked button ' + count+' times')
//   }
//   return(
//     <button onClick={handleClick}>Click{count} me</button>
//   )
// }

// function Image(){
//   return(
//     <img src='Image' alt='Logo'/>
//   );
// }

// // function MyApp(){
// //   const listItems=products.map(product=>
// //     <li key={product.id}
// //     style={{
// //       color: product.isFruit? 'blue':'red'
      
// //     }}>
// //       {product.title}
// //     </li>

// //     );
// //     return (
// //       <div className='Align'>
// //       <ol>{listItems}</ol>
// //       <ul>{listItems}</ul>
// //       <Image/>
// //       <div className='Text'><MyButton/></div>
// //       </div>
// //     )
// // }
// function MyApp() {
// const [count, setCount] =useState(0);
//   function handleClick(){
//     setCount(count+1);
    
//   }
//   return(
//     <div>
//       <button onClick={handleClick}>Click{count} me</button><br />
//       <button onClick={handleClick}>Click{count} me</button>
//     </div>
    
//   )
//   }


// export default MyApp;




function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 3],
    [2, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

