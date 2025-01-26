import { useDrag, useDrop } from 'react-dnd';

const useDragAndDrop = (piece, position, movePiece) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'PIECE',
    item: { piece, position },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'PIECE',
    drop: (item) => movePiece(item.position, position),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return { isDragging, isOver, drag, drop };
};

export default useDragAndDrop;