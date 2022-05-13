import React from "react";
import { Avatar, Card, Image, Text } from "@mantine/core";

export const Profile = () => {
  return (
    <Card shadow="sm" p="xl" component="a" target="_blank">
      <Card.Section>
        <div className="flex justify-center py-4">
          <Avatar radius="xl" size="xl" src="/img/gollira.jpeg" />
        </div>
      </Card.Section>

      <Text weight={500} size="lg">
        I am Gollira
      </Text>

      <Text size="sm">
        My father is Gollira. My mother is Gollira. My sister is Gollira.
      </Text>
    </Card>
  );
};
