import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: translateY(-1000px)
    }
    to {
        transform: translateY(0px)
    }
`;

export const SModal = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    .modal-wrapper {
        animation: ${rotate} 0.5s linear;
        background-color: white;
        border-radius: 10px;
        padding: 10px 20px;
        width: 100%;
        max-width: 500px;
        .modal-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
    .modal-content {
        display: flex;
        flex-direction: column;
        .content-header {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            /* .item-header {
                flex-grow: ;
            }
            .amount-header {
                flex-grow: 1;
            } */
        }
        .content-item {
            .item-wrap {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                .item-left {
                    display: flex;
                    align-items: center;
                    .info {
                        margin-left: 10px;
                        .name {
                            color: aqua;
                        }
                        .description {
                            margin: 5px 0;
                            color: gray;
                            max-width: 300px;
                            min-width: 300px;
                        }
                    }
                }
                .item-right {
                    margin-left: 10px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    .amount-text {
                        font-size: 20px;
                    }
                    .button-container {
                        flex-direction: column;
                    }
                }
            }
        }
    }
`;
