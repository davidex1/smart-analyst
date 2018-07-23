// React
import React from 'react';
// Styled Components
import { Container, Text } from './tools-styles';
// Components
import CountingComponent from './counting-component';

const ReturnTool = () =>
  <Container>
    <Text primary>Common ratios of company's profitability.</Text>
    <CountingComponent header="Return on equity" firstPlaceholder="Net profit" secondPlaceholder="Equity capital" comment="%" multiplier='percents'/>
    <CountingComponent header="Return on assets" firstPlaceholder="Net profit" secondPlaceholder="Total assets" comment="%" multiplier='percents'/>
    <CountingComponent header="Return on investment" firstPlaceholder="Net profit" secondPlaceholder="Invested capital" comment="%" multiplier='percents'/>
    <CountingComponent header="Return on sale" firstPlaceholder="Net profit" secondPlaceholder="Sales revenue" comment="%" multiplier='percents'/>
  </Container>

export default ReturnTool;