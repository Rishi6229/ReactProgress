import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <img 
        className='avatar'
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAYWm7TwxYUYqAhnpQNgd92209vu4Kgg_8yQ&s"
        alt={props.name}
        width={props.size}
        height={props.size}
      />

    </div>
  );
}

export default App;
