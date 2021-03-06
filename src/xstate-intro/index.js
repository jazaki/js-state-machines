import { createMachine } from 'xstate';

/* Setting up page attributes */
let pageHeading = document.getElementById("topic-id")
pageHeading.innerText = "XState"

const elBox = document.querySelector('#box');

const machine = createMachine({
  initial: 'inactive',
  states: {
    inactive: {
      on: {
        CLICK: {
          target: 'active',
        },
      },
    },
    active: {
      on: {
        CLICK: {
          target: 'inactive',
        },
      },
    },
  },
});

let currentState = machine.initialState;

function send(event) {
  currentState = machine.transition(currentState, event);

  console.log(currentState);

  elBox.dataset.state = currentState.value;
}

elBox.addEventListener('click', () => {
  send('CLICK');
});
