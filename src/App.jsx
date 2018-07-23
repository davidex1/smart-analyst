// React
import React, { Component } from 'react';
// React Router
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
// Styled Components
import { Navbar, Title, Container, Tile, Icon, Text, TextBox } from './app-style';
// Components
import ReturnTool from './tools/return-tool';
import RotationTool from './tools/rotation-tool';
import DebtTool from './tools/debt-tool';
import LiquidityTool from './tools/liquidity-tool';

const Home = () =>
  <Container>
    <Link to='/return-tool'>
      <Tile><Icon className="fas fa-chart-line"/><Text>Return ratios</Text></Tile>
    </Link>
    <Link to='/rotation-tool'>    
      <Tile><Icon className="fas fa-undo-alt"/><Text>Rotation ratios</Text></Tile>
    </Link>
    <Link to='/debt-tool'>
      <Tile><Icon className="fas fa-hand-holding-usd"/><Text>Debt ratios</Text></Tile>
    </Link>
    <Link to='/liquidity-tool'>
      <Tile><Icon className="fas fa-tint"/><Text>Liquidity ratios</Text></Tile>
    </Link>
  </Container>

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }
    
  handleClick = () => {
      this.state.isOpen === false ? this.setState({isOpen: true}) : this.setState({isOpen: false});
  }
  
  render() {
    return (
      <Router>
        <div>
          <Navbar>
            <Title>
              <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>Smart Analyst</Link>
            </Title>
            <Icon className="fas fa-info-circle" primary onClick={this.handleClick} />
            {this.state.isOpen ? <TextBox>Smart Analyst is the simple app for financial analysis. It consists of most popular financial ratios for companies. All to do is fill in the form with the appropriate values and the result will show in the box. </TextBox> : ''}
          </Navbar>
          <Route exact path='/' component={Home} />
          <Route path='/return-tool' component={ReturnTool} />
          <Route path='/rotation-tool' component={RotationTool} />
          <Route path='/debt-tool' component={DebtTool} />
          <Route path='/liquidity-tool' component={LiquidityTool} />
        </div>
      </Router>
    )
  }
}

export default App;
