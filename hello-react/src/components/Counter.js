import { Component } from 'react';

class Counter extends Component {
  // /* 생성자 메서드로 state 초기값 설정 */
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     number: 0,
  //     fixedNumber: 0,
  //   };
  // }

  /* 생성자 메서드 없이 state 초기값 설정 */
  state = {
    number: 0,
    fixedNumber: 0,
    mulNum: 0,
  };

  render() {
    const { number, fixedNumber, mulNum } = this.state;

    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 숫자 - {fixedNumber}</h2>
        <h3>2 곱해진 숫자 - {mulNum}</h3>
        <button
          onClick={() => {
            this.setState(
              (prevState) => {
                return {
                  number: prevState.number + 1,
                };
              },
              () => {
                console.log('버튼이 눌렸습니다...!');
                console.log(this.state);
              }
            );

            this.setState((prevState) => ({
              mulNum: prevState.number * 2,
            }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
