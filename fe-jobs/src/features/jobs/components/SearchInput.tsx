import { TextInput, Button, Group } from "@mantine/core";
import { useState } from "react";

export const SearchInput = () => {
  const [value, setValue] = useState("");

  const handleSearch = () => {
    console.log("Поиск:", value);
  };

  return (
    <Group gap="sm">
      <TextInput
        placeholder="Должность или название компании"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        radius="md"
        size="md"
        style={{ minWidth: 403 }}
      />

      <Button
        radius="md"
        size="md"
        onClick={handleSearch}
      >
        Найти
      </Button>
    </Group>
  );
};
