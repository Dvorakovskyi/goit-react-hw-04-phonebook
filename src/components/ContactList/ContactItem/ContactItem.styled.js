import styled from "styled-components";

export const StyledItem = styled.li`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    width: 500px;
`;

export const StyledDeleteBtn = styled.button`
    padding: 5px 10px;
    width: 80px;
    font-weight: 700;
    font-size: 16px;
    background-color: #8ec3e0;
    cursor: pointer;
    border: none;
    border-radius: 4px;

    &:hover,
    &:focus {
       background-color: #227ed2; 
    }
`;

export const StyledContactDescr = styled.p`
    font-weight: 500;
`;