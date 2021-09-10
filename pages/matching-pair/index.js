import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import { Droppable, Draggable } from 'react-beautiful-dnd';

import { HEROES, COMICS } from './../../utilities/data';
import { shuffle, getTimeLeft, move, GAME_STATE } from './../../utilities/utils';

import Modal from './../../components/Modal';
import Header from './../../components/Header';
import Dropzone from './../../components/Dropzone';
import Footer from './../../components/Footer';

const GAME_DURATION = 1000 * 30; // 30 seconds

const initialState = {
  // we initialize the state by populating the bench with a shuffled collection of heroes
  bench: shuffle(HEROES),
  [COMICS.DC]: [],
  [COMICS.MARVEL]: [],
  [COMICS.JawaTimur]: [],
  gameState: 'playing',
  timeLeft: 0,
};

class App extends React.Component {
  state = initialState;

  startGame = () => {
    this.currentDeadline = Date.now() + GAME_DURATION;

    this.setState(
      {
        gameState: GAME_STATE.PLAYING,
        timeLeft: getTimeLeft(this.currentDeadline),
      },
      this.gameLoop
    );
  };

  gameLoop = () => {
    this.timer = setInterval(() => {
      const timeLeft = getTimeLeft(this.currentDeadline);
      const isTimeout = timeLeft <= 0;
      if (isTimeout && this.timer) {
        clearInterval(this.timer);
      }

      this.setState({
        timeLeft: isTimeout ? 0 : timeLeft,
        ...(isTimeout ? { gameState: GAME_STATE.DONE } : {}),
      });
    }, 1000);
  };

  endGame = () => {
    if (this.timer) {
      clearInterval(this.timer);
    }

    this.setState({
      gameState: GAME_STATE.DONE,
    });
  };

  resetGame = () => {
    this.setState(initialState);
  };

  onDragEnd = ({ source, destination }) => {
    if (!destination) {
      return;
    }

    this.setState(state => {
      return move(state, source, destination);
    });
  };

  render() {
    const { gameState, timeLeft, bench, ...groups } = this.state;
    const isDropDisabled = gameState === GAME_STATE.DONE;

    return (
      <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 md:px-64 pt-32">

        <DragDropContext onDragEnd={this.onDragEnd}>
          {/* <div className="bg-red-500"> */}
            {/* <Dropzone id="bench" heroes={bench} isDropDisabled={isDropDisabled} /> */}
          {/* </div> */}
          <div className="grid grid-cols-4 border-4 border-black">
            <div className="bg-blue-500 h-32 border-4 border-black">
              <Dropzone
                id={COMICS.JawaTimur}
                heroes={this.state[COMICS.JawaTimur]}
                isDropDisabled={isDropDisabled}
              />
            </div>
            <div className="bg-green-500 h-32 one border-4 border-black">
              <Dropzone
                id={COMICS.JawaTimur}
                heroes={this.state[COMICS.JawaTimur]}
                isDropDisabled={isDropDisabled}
              />
            </div>
            <div className="bg-red-500 h-32 border-4 border-black">

            </div>
            <div className="bg-yellow-500 h-32 one border-4 border-black">

            </div>
          </div>
          <div className="grid grid-cols-4 border-4 border-black">
            <div className="bg-green-500 h-32 one border-4 border-black">
            </div>
            <div className="bg-red-500 h-32 border-4 border-black">

            </div>
            <div className="bg-yellow-500 h-32 one border-4 border-black">

            </div>
            <div className="bg-blue-500 h-32 border-4 border-black">

            </div>
          </div>
          <div className="grid grid-cols-4 border-4 border-black">
            <div className="bg-red-500 h-32 border-4 border-black">
            </div>
            <div className="bg-yellow-500 h-32 one border-4 border-black">

            </div>
            <div className="bg-blue-500 h-32 border-4 border-black">

            </div>
            <div className="bg-green-500 h-32 one border-4 border-black">

            </div>
          </div>
        </DragDropContext>
        {/* <Header gameState={gameState} timeLeft={timeLeft} endGame={this.endGame} />
        {this.state.gameState !== GAME_STATE.PLAYING && (
          <Modal
            startGame={this.startGame}
            resetGame={this.resetGame}
            timeLeft={timeLeft}
            gameState={gameState}
            groups={groups}
          />
        )} */}
        {/* {(this.state.gameState === GAME_STATE.PLAYING ||
          this.state.gameState === GAME_STATE.DONE) && ( */}

        {/* <DragDropContext onDragEnd={this.onDragEnd}> */}
        <div>
          <div>
            {/* <h3>Jawa Barat</h3> */}
            {/* <Dropzone
                id={COMICS.JawaTimur}
                heroes={this.state[COMICS.JawaTimur]}
                isDropDisabled={isDropDisabled}
              /> */}
          </div>
          <div style={{ display: 'inline' }}>
            {/* <h3>Jawa Tengah</h3> */}
            {/* <Dropzone
                id={COMICS.MARVEL}
                heroes={this.state[COMICS.MARVEL]}
                isDropDisabled={isDropDisabled}
              /> */}
          </div>
          <div style={{ display: 'inline' }}>
            {/* <h3>Jawa Timur</h3> */}
            {/* <Dropzone
                id={COMICS.DC}
                heroes={this.state[COMICS.DC]}
                isDropDisabled={isDropDisabled}
              /> */}
          </div>
          {/* </div> */}
        </div>

        <div style={{ border: '5px solid red' }}>
          {/* <Dropzone id="bench" heroes={bench} isDropDisabled={isDropDisabled} /> */}
        </div>
        {/* </DragDropContext> */}
        {/* )} */}
        <Footer />
      </div>
    );
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}

export default App;


// import Head from 'next/head'
// import Image from 'next/image'
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Dropzone from '../../components/Dropzone';

// export default function Index() {
//   return (
//     <>
//       <Head>
//         <title>Game Board Lesson</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//     </>
//   )
// }
