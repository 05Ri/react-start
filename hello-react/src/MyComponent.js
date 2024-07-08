import React from 'react';
import PropTypes from 'prop-types';

// // 함수형 컴포넌트
// const MyComponent = (props) => {
//   const { name, favoriteNumber, children } = props;

//   return (
//     <>
//       <div>안녕하세요, 제 이름은 {name}입니다.</div>
//       <div>가지고 있는 아이 = {children}</div>
//       <div>가장 좋아하는 숫자는 {favoriteNumber}입니다.</div>
//     </>
//   );
// };

// 클래스형 컴포넌트
import { Component } from 'react';

class MyComponent extends Component {
  // static defaultProps = {
  //   name: '기본 이름',
  // };

  // static propTypes = {
  //   name: PropTypes.string,
  //   favoriteNumber: PropTypes.number.isRequired,
  // };

  render() {
    const { name, favoriteNumber, children } = this.props;

    return (
      <>
        <div>안녕하세요, 제 이름은 {name}입니다.</div>
        <div>가지고 있는 아이 = {children}</div>
        <div>가장 좋아하는 숫자는 {favoriteNumber}입니다.</div>
      </>
    );
  }
}

MyComponent.defaultProps = {
  name: '기본 이름',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
