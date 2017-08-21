import { h } from "preact";
import styled, { css, keyframes } from 'emotion/react'
import theme from '../../helpers/theme';

import List from '../list';

const panel = css`
  width: 100%;
  height: 400px;
  // background-image: linear-gradient(-180deg, #343350 21%, #27273D 94%);
  background-color: ${theme.dark3};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  &.black {
    background-image: none;
    background-color: ${theme.dark3};
  }
`;

const panelHeading = css`
  height: 60px;
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-shadow: 0 2px 10px 4px rgba(0,0,0,0.09);
  position: relative;
  overflow: hidden;
  &.green {
    background-image: linear-gradient(-47deg, #219CC8 0%, #4ACFC5 100%);
  }
  &.orange {
    background-image: linear-gradient(-47deg, #FF6B9A 0%, #FF8370 100%);
  }
  &.purple {
    background-image: linear-gradient(-47deg, #B154F4 0%, #7D71FC 100%);
  }
  &.black {
    background-image: linear-gradient(-48deg, #333254 0%, #333254 100%);
  }
`;

const Count = styled('h2')`
  font-weight: 800;
  font-size: 40px;
  line-height: 30px;
  color: #FFF;
  opacity: 0.2;
  position: absolute;
  left: -4px;
  bottom: -2px;
`;


const Block = ({color = 'green', title=''}) => {
  
  return (
    <div className={`${panel} ${color}`}>
      <div className={`${panelHeading} ${color}`}>
        <Count>{title}</Count>
      </div>
      <List />
    </div>
  )  
  
}

export default Block;