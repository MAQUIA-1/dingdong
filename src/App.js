import "@fontsource/roboto/400.css";
import { Container, Box, Card } from "@mui/material";
import Calendar from "./Calendar";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.body.style = "background: #e7ebf0";
  }, []);

  return (
    <Container maxWidth="lg">
      <Box mt={"20px"} display={"flex"} justifyContent={"center"}>
        <Calendar />

        <Box>
          <Card sx={{ m: "10px", p: "10px" }}>
            <iframe
              id="hikorea-web-page"
              title="hikorea"
              width="500px"
              height="800px"
              frameBorder={0}
              src="https://www.hikorea.go.kr/info/mobileCheckExprYmdByPassNoR.pt"
            />
          </Card>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
