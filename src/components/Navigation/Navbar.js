import styled from 'styled-components'

const Navbar = styled.nav`
    backdrop-filter: blur(30px);
    background-color: transparent;
    color: #fff;
    width: 100%;
    height: 72px;
    display:flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
    position: fixed;
    top: 0;
    border-bottom: 1px solid rgba(255,255,255,0.15);
}
`

export default Navbar;