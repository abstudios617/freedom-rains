import styled from 'styled-components';

export const AccountCommFieldStyles = styled.div`
    margin-left: 12.5%;

    .title {
        width: 720px;
        font-weight: bold;
        font-size: large;
        padding: 1em;
        border-bottom: 1px solid gray;
        display: flex;
        flex-direction: row;
        height: 1em;

        &:hover {
            cursor: pointer;
            background-color: lightgray;
        }

        span {
            width: 400px;
            z-index: 1;
            &:hover {
                cursor: pointer;
            }
        }

        div {
            margin-left: 50px;
        }

        input {
            z-index: 2;
            width: 480px;
            margin-left: 0em;
            border: none;
            font-size: larger;
            background-color: rgba(0, 0, 0, 0);
            position: absolute;

            font-family: 'Montserrat', sans-serif;
            font-weight: bold;
            padding: 1em;
            margin-top: -1.25em;
            margin-left: -1.5em;
            text-align: left;
        }
    }

`;

export const AccountCommFieldChildren = styled.div`
    display: ${props => props.show !== false ? 'flex' : 'none'};
    flex-direction: column;
    width: 720px;
    padding: 0.5em;

    span {
        display: flex;
        flex-direction: row;
        margin: 0 auto;
        padding: 1em 0 0.5em;
    }

    .marketing-checkbox {
        font-weight: bold;
        input {
            margin: 0.5em;
            width: 150px;
        }
    }
`;

export const AccountCommButton = styled.div`
    border-radius: 1em;
    width: fit-content;
    padding: 0.5em;
    margin: 0.25em;
    font-weight: bold;
    font-size: small;
    background-color: white;

    &:hover {
        cursor: pointer;
    }

    &.cancel {
        border: 2px solid #000;
        color: #000;
        &:hover {
            background-color: #000;
            color: white;
        }
    }

    &.save {
        border: 2px solid #49a429;
        color: #49a429;
        &:hover {
            background-color: #49a429;
            color: white;
        }
    }
`;
