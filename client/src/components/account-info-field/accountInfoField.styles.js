import styled from 'styled-components';

export const OuterFlexible = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1em;
    width: 600px;

    .edit {
        font-weight: 700;
        cursor: pointer;
        margin-top: 2.75em;
        margin-left: 5%;
        text-decoration: underline;

        &:hover {
            color: darkgray;
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
