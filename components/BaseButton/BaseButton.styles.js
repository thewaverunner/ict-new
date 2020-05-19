import styled from 'styled-components'

export const Button = styled.a`
    background-color: transparent;
    border: ${props => props.hideBorder ? '' : `1px solid ${props.blackStyle ? '#000000' : '#ffffff'}`};
    text-decoration: none;
    max-width: 160px;
    border-radius: 6px;
    text-align: center;
    cursor: pointer;
    padding: ${props => (props.hideBorder ? "0" : '10px 30px')};
    font-size: 14px;
    color: ${props => (props.blackStyle ? "#000000" : '#ffffff')};
    font-family: 'DM Sans Regular';

    &:hover {
        background-color:${props => props.hideBorder ? '' : (props.blackStyle ? "#000000" : '#ffffff')};
        color:${props => props.hideBorder ? '' : (props.blackStyle ? "#ffffff" : '#000000')};
    }

    span {
        display: inline-block;
        width: 6px;
        margin-left: 15px;
        height: 10px;
        background: ${props => (props.blackStyle ? "url('../static/images/base-arrow-black.svg') no-repeat;" : "url('../static/images/base-arrow-white.svg') no-repeat;")}
    }

    &:hover span {
        background: ${props => props.hideBorder ? '' : props.blackStyle ? "url('../static/images/base-arrow-white.svg') no-repeat;" : "url('../static/images/base-arrow-black.svg') no-repeat;"}
    }
`