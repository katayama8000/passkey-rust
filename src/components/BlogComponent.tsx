import React from "react";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
  Grid,
} from "@mantine/core";

export const BlogComponent: React.FC = () => {
  return (
    <div style={{ width: 740, margin: "auto" }} className="py-2">
      <Card shadow="sm" p="lg">
        <Grid>
          <Grid.Col span={4}>
            <Card.Section>
              <Image
                src="/img/gollira.jpeg"
                height={160}
                width={220}
                alt="gollira"
              />
            </Card.Section>
          </Grid.Col>
          <Grid.Col span={8}>
            <div className="p-1 text-center text-xl font-extrabold">
              blogtitle
            </div>
            <div className="text-gray-500">blogtext</div>
          </Grid.Col>
        </Grid>
      </Card>
    </div>
  );
};
