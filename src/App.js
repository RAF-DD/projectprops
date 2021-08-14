import './App.css';
import Profile from './Profile/Profile';
import img from './Profile/img2.jpg';



function App() {
  const fullName="S.Abderraouf"
  const age=32
  const education="L.F.informatique"
  const profession="expert developer"
  return (
    <div>
     <div style={{backgroundColor:'crimson',display:'flex',justifyContent:'center'}}> <h1 className='pro'>My Profile</h1> </div>
    <div className="App">
    <img src={img}/> 
      <Profile n={fullName} a={age} e={education} p={profession}/>
    </div>
    </div>
  );
}
export default App;
