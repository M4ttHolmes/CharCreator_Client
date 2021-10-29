import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";

const Header = () => {
    return(
        <header>
            <Navbar className="header">
                <NavbarBrand href="/">Character Creator</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/">
                            Logout
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
    );
};
export default Header;