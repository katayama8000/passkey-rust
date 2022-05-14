import React, { useEffect, useState } from "react";
import { Card, Image, Grid, Badge } from "@mantine/core";

type Props = {
  title: string;
  content: string;
  image?: { url: string; height: number; width: number };
  tags?: string[];
};

const MAX_CONTENT_LENGTH = 95;

export const BlogComponent: React.FC<Props> = ({
  title,
  content,
  image,
  tags,
}) => {
  console.log("image", image);
  console.log("content", content);
  console.log("tags", tags);
  const [displaycontent, setDisplaycontent] = useState(content);

  useEffect(() => {
    if (content.length > MAX_CONTENT_LENGTH) {
      setDisplaycontent(content.substring(0, MAX_CONTENT_LENGTH) + "...");
    }
  }, []);

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
              {title}
            </div>
            <div className="text-gray-500">{displaycontent}</div>
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
