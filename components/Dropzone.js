import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const Dropzone = ({ isDropDisabled, tarian, id }) => (
  // <div className="column col-4">
  //   <div className="divider" data-content={id.toUpperCase()} />
    <Droppable droppableId={id} isDropDisabled={isDropDisabled}>
      {provided => {
        return (
          <div  style={{width: '100%', display: 'inline-block', padding: 10}} {...provided.droppableProps} ref={provided.innerRef}>
            {tarian.map(({ name }, index) => (
              <Hero key={name} name={name} index={index} />
            ))}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  // </div>
);

const Hero = ({ name, index }) => (
  <Draggable key={name} draggableId={name} index={index}>
    {provided => {
      return (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div style={{backgroundColor: 'white', display: 'inline-block', padding: 2, margin: 2, borderRadius: 4}}>{name}</div>
        </div>
      );
    }}
  </Draggable>
);

export default Dropzone;