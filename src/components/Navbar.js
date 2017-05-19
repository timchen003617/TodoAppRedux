import styled from 'styled-components'

import { Link } from 'react-router-dom'
import mapPropsAsCss from 'falcon/utils/mapPropsAsCss'

const Navbar = styled.div`
    background-color: #333;
    overflow: hidden;

    ${mapPropsAsCss}
`
const item = styled(Link)`
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;

    ${mapPropsAsCss}

    &:hover {
        background-color: #ddd;
        color: black;
    }
`
Navbar.item = item

Navbar.displayName = 'Navbar'
Navbar.item.displayName = 'NavbarItem'

export default Navbar
