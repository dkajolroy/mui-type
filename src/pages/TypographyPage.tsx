import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function TypographyPage() {
  return (
    <Box>
      <Box>
        <h1>This is all Heading</h1>
        <Typography variant="h1">Home</Typography>
        <Typography variant="h2">Home</Typography>
        <Typography variant="h3">Home</Typography>
        <Typography variant="h4">Home</Typography>
        <Typography variant="h5">Home</Typography>
        <Typography variant="h6">Home</Typography>
      </Box>
      <Box>
        <h1>This is small Heading h6</h1>
        <Typography variant="subtitle1">Small heading h6</Typography>
        <Typography variant="subtitle2">Small heading h6</Typography>
      </Box>
      <Box>
        <h1>This is span</h1>
        <Typography variant="button">Caption Span </Typography>
        <Typography variant="caption">Caption Span </Typography>
        <Typography variant="overline">span</Typography>
      </Box>
      <Box>
        <h1>This is small Heading p</h1>
        <Typography variant="body1">Paragraph P</Typography>
        <Typography variant="body2">Paragraph P</Typography>
      </Box>
    </Box>
  );
}
