import styled from 'styled-components';

export const OuterFlexible = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1em;
    width: 600px;

    input {
        height: fit-content;
        margin-top: 4em;
        background: none;
        border: none;
        font-weight: bold;
        font-family: 'Montserrat', sans-serif;
        text-decoration: underline;

        &:hover {
            color: rgba(0, 0, 0, 80%);
            cursor: pointer;
        }
    }
`;

export const InnerFlexible = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5em;

    small {
        padding-bottom: 2.5%;
        width: 300px;
    }

    span {
        font-weight: 700;
    }
`;
