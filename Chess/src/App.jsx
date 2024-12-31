import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Board from './Components/Board.jsx';
import './App.css';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Board />
      </div>
    </DndProvider>
  );
}

export default App;