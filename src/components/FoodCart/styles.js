import styled from "styled-components";

export const SFoodCart = styled.div`
    display: flex;
    .item-right {
        display: flex;
        align-items: center;
        flex-direction: column;
        .button-add {
            width: 60%;
            border: none;
            background-color: #7f2407;
            color: white;
            cursor: pointer;
            border-radius: 5px;
            padding: 10px 10px;
            margin: 0 auto;
            margin-top: 10px;
        }
        .amount {
            display: flex;
            align-items: center;
            justify-content: center;
            input {
                margin-left: 10px;
                width: 40%;
            }
        }
    }
`;
