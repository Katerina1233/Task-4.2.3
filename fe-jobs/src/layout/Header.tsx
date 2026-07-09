import { AppShell, Container, Group, Text, Anchor, Flex } from "@mantine/core";
import Logo from "../assets/logo.svg";

export const Header = () => (
  <AppShell.Header>
    <Container size="lg" style={{ maxWidth: 1200 }}>
      <Flex align="center" justify="space-between" h={60}>
        <Group align="center" gap="sm">
          <img
            src={Logo}
            alt="Logo"
            width={30}
            height={30}
            style={{ display: "block" }}
          />

          <Text fw={700} size="lg">
            hh <Text component="span" fw={700} c="primary">FrontEnd</Text>
          </Text>
        </Group>

        <Group gap="md">
          <Anchor fw={500} href="#">Вакансии FE</Anchor>
        </Group>
      </Flex>
    </Container>
  </AppShell.Header>
);
