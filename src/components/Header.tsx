import NavBar from "@/components/NavBar";
import { createClient } from "@/prismicio";

const Header = async () => {
  const client = createClient();
  const seetings = await client.getSingle("seetings");
  return (
    <header>
      <NavBar seetings={seetings} />
    </header>
  );
};

export default Header;
