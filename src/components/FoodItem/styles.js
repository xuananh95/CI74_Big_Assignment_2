import styled from "styled-components";

export const SFoodItem = styled.div`
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
            max-width: 500px;
            min-width: 500px;
        }
    }
`;
