export const getCurrentPageNumber = (
  currentPathName: string,
  previousPathName: string,
  currentPageNumber: number
): number => {
  let pageNumber: number;

  if (currentPathName !== previousPathName) {
    pageNumber = 1;
  } else {
    pageNumber = currentPageNumber;
  }

  return pageNumber;
};
