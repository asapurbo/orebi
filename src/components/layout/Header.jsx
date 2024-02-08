import Logo from "../icons/Logo";
import Container from "../Container";
import Flex from "../Flex";
import List from "../List";
import HeaderData from "../data/HeaderData";

const Header = () => {
  const { HeadDataList: data } = HeaderData();

  return (
    <nav className="py-8">
      <Container>
        <Flex>
          <div className="w-[5%]">
            <Logo />
          </div>
          <div className="w-[95%]">
            <ul className="flex justify-center gap-x-10">
              {data.map((item, index) => (
                <List
                  key={index}
                  text={item.text}
                  href={item.href}
                  handelClick={item.handelClick}
                />
              ))}
            </ul>
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Header;
