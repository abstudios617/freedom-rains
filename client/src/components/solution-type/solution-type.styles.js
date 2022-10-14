import styled from 'styled-components';

export const CommerceSolution = styled.button`
    font-weight: 900;
    margin: 20px 70px 0px 0px;
    background: transparent; 
    border: none;
    border-bottom: 3px solid green;
`;

export const MarketingSolution = styled.button`
    font-weight: 900;
    margin: 20px 70px 0px 0px;
    background: transparent; 
    border: none;
    border-bottom: 3px solid yellow;
`;

export const DevelopmentSolution = styled.button`
    font-weight: 900;
    background: transparent; 
    border: none;
    border-bottom: 3px solid red;
`;

export const ShadowBox = styled.div`
    background-color: gray; 
    height: 3px;
    margin: 25px 0px;
    opacity: 0.1; 
    border-top: 3px solid black; 
    width: 1260px;
    
    @media only screen and (max-width: 480px) {
        width: 600px; 
    }
`;

export const SolutionsContainer = styled.div`
    text-align: center;
    @media only screen and (max-width: 480px) {
        width: 100%;
        overflox-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
    }
`;

export const NonSelectedSolution = styled.button`
    font-weight: 500;
    margin: 20px 70px 0px 0px;
    background: transparent; 
    border: none;
    color: gray;
    opacity: 0.8; 
`;

export const NonSelectedSolutionDev = styled.button `
    font-weight: 500;
    background: transparent; 
    border: none;
    color: gray;
    opacity: 0.8; 
`;
