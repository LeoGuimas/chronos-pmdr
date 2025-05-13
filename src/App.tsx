import { Heading } from "./components/Heading";
import { Logo } from "./components/Logo";
import { Container } from "./components/Container";

import "./styles/theme.css";
import "./styles/global.css";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Heading>Menu</Heading>
      </Container>

      <Container>
        <section>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
          voluptatibus reprehenderit praesentium ipsam vel natus debitis! Ullam
          voluptatem tempore ex culpa, iste aut tenetur, atque quaerat fuga
          vitae, aliquam repellat.
        </section>
      </Container>
    </>
  );
}
