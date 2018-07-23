import React, { Component } from 'react';
import { Container, Text, Comment, Input } from './tools-styles';

class CountingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numerator: 0,
      denominator: 0,
      multiply: this.props.multiplier == 'percents' ? 100 : (this.props.multiplier == 'days') ? 360 : 1
    }
  }
  
  firstInputHandle = (e) => {
    this.setState({numerator: e.target.value });
  }
    
  secondInputHandle = (e) => {
    this.setState({denominator: e.target.value });
  }
           
  render() {
    return (
      <Container>
        <Text>{this.props.header}</Text>
        <Input placeholder={this.props.firstPlaceholder} onChange={this.firstInputHandle} />
        <Input placeholder={this.props.secondPlaceholder} onChange={this.secondInputHandle} />
        <Input disabled value={this.state.denominator == 0 ? '0' : this.state.numerator / this.state.denominator * this.state.multiply} /> 
        <Comment>{this.props.comment}</Comment>
      </Container>
    );
  }
}

export default CountingComponent;