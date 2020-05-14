import styled from 'styled-components'

export const Button = styled.a`
    background-color: transparent;
    border: ${props => props.hideBorder ? '' : `1px solid ${props.blackStyle ? '#000000' : '#ffffff'}`};
    text-decoration: none;
    border-radius: 6px;
    cursor: pointer;
    padding: ${props => (props.hideBorder ? "0" : '10px 25px')};
    font-size: 14px;
    color: ${props => (props.blackStyle ? "#000000" : '#ffffff')};;
    font-family: 'DM Sans Regular';

    &:hover {
        background-color:${props => props.hideBorder ? '' : (props.blackStyle ? "#000000" : '#ffffff')};
        color:${props => props.hideBorder ? '' : (props.blackStyle ? "#ffffff" : '#000000')};
    }
`