import { Stack } from "@mui/material";

export default function FlexboxPage() {
  return (
    <Stack direction="row" justifyContent="space-around" spacing={10}>
      <Stack> Home 1</Stack>
      <Stack>Home 2</Stack>
    </Stack>
  );
}
