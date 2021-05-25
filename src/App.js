import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <p>I am a Personal React</p>

          <Person></Person>   {/*<<============Component Call*/}
          <Person></Person>   {/*<<============Component Call*/}
          <Person></Person>   {/*<<============Component Call*/}
          <Person></Person>   {/*<<============Component Call*/}
      </header>
    </div>
  );
}

//============>>Create Component
function Person(){

    {/*Component Style Start*/} //<<======2nd Way
      const personStyle={
        border:'2px solid yellow',
        marginBottom:'10px',
        borderRadius:'7px',
        padding:'10px',
        boxSizing:'border-box'
      };
    {/*Component Style End*/}

    return (
      // <div style={{border:'2px solid yellow',borderRadius:'7px',marginBottom:'10px'}}>  //<<======1st Way
      <div style={personStyle}>
        <div>
            <h1>Name: Sakib-Al-Hasen</h1>
            <h3>Hero of the year</h3>
        </div>
      </div>  
    )
}

export default App;
