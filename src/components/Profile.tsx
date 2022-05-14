import React, { useEffect, useState } from "react";
import { Avatar, Card, Text } from "@mantine/core";

type Props = {
  padding?: number;
};
export const Profile: React.FC<Props> = ({ padding }) => {
  const [py, setPy] = useState("");
  let style = `py-${padding}`;
  useEffect(() => {
    setPy(style);
  }, [style]);
  return (
    <div className={py}>
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
    </div>
  );
};
