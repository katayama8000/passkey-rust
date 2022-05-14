import { Badge, Grid } from "@mantine/core";

type Props = {
  allTags: string[];
};
export const AllTags: React.FC<Props> = ({ allTags }) => {
  return (
    <div>
      <Grid>
        {allTags?.map((tag, index) => (
          <Grid.Col key={index} span={3}>
            <div className="px-1">
              <Badge color="teal" size="xl">
                {tag}
              </Badge>
            </div>
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
};
