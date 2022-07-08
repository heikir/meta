import { Container, Main, Title } from "../components/sharedstyles";
import Cards from "../components/cards";

export default function Home() {
  return (
    <Container>
      <Main>
        <Title>Meta Ventures</Title>
        <Cards />
      </Main>
    </Container>
  );
}
