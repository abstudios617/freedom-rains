import React from 'react';
import { 
  CommerceSolution,
  MarketingSolution,
  DevelopmentSolution,
  ShadowBox,
} from './solution-type.styles';

const SolutionType = ({ solutionType, setSolutionType }) => {
  const switchSolutionTypes = (type) => {
    setSolutionType(type);
  };

  return (
    <div>
      <CommerceSolution
        onClick={() => switchSolutionTypes('commerce')}
        className={`${
          solutionType === 'ecommerce'
        }`}
      >
        E-Commerce Solutions
      </CommerceSolution>
      <MarketingSolution
        onClick={() => switchSolutionTypes('marketing')}
        className={`${
          solutionType === 'marketing'
        }`}
      >
        Marketing Solutions
      </MarketingSolution>
      <DevelopmentSolution
        onClick={() => switchSolutionTypes('development')}
        className={`${
          solutionType === 'development'
        }`}
      >
        Development Solutions
      </DevelopmentSolution>
      <ShadowBox></ShadowBox>
    </div> 
  );
};

export default SolutionType; 
