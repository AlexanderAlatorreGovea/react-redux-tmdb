export const truncateTitle = (title: string): string => {
  const titleLength = title.length;
  const MAXIMUM_ALLOWED_LENGTH = 20;

  if (titleLength > MAXIMUM_ALLOWED_LENGTH) {
    title = formatTruncatedTitle(title, MAXIMUM_ALLOWED_LENGTH);
  }

  return title;
};

const formatTruncatedTitle = (
  title: string,
  MAXIMUM_ALLOWED_LENGTH: number
): string => {
  const TRIPLE_DOTS = "...";
  const truncatedTitle = title
    .split("")
    .slice(0, MAXIMUM_ALLOWED_LENGTH)
    .join("")
    .trim();

  return truncatedTitle + TRIPLE_DOTS;
};
