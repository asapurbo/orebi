import React from "react";
import Logo from "../icons/Logo";

import Container from "../Container";
import Flex from "../Flex";
import List from "../List";
const Header = () => {
  return (
    <nav className="py-8">
      <Container>
        <Flex>
          <div className="w-[5%]">
            <Logo />
          </div>
          <div className="w-[95%]">
            <ul className="flex justify-center gap-x-10">
                <List text="Home" target="_blank" href="/" />
                <List text="Shop" target="_blank" href="/shop" />
                <List text="About" target="_blank" href="/about" />
                <List text="Contacts" target="_blank" href="/contacts" />
                <List text="Journal" target="_blank" href="/journal" />
            </ul>
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Header;
