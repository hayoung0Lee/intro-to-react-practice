const Pet = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Marty'),
    React.createElement('h1', {}, 'Dakota'),
    React.createElement('h1', {}, 'Marty and Dakota'),
  ]);
};

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet),
    React.createElement(Pet),
    React.createElement(Pet),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
