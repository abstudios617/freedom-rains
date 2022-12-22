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

        &:hover {
            box-shadow: 0 0 3px 5px #49a429;
            cursor: pointer;
            transition-duration: 0.25s;
        }
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
            background-color: #49a429;
            border: 2px solid #49a429;
            color: white;
            transition-duration: 0.25s;
        }
    }
`;

export const OrderMoreInfo = styled.div`
    border: 1px solid black;
    border-radius: 0.5em;
    margin: 0.5em;
    padding: 1em;
    user-select: none;

    .orderDetailMain {
        border-radius: 0.5em;
        padding: 0.5em;
        margin: 0.25em;
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
            border: 2px solid red;
            background-color: red;
            color: white;
            transition-duration: 0.5s;
            cursor: pointer;
        }
    }

    .orderDetailDetail {
        font-weight: bold;
        
        div {
            padding: 0.5em;
            margin: 0 0.25em;
        }
    }

    .orderDetailButtons {
        float: right;
        margin-top: -2.5em;

        input {
            border: 2px solid #49a429;
            padding: 0.5em;
            margin: 0.25em 0.5em;
            border-radius: 1em;
            background-color: white;
            color: green;
            font-weight: bold;
            font-family: 'Montserrat', sans-serif;

            &:hover {
                background-color: #49a429;
                color: white;
                cursor: pointer;
                transition-duration: 0.5s;
            }
        }
    }

    .orderDetailInventory {
        padding: 1em;
        margin-top: 1em;

        span {
            font-weight: bold;
            font-size: large;
            padding: 0 1em;
        }
    }

    .orderDetailItem {
        border-radius: 1em;
        padding: 1em;
        background-color: white;
        border: 2px solid #49a429;
        margin: 1em 0.5em;
        width: 480px;

        display: flex;
        flex-direction: row;

        img {
            width: 128px;
            height: 128px;
            border: 1px solid black;
            background-color: gray;
        }

        &:hover {
            background-color: rgba(73, 164, 41, 40%);
            border: 2px solid rgba(73, 164, 41, 40%);
            transition-duration: 0.125s;
            cursor: pointer;
        }
    }

    .orderDetailItemOptions {
        padding: 1em 0;

        span {
            margin-top: -1em;
        }

        div {
            padding: 0.5em 1em;
        }
    }

    .orderDetailOptions {
        padding: 4em;
        margin: 0.5em;

        display: flex;
        flex-direction: column;

        span {
            border: 1px solid lightgray;
            background-color: lightgray;
            color: black;
            padding: 0.5em 1em;
            border-radius: 0.25em;
            margin-bottom: 1em;
            width: 210px;
        }
    }

    .orderDetailPrice {
        font-weight: bold;
        font-size: large;
        background-color: lightgray;
        border-radius: 1em;
        padding: 1em;
        width: fit-content;

        float: right;
    }
`;
