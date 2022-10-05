import styled from 'styled-components';

export const AccountCommFieldStyles = styled.div`
    margin-left: 12.5%;

    .title {
        width: 720px;
        font-weight: bold;
        font-size: large;
        padding: 1em;
        border-bottom: 1px solid gray;

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
        }

        &:hover {
            cursor: pointer;
            background-color: lightgray;
            z-index: 2;
        }
    }

`;

export const AccountCommFieldChildren = styled.div`
    display: ${props => props.show !== false ? 'flex' : 'none'};
    flex-direction: column;
    width: 720px;
    padding: 0.5em;

    .marketing-checkbox {
        font-weight: bold;
        input {
            margin: 0.5em;
            width: 150px;
        }
    }
`;
