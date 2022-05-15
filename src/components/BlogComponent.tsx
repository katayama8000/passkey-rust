import React, { useEffect, useState } from "react";
import { Card, Image, Grid, Badge } from "@mantine/core";
import { useMakeString } from "@hooks/useMakeString";

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
  const displayTitle = useMakeString(title, 15);
  const displayContent = useMakeString(content, 95);

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
            <div className="py-1 text-center text-xl font-extrabold">
              {displayTitle}
            </div>
            <div className="text-gray-500">{displayContent}</div>
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
