import './App.css';
import Button from './button';

function App() {
  const check = () => {
    alert("이번 포켓몬은 뭘까요")
  }
  return (
    <div>
      <div>
        <Button width={100} onClick={check}>
          <div>오박사의 포켓몬 기계</div>
        </Button>
      </div>
    </div>
  );
}

export default App;
