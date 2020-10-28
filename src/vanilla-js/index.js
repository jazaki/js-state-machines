/* Setting up page attributes */
let pageHeading = document.getElementById("topic-id")
pageHeading.innerText = "Using Vanilla JS"


const elBox = document.querySelector('#box');

/* Switch Case Implementation */

/* let currentState = 'inactive'
function transition(state, event) {
  switch (state) {
    case 'inactive':
      switch (event) {
        case 'click':
          return 'active';
        default:
          return state;
      }
    case 'active':
      switch (event) {
        case 'click':
          return 'inactive';
        default:
          return state;
      }
    default:
      return state;
  }
}

elBox.addEventListener('click', (event) => {
  currentState = transition(currentState, event.type);
  console.log(currentState)
  elBox.dataset.state = currentState;
}); */

/* Machine Object Implementation */

/* const machine = {
  initial: 'inactive',
  states: {
    inactive: {
      on: {
        CLICK: 'active',
      },
    },
    active: {
      on: {
        CLICK: 'inactive',
      },
    },
  },
};

let currentState = machine.initial;

function transition(state, event) {
  const nextState = machine.states[state].on?.[event] || state;

  return nextState;
}

function send(event) {
  currentState = transition(currentState, event);

  console.log(currentState);

  elBox.dataset.state = currentState;
}

elBox.addEventListener('click', () => {
  send('CLICK');
}); */
