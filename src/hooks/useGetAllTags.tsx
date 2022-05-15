export const useGetAllTags = (contents: any) => {
  let array: string[] = [];
  for (let i = 0; i < contents?.length; i++) {
    array.push(...contents[i].tag);
  }
  const allTags = array.filter((ele, pos) => {
    return array.indexOf(ele) == pos;
  });
  return allTags;
};
