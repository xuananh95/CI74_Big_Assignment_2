import styled from "styled-components";
import img from "../../static/anh1.jpeg";
export const SHeader = styled.header`
  //   background-image: url(${img});
  background-color: #7f2407;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px;
  color: white;
  .cart {
    background-color: #431502;
    display: flex;
    align-items: center;
    border-radius: 10%;
    cursor: pointer;
    .amount {
      display: inline-block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #7f2407;
      padding: 10px;
      border-radius: 50%;
      margin-left: 10px;
    }
    padding: 20px;
  }
`;
