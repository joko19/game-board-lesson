import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const Dropzone = ({ isDropDisabled, heroes, id }) => (
  <div className="" >
    <div className="divider" data-content={id.toUpperCase()} style={{width: 50, height: 100}} />
    <Droppable droppableId={id} isDropDisabled={isDropDisabled}>
      {provided => {
        return (
          <div className="menu hero-list" style={{border: '2px solid black', height: 250, width: 250}} {...provided.droppableProps} ref={provided.innerRef} >
            {id}
            {heroes.map(({ name }, index) => (
              <Hero key={name} name={name} index={index} />
            ))}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  </div>
);

const Hero = ({ name, index }) => (
  <Draggable key={name} draggableId={name} index={index}>
    {provided => {
      return (
        <div
          style={{backgroundColor: '#303030', display: 'inline-block', border: '1px solid green'}}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <figure style={{  display: 'inline-block', border: '3px solid blue' }} className="avatar tile-icon">
            <img src="https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png" style={{width: 50, display: 'inline-block'}} alt={name} />
          </figure>
          {/* <div className="tile-content">{name}</div> */}
        </div>
      );
    }}
  </Draggable>
);

export default Dropzone;