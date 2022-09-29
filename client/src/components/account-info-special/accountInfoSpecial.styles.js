import styled from 'styled-components';

export const AccountInfoSpecialStyles = styled.div`
    padding: 1em;
    margin: 0.5em;
    background-color: lightgray;
    height: fit-content;
    width: 25%;
    font-weight: bold;

    display: flex;
    flex-direction: row;

    user-select: none;

    &:hover {
        background-color: gray;
        cursor: pointer;
    }

    img {
        width: 1.5em;
        height: 1em;
        margin-top: 1%;
    }

    span {
        padding: 0 0.5em;
        width: 400px;
    }

    div {
        text-align: right;
    }
`;
