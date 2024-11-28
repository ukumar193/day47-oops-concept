import './App.css';
import SSCStudent from './classes/SSCStudent';
import Tenthstudent from './components/Tenthstudent';


function App() {
  let rocky = new SSCStudent("rocky",81,82,85,86,89,90);
  rocky.calculateResult();
  let lucky = new SSCStudent("lucky",80,78,90,32,98,96);
  lucky.calculateResult();
  
  
  return (
    <div className="App">
     <Tenthstudent name="kumar" telMarks="91" engMarks="95" hinMarks="88" matMarks="91" sciMarks="85" socMarks="97"></Tenthstudent>
     <Tenthstudent name="shiva" telMarks="92" engMarks="94" hinMarks="89" matMarks="90" sciMarks="89" socMarks="95"></Tenthstudent>
    </div>
  );
}

export default App;
