import React from "react";
import { Card, Image, Grid, Badge } from "@mantine/core";

type Props = {
  title: string;
  content: string;
  image?: { url: string; height: number; width: number };
  tags?: string[];
};

export const BlogComponent: React.FC<Props> = ({
  title,
  content,
  image,
  tags,
}) => {
  console.log("image", image);
  console.log("content", content);
  console.log("tags", tags);

  return (
    <div style={{ width: 800, margin: "auto" }} className="py-2">
      <Card shadow="sm" p="lg">
        <Grid>
          <Grid.Col span={4}>
            <Image
              src={image?.url}
              height={120}
              width={180}
              alt="gollira"
              withPlaceholder
            />
          </Grid.Col>
          <Grid.Col span={8}>
            <div className="p-1 text-center text-xl font-extrabold">
              {title}
            </div>
            <div className="text-gray-500">{content}</div>
            <div className="flex flex-row-reverse">
              {tags?.map((tag, index) => (
                <div key={index} className="px-1">
                  <Badge>{tag}</Badge>
                </div>
              ))}
            </div>
          </Grid.Col>
        </Grid>
      </Card>
    </div>
  );
};
