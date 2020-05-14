import styled from 'styled-components'

export const Button = styled.a`

    text-decoration: none;
    border-radius: 6px;
    font-size: 14px;
    cursor:pointer;
    padding: ${({ hideBorder }) => hideBorder ? null : '10px 25px'};
    color: #000000;
    font-family: 'DM Sans Regular';
    border: ${({ hideBorder }) => hideBorder ? null : '1px solid #000000'};
`