import { FooterWrapper, FooterText } from "./styles";
import { Container } from "@/styles/utils";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterText>
          © {new Date().getFullYear()}, Feito com ❤️ por{" "}
          <a
            href="https://www.linkedin.com/in/victor-nevola/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Victor Nevola
          </a>
        </FooterText>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
