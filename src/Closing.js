import { useState, useEffect } from "react";
import { Card, Typography, ToggleButton, Box, TextField, ToggleButtonGroup, Tooltip, IconButton } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function Closing() {
  const [selected1, setSelected1] = useState(JSON.parse(localStorage.getItem("selected1")) || false);
  const [inputVal1, setInputVal1] = useState(JSON.parse(localStorage.getItem("inputVal1")) || 0);
  const [selected2, setSelected2] = useState(JSON.parse(localStorage.getItem("selected2")) || false);
  const [inputVal2, setInputVal2] = useState(JSON.parse(localStorage.getItem("inputVal2")) || 0);

  useEffect(() => {
    localStorage.setItem("selected1", JSON.stringify(selected1));
    localStorage.setItem("selected2", JSON.stringify(selected2));
  }, [selected1, selected2]);

  useEffect(() => {
    localStorage.setItem("inputVal1", JSON.stringify(inputVal1));
    localStorage.setItem("inputVal2", JSON.stringify(inputVal2));
  }, [inputVal1, inputVal2]);

  //--------------------------------------------------------------------------------------------
  const [toggle, setToggle] = useState(localStorage.getItem("ticketToggle") || "separate");

  useEffect(() => {
    localStorage.setItem("ticketToggle", toggle);
  }, [toggle]);
  //--------------------------------------------------------------------------------------------
  return (
    <Card sx={{ m: "10px", p: "20px" }}>
      <Box display={"flex"}>
        <Box>
          {/* 2000번대 */}
          <Box mb={"15px"}>
            <TextField
              label="2000"
              size="small"
              type="number"
              disabled={selected1}
              sx={{ width: "100px", mr: "5px" }}
              value={inputVal1}
              onChange={(e) => {
                setInputVal1(e.target.value);
              }}
            ></TextField>

            <ToggleButton
              value="closing"
              selected={selected1}
              onChange={() => {
                setSelected1(!selected1);
              }}
              size="small"
            >
              {selected1 ? (
                <Typography width={"50px"}>마감됨</Typography>
              ) : (
                <Typography width={"50px"}>발급중</Typography>
              )}
            </ToggleButton>
          </Box>

          {/* 3000번대 */}
          <Box mb={"15px"}>
            <TextField
              label="3000"
              size="small"
              type="number"
              disabled={selected2}
              sx={{ width: "100px", mr: "5px" }}
              value={inputVal2}
              onChange={(e) => {
                setInputVal2(e.target.value);
              }}
            ></TextField>

            <ToggleButton
              value="closing"
              selected={selected2}
              onChange={() => {
                setSelected2(!selected2);
              }}
              size="small"
            >
              {selected2 ? (
                <Typography width={"50px"}>마감됨</Typography>
              ) : (
                <Typography width={"50px"}>발급중</Typography>
              )}
            </ToggleButton>
          </Box>

          {/* 통합발급여부 */}
          <Box>
            <ToggleButtonGroup
              exclusive
              value={toggle}
              onChange={(e, newVal) => {
                if (newVal !== null) {
                  setToggle(newVal);
                }
              }}
            >
              <ToggleButton value="separate" size="small">
                <Tooltip placement="top" arrow title="2000, 3000 각각발급">
                  <Typography width={"70px"}>각각발급</Typography>
                </Tooltip>
              </ToggleButton>
              <ToggleButton value="integrate" size="small">
                <Tooltip placement="top" arrow title="2000번대 통합발급">
                  <Typography width={"70px"}>통합발급</Typography>
                </Tooltip>
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Box>

        {/* 도움말 */}
        <Box ml={"auto"}>
          <IconButton sx={{ p: "0px" }}>
            <Tooltip placement="top" arrow title="오전 마감번호, 통합발급여부 단순메모">
              <InfoOutlinedIcon sx={{ color: "gray" }} />
            </Tooltip>
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}

export default Closing;
