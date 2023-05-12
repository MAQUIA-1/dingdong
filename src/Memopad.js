import { useState, useEffect } from "react";
import { Box, Button, ButtonGroup } from "@mui/material";

const Memopad = () => {
  const [memo, setMemo] = useState(localStorage.getItem("memo") || "");
  const [fontSize, setFontSize] = useState(15);

  useEffect(() => {
    localStorage.setItem("memo", memo);
  }, [memo]);

  const handleChange = (event) => {
    setMemo(event.target.value);
  };

  const increaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize + 1);
  };

  const decreaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize - 1);
  };

  return (
    <Box>
      <textarea
        value={memo}
        onChange={handleChange}
        style={{
          width: "100%",
          height: "200px",
          border: "solid #9c9c9c 1px",
          borderRadius: "5px",
          fontSize: `${fontSize}px`,
        }}
        placeholder="Memo..."
      />
      <Box>
        <ButtonGroup>
          <Button onClick={increaseFontSize} size="small">
            +
          </Button>
          <Button onClick={decreaseFontSize} size="small">
            -
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default Memopad;
