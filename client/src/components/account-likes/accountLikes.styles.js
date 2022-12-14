import styled from 'styled-components';

export const AccountLikesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const LikeItemStyles = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;

    .likeMain {
        border: 1px solid black;
        border-radius: 1em;
        padding: 1em;
        width: fit-content;
        margin: 0.5em;

        &:hover {
            box-shadow: 0 0 3px 5px #49a429;
            cursor: pointer;
            background-color: rgba(73, 164, 41, 25%);
            transition-duration: 0.5s;
        }
    }

    .likeMainImage {
        background-color: gray;
        min-height: 12em;
        min-width: 12em;
        user-select: none;
        margin: 0.125em;
        margin-bottom: 0.5em;

        &:hover {
            cursor: pointer;
        }
    }

    .likeTop {
        display: flex;
        flex-direction: row;
        font-weight: bold;
    }

    .likeTopText {
        width: 9.5em;
        height: 2em;
        user-select: none;
        
        &:hover {
            cursor: pointer;
        }
    }

    .likeTopDelete {
        color: red;
        margin: 0 1em;
        padding: 0 0.5em;
        margin: 0.25em;
        width: 20px;
        height: 24px;
        padding: 0.25em 0;

        &:hover {
            box-shadow: 0 0 0.5em 0.25em red;
            background-color: red;
            border-radius: 1em;
            color: white;
            transition-duration: 0.25s;
            cursor: pointer;
        }
    }

    .likeBottom {
        font-size: small;
        user-select: none;
    }
`;
