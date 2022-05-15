/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

export const useGetAllTags = (contents: any) => {
  const [allTags, setAlltags] = useState<string[]>([]);
  useEffect(() => {
    let array: string[] = [];
    for (let i = 0; i < contents?.length; i++) {
      array.push(...contents[i].tag);
    }
    const filteredArray = array.filter(function (ele, pos) {
      return array.indexOf(ele) == pos;
    });
    setAlltags(filteredArray);
  }, []);

  return allTags;
};
