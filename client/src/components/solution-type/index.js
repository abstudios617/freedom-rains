import React from 'react';
import { 
  CommerceSolution,
  MarketingSolution,
  DevelopmentSolution,
  ShadowBox,
  SolutionsContainer,
  NonSelectedSolution,
  NonSelectedSolutionDev
} from './solution-type.styles';

const SolutionType = ({ solutionType, setSolutionType }) => {
  const switchSolutionTypes = (type) => {
    setSolutionType(type);
  };

  if (solutionType === 'ecommerce') {
    return (
      <SolutionsContainer>
        <CommerceSolution
          onClick={() => switchSolutionTypes('ecommerce')}
          className={`${
            solutionType === 'ecommerce'
          }`}
        >
          E-Commerce Solutions
        </CommerceSolution>
        <NonSelectedSolution
          onClick={() => switchSolutionTypes('marketing')}
          className={`${
            solutionType === 'marketing'
          }`}
        >
          Marketing Solutions
        </NonSelectedSolution>
        <NonSelectedSolutionDev
          onClick={() => switchSolutionTypes('development')}
          className={`${
            solutionType === 'development'
          }`}
        >
          Development Solutions
        </NonSelectedSolutionDev>
        <ShadowBox></ShadowBox> 
      </SolutionsContainer> 
    );
  } else if (solutionType === 'marketing') {
    return (
      <SolutionsContainer>
        <NonSelectedSolution
          onClick={() => switchSolutionTypes('ecommerce')}
          className={`${
            solutionType === 'ecommerce'
          }`}
        >
          E-Commerce Solutions
        </NonSelectedSolution>
        <MarketingSolution
          onClick={() => switchSolutionTypes('marketing')}
          className={`${
            solutionType === 'marketing'
          }`}
        >
          Marketing Solutions
        </MarketingSolution>
        <NonSelectedSolutionDev
          onClick={() => switchSolutionTypes('development')}
          className={`${
            solutionType === 'development'
          }`}
        >
          Development Solutions
        </NonSelectedSolutionDev>
        <ShadowBox></ShadowBox>
      </SolutionsContainer> 
    );
  } else {
    return (
      <SolutionsContainer>
        <NonSelectedSolution
          onClick={() => switchSolutionTypes('ecommerce')}
          className={`${
            solutionType === 'ecommerce'
          }`}
        >
          E-Commerce Solutions
        </NonSelectedSolution>
        <NonSelectedSolution
          onClick={() => switchSolutionTypes('marketing')}
          className={`${
            solutionType === 'marketing'
          }`}
        >
          Marketing Solutions
        </NonSelectedSolution>
        <DevelopmentSolution
          onClick={() => switchSolutionTypes('development')}
          className={`${
            solutionType === 'development'
          }`}
        >
          Development Solutions
        </DevelopmentSolution>
        <ShadowBox></ShadowBox>
      </SolutionsContainer> 
    );
  }
};

export default SolutionType; 
