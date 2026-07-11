import { Container, Group, Text, Anchor, Flex } from "@mantine/core";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

export const Header = () => (
  <Container size="lg" style={{ maxWidth: 1200, height: "100%" }}>
    <Flex align="center" justify="space-between" h="100%">
      <Group align="center" gap="sm">
        <img
          src={Logo}
          alt="Logo"
          width={30}
          height={30}
          style={{ display: "block" }}
        />

        <Text fw={700} size="lg">
          hh{" "}
          <Text component="span" fw={700} c="primary">
            FrontEnd
          </Text>
        </Text>
      </Group>

      <Group gap="md">
        <Anchor
          component={Link}
          to="/vacancies"
          fw={500}
          underline="never"
        >
          Вакансии FE
        </Anchor>
      </Group>
    </Flex>
  </Container>
);
