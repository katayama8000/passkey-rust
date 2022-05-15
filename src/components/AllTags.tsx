import { Button, Grid } from "@mantine/core";

type Props = {
  allTags: string[];
};
export const AllTags: React.FC<Props> = ({ allTags }) => {
  return (
    <div>
      <Grid>
        {allTags?.map((tag, index) => (
          <Grid.Col key={index} span={3}>
            <div className="pr-1 pt-2">
              <Button variant="light" color="lime">
                {tag}
              </Button>
            </div>
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
};
