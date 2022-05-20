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
  return (
    <div className="m-auto py-4">
      <Card shadow="sm">
        <Grid>
          <Grid.Col span={4}>
            <Image
              src={image?.url}
              height={120}
              width={180}
              alt="gollira"
              withPlaceholder
              radius="md"
            />
          </Grid.Col>
          <Grid.Col span={8}>
            <div className="py-1 text-center text-xl font-extrabold line-clamp-1">
              {title}
            </div>
            <div className="text-gray-500 line-clamp-2">{content}</div>
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
