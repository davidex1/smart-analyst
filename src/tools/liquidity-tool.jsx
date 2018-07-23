// React
import React from 'react';
// Styled Components
import { Container, Text } from './tools-styles';
// Components
import CountingComponent from './counting-component';

const LiquidityTool = () =>
  <Container>
    <Text primary>Common ratios of company's liquidity.</Text>
    <CountingComponent header="Current ratio" firstPlaceholder="Current assets" secondPlaceholder="Current liabilities" comment="Proper ratio: 1.2 - 2.0" />
    <CountingComponent header="Quick ratio" firstPlaceholder="Current assets - stock" secondPlaceholder="Current liabilities" comment="Proper ratio: 0.7 - 1.0"/>
    <CountingComponent header="Cash ratio" firstPlaceholder="Cash" secondPlaceholder="Current liabilities" comment="Proper ratio: 0.2"/>
  </Container> 

export default LiquidityTool;