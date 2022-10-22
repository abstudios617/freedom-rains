import styled from 'styled-components';

export const OrderItemStyles = styled.div`
    border-radius: 1em;
    border: 1px solid black;
    margin: 0.5em;

    .orderMain {
        padding: 1em;
    }

    .orderNumber {
        font-weight: bold;
        padding: 0.25em;
    }

    .orderDelivery {
        display: flex;
        flex-direction: row;
    }

    .orderDelivery div {
        font-weight: bold;
        font-size: small;
        margin-right: 2em;
    }

    .orderItemsPreview {
        display: flex;
        flex-direction: row;
    }

    .orderItemObject {
        padding: 1em;
        margin: 0.25em;
    }

    .orderItemObjectImg {
        height: 8em;
        width: 8em;
        background-color: gray;
        border: 1px solid black;
    }

    .orderItemObjectText {
        display: none;
    }

    .itemTotalPrice {
        margin: 0 1em;
    }

    .objectItemOptions {
        text-align: right;
        margin-left: 1em;
        margin-top: -1em;
    }

    input {
        border: 2px solid white;
        color: white;
        font-weight: bold;
        margin: 0 1em;
        background-color: gray;
        padding: 0.5em;
        border-radius: 1em;
        font-family: 'Montserrat', sans-serif;

        &:hover {
            cursor: pointer;
            background-color: white;
            border: 2px solid light;
            color: gray;
            transition-duration: 0.25s;
        }
    }

    .extras {
        display: none;
    }
`;

export const OrderMoreInfo = styled.div`
    border: 1px solid black;
    border-radius: 0.5em;
    margin: 0.5em;
    padding: 1em;
    user-select: none;

    .orderDetailMain {
        border: 1px solid gray;
        border-radius: 0.5em;
        padding: 0.5em;
        margin: 0.5em;
    }

    .cancelDetails {
        border: 2px solid white;
        border-radius: 1em;
        padding: 1em;
        color: white;
        background-color: gray;
        text-align: right;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;

        &:hover {
            border: 2px solid gray;
            background-color: white;
            color: gray;
            transition-duration: 0.5s;
            cursor: pointer;
        }
    }
`;
