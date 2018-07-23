// React
import React from 'react';
// Styled Components
import { Container, Text } from './tools-styles';
// Components
import CountingComponent from './counting-component';

const RotationTool = () =>
  <Container>
    <Text primary>Common ratios of rotation in days of year.</Text>
    <CountingComponent header="Stock rotation ratio" firstPlaceholder="Sale" secondPlaceholder="Stock" comment="days" multiplier='days'/>
    <CountingComponent header="Receivables rotation ratio" firstPlaceholder="Sale" secondPlaceholder="Receivables" comment="days" multiplier='days'/>
    <CountingComponent header="Liabilities rotation ratio" firstPlaceholder="Sale" secondPlaceholder="Liabilities" comment="days" multiplier='days'/>
  </Container>

export default RotationTool;