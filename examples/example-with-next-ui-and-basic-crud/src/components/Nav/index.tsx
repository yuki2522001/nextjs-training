import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarItem,
} from "@nextui-org/navbar";
import { ThemeSwitcher } from "..";

const Navbar = () => {
    return (
        <NextUINavbar maxWidth="xl" position="sticky">
            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end"
            >
                <NavbarItem className="hidden sm:flex gap-2">
                    <ThemeSwitcher />
                </NavbarItem>
            </NavbarContent>
        </NextUINavbar>
    );
};

export default Navbar;
