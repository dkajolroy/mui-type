import { DeleteOutline } from "@mui/icons-material";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
export default function ButtonPage() {
  return (
    <Box>
      <Box>
        <h1>This is all button</h1>
        <Button color="success" variant="contained">
          Click me
        </Button>
        <Button color="error" variant="outlined">
          Click me
        </Button>
        <Button color="primary" variant="text">
          Click me
        </Button>
      </Box>
      <Box>
        <Button
          startIcon={<DeleteOutline />}
          color="warning"
          variant="contained"
        >
          Click me
        </Button>
        <Button endIcon={<DeleteOutline />} color="info" variant="contained">
          Click me
        </Button>
      </Box>
      <Box>
        <h1>Link button</h1>
        <Button color="secondary" href="/" variant="contained">
          Go to Home
        </Button>
        <Button color="secondary" href="/" disableRipple variant="contained">
          Go to Home
        </Button>
      </Box>
    </Box>
  );
}
