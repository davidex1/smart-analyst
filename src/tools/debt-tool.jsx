// React
import React from 'react';
// Styled Components
import { Container, Text } from './tools-styles';
// Components
import CountingComponent from './counting-component';

const DebtTool = () =>
  <Container>
    <Text primary>Common ratios of company's debt.</Text>
    <CountingComponent header="Total debt ratio" firstPlaceholder="Total liabilities" secondPlaceholder="Total assets" comment="Proper ratio: 0.57 - 0.67"/>
    <CountingComponent header="Long-term debt ratio" firstPlaceholder="Long-term liabilities" secondPlaceholder="Equity capital" comment="Proper ratio: Up to 1.0"/>
    <CountingComponent header="Equity capital debt ratio" firstPlaceholder="Total liabilities" secondPlaceholder="Equity capital" comment="Proper ratio: Up to 1.0 or 3.0 for small companies"/>
  </Container>

export default DebtTool;