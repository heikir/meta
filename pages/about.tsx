import Link from "next/link";
import { Container, Main, Title } from "../components/sharedstyles";

export default function About() {
  return (
    <Container>
      <Main>
        <Title>About Page</Title>
        <Link href="/">
          <a>&larr; Go Back</a>
        </Link>
      </Main>
    </Container>
  );
}
