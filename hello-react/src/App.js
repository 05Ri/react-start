import './App.css';
import MyComponent from './components/MyComponent';
import Counter from './components/Counter';
import Say from './components/Say';

// 함수형 컴포넌트
const App = () => {
  const name = 'REACT';
  const style = {
    color: 'aqua',
    backgroundColor: 'black',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16,
  };

  return (
    <>
      {/* 주석 작성 */}
      <div style={style}>{name}</div>
      <div className="react">리액트입니다</div>
      <MyComponent favoriteNumber={5}>children setting</MyComponent>
      <hr />
      <Counter />
      <hr />
      <Say />
    </>
  );
};

// // 클래스형 컴포넌트
// import {Component} from 'react';

// class App extends Component {
//   render() {
//     const name = 'REACT';
//     const style = {
//       color: "aqua",
//       backgroundColor: "black",
//       fontSize: "48px",
//       fontWeight: "bold",
//       padding: 16,
//     }

//     return (
//       <>
//         <div style={style}>{name}</div>
//         <div className='react'>리액트입니다</div>
//       </>
//     );
//   }
// }

export default App;
