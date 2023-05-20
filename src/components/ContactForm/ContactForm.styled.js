import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 500px;
`;

export const StyledLabel = styled.label`
    margin-bottom: 5px;
    font-weight: 500;
    font-size: 16px;
`;

export const StyledInput = styled.input`
    padding: 5px;
    margin-bottom: 10px;
    width: 488px;
    font-size: 14px;
    border-radius: 4px;
    border: 2px solid black;
`;

export const StyledAddBtn = styled.button`
    padding: 5px 10px;
    width: 500px;
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