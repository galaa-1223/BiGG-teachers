import { useState } from "react";
import Navbar from '../Menu/Navbar';
import NavItem from '../Menu/NavItem';
import Dropdown from '../Menu/Dropdown';
import DropdownItem from '../Menu/DropdownItem';

const SideMenu = (props) => {

    // const [isOpen, setIsOpen] = useState(false);
    // const toggling = () => setIsOpen(!isOpen);

    return (
        <Navbar>
            <NavItem />
            <NavItem>
                <Dropdown>
                    <DropdownItem />
                    <DropdownItem />
                    <DropdownItem />
                </Dropdown>
            </NavItem>
            <NavItem>
                <Dropdown>
                    <DropdownItem />
                </Dropdown>
            </NavItem>
        </Navbar>
        
    );
};

export default SideMenu;