import React from "react";
import { Card, Image, Grid } from "@mantine/core";

type Props = {
  title: string;
  content: string;
  image?: string;
};

export const BlogComponent: React.FC<Props> = ({ title, content }) => {
  return (
    <div style={{ width: 800, margin: "auto" }} className="py-2">
      <Card shadow="sm" p="lg">
        <Grid>
          <Grid.Col span={4}>
            <Image
              src="/img/gollira.jpeg"
              height={120}
              width={180}
              alt="gollira"
            />
          </Grid.Col>
          <Grid.Col span={8}>
            <div className="p-1 text-center text-xl font-extrabold">
              {title}
            </div>
            <div className="text-gray-500">{content}</div>
          </Grid.Col>
        </Grid>
      </Card>
    </div>
  );
};
