import { Container, Group, Text, Anchor, Flex } from "@mantine/core";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import UserIcon from "../assets/user-circle.svg";

export const Header = () => (
  <Container size="lg" style={{ maxWidth: 1200, height: "100%" }}>
    <Flex align="center" justify="space-between" h={60} pos="relative">
      <Group align="center" gap="sm">
        <img src={Logo} alt="Logo" width={30} height={30} />
        <Text fw={700} size="lg">
          hh <Text component="span" fw={700} c="primary">FrontEnd</Text>
        </Text>
      </Group>

      <Group
        gap="xs"
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Anchor
          component={Link}
          to="/vacancies"
          fw={600}
          size="md"
          underline="never"
          style={{
            color: "#0F0F1080",
          }}
        >
          Вакансии FE
        </Anchor>

        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "#1E88E5",
          }}
        />
      </Group>

      <Group gap="xs">
        <Group align="center" gap="xs">
          <img src={UserIcon} alt="User" width={20} height={20} />
          <Text fw={500} size="sm" style={{ color: "#0F0F1080" }}>
            Обо мне
          </Text>
        </Group>
      </Group>
    </Flex>
  </Container>
);
