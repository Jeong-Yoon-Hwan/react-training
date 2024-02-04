import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const DraggableItem = ({ item, index, moveItem }: any) => {
  const [, ref] = useDrag({
    type: "ITEM",
    item: { index },
  });

  const [, drop] = useDrop({
    accept: "ITEM",
    hover: (draggedItem: any) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} style={{ padding: "8px", border: "1px solid #ccc", marginBottom: "4px" }}>
      {item}
    </div>
  );
};

export const DragPage = () => {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4"]);

  const moveItem = (fromIndex, toIndex) => {
    const newItems = [...items];
    const [movedItem] = newItems.splice(fromIndex, 1);
    newItems.splice(toIndex, 0, movedItem);
    setItems(newItems);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        {items.map((item, index) => (
          <DraggableItem key={index} index={index} item={item} moveItem={moveItem} />
        ))}
      </div>
    </DndProvider>
  );
};
