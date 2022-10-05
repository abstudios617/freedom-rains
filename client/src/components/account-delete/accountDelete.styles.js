import styled from 'styled-components';

export const DeleteAccountStyles = styled.div`
    padding: 1em;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    input {
        width: fit-content;
        height: fit-content;
        margin-top: 1em;
        margin-left: 2.5em;

        border: none;
        background-color: transparent;
        font-family: 'Montserrat', sans-serif;
        font-size: large;
        font-weight: bold;
        text-decoration: underline;

        &:hover {
            color: rgba(0, 0, 0, 80%);
            cursor: pointer;
        }
    }
`;

export const DeleteAccountButton = styled.div`
    border-radius: 1.5em;
    padding: 1em;
    background-color: white;
    border: 2px solid #49a429;
    color: #49a429;
    font-weight: bold;
    width: fit-content;
    user-select: none;

    &:hover {
        background-color: #49a429;
        color: white;
        cursor: pointer;
    }
`;
