import { Logo } from "./components/Logo";
import { Container } from "./components/Container";
import { Menu } from "./components/Menu";

import "./styles/theme.css";
import "./styles/global.css";
import { CountDown } from "./components/CountDown";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>
    </>
  );
}
