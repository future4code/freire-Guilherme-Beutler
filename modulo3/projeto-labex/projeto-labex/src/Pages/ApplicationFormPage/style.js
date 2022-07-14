import styled from "styled-components";
import TextField from "@mui/material/TextField";

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #17323D;
    min-height: 90vh;
`;
export const CardBody = styled.div`
    color: #35F2DF;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #101A26;
    width: 95vw;
    min-height: 50vh;
    border-radius: 20px;
    margin: 5vh 0vh;
    gap: 20px;
`;

export const Button = styled.button`
    background-color: #101A26;
    border: 2px solid #35F2DF;
    color: #35F2DF;
    width: 100px;
    height: 40px;
    border-radius: 10px;
    margin: 20px 20px;
    cursor: pointer;

`;

export const CssTextField = styled(TextField)({

    "& label.Mui-focused": {
      color: "#35F2DF",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#35F2DF",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#35F2DF",
      },
      "&:hover fieldset": {
        borderColor: "#35F2DF",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#35F2DF",
      },
    },
    
  });

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    color: #35F2DF;
`;

export const Select = styled.select`
    color: #35F2DF;;
    background-color: #101A26;
    border: 1px solid #35F2DF;
    border-radius: 5px;
    height: 50px;

`;