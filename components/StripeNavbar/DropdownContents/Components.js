import styled from 'styled-components'

export const DropdownSection = styled.div`
    padding: 25px 25px;
    position: relative;
    z-index: 1;

    li {
        padding: 10px 0;
        margin: 0;
    }

    li:first-child {
        padding-top: 0;
    }

    li:last-child {
        padding-bottom: 0;
    }

    a {
        text-decoration: none;
        color: #000000;
        font-size: 14px;
        font-family: 'DM Sans Bold';
    }

    a:hover {
        opacity: 0.5;
        transition: opacity .3s ease-in-out;
    }
`

export const DropdownSectionMobile = styled.div`
    padding: 25px 25px;
    position: relative;
    z-index: 1;
    }

    ul {
        margin-bottom: 25px;
        padding:0;
    }

    li:first-child {
        margin-bottom: 10px;
        font-size: 16px;
        font-family: 'DM Sans Bold';
        color: #000000;
    }

    li {
        line-height: 30px;
    }
    
    li a {
        text-decoration: none;
        color: #000000;
        font-size: 14px;
        font-family: 'DM Sans Medium';
    }

    a:hover {
        opacity: 0.5;
        transition: opacity .3s ease-in-out;
    }

    .close-icon {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 35px;
        height: 30px;
        align-self: center;
        background-color: white;
        z-index: 1;
        position: relative;
        float: right;
    } 

    .close-icon  span {
        display: block;
        width: 100%;
        height: 4px;
        background-color: #000;
        border-radius: 3px;
        transition: transform 0.3s ease;
    }

    .close-icon  span:first-child {
        transform: rotate(45deg)translate(-1px, 1px);
    }

    .close-icon  span:last-child {
        transform: rotate(-45deg)translate(17px, -20px);
    }

`