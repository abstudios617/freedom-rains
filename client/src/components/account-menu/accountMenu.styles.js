import styled from 'styled-components';

export const AccountMenuContainer = styled.div`
    border: 1px solid black;
    padding: 1em;
    margin: 0 auto;
    max-width: 360px;
`;

export const AccountMenuButtonStyles = styled.div`
    background-color: #F8F8F8;
    color: black;
    padding: 0 5px;
    margin: 20px 5px;
    padding-bottom: 1%;
    width: auto;
    cursor: pointer;

    &:hover {
        background-color: #49a429;
        color: white;
    }
`;

export const OuterFlexible = styled.div`
    display: flex;
    flex-direction: row;
`;

export const InnerFlexible = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.5em;

    span {
        font-weight: 600;
        padding: 0.5em 0 0.5em 0.25em;
    }
`;

export const IconContainer = styled.div`
    padding: 0.5em;
    margin: 0.5em 0.25em;
    width: 5%;
    max-height: 20px;
    box-shadow: 0 0 40px black inset;

    img {
        height: 16px;
    }
`;
