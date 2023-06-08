import { useEffect, useState } from "react";
import Cal from "react-calendar";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { Box, Card, Typography, Input, Chip } from "@mui/material";

import "./calendar.css";

import Months from "./Months";
import Memopad from "./Memopad";

function Calendar() {
  dayjs.locale("ko");
  const [value, onChange] = useState(new Date()); // react-calendar 시각
  const [currentTime, setCurrentTime] = useState(dayjs()); // dayjs 현재시각

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  //-----------------------------------[나이 계산]------------------------------------------
  const [inputAge, setInputAge] = useState(70);
  const [ageResult, setAgeResult] = useState(0);

  useEffect(() => {
    const seventyYearsAgo = currentTime.subtract(inputAge, "year").format("YYYY-MM-DD");
    setAgeResult(seventyYearsAgo);
  }, [inputAge]);

  //--------------------------------------[날짜 차이]------------------------------------------
  const [inputDay1, setInputDay1] = useState(15); // 체류지변경
  const [inputDay2, setInputDay2] = useState(45); // 여권변경
  const [inputDay3, setInputDay3] = useState(7); // 비행기, 근로계약서

  const [diffValue, setDiffValue] = useState(0);
  const [invertDiffValue, setInvertDiffValue] = useState(0);

  const [day1Result, setDay1Result] = useState(false);
  const [day2Result, setDay2Result] = useState(false);
  const [day3Result, setDay3Result] = useState(false);

  useEffect(() => {
    // console.log(dayjs(value));
    const today = currentTime.startOf("day"); // 오늘
    const selectedDay = dayjs(value); // 캘린더 선택일

    const diffVal = today.diff(selectedDay, "day"); // 차이값
    const invertDiffVal = Number(diffVal) * -1;

    setDiffValue(diffVal);
    setInvertDiffValue(invertDiffVal);

    if (diffVal >= Number(inputDay1)) {
      setDay1Result(true);
    } else {
      setDay1Result(false);
    }

    if (diffVal >= Number(inputDay2)) {
      setDay2Result(true);
    } else {
      setDay2Result(false);
    }

    if (invertDiffVal <= Number(inputDay3) && invertDiffVal >= 0) {
      setDay3Result(true);
    } else {
      setDay3Result(false);
    }
  }, [value, inputDay1, inputDay2, inputDay3]);

  //==============================================================================

  return (
    <Box>
      {/* 카드1 */}
      <Card sx={{ m: "10px", p: "20px" }}>
        <Box display={"flex"}>
          <Typography variant="h4">띵동 데스크탑</Typography>
          <Box sx={{ mt: "auto", ml: "5px" }}>
            <a href="https://github.com/MAQUIA-1/dingdong">
              <Typography variant="caption">GitHub</Typography>
            </a>
          </Box>
        </Box>

        <Box display={"flex"} mt={"10px"}>
          <Box>
            {/* 캘린더 */}
            <Cal
              onChange={onChange}
              value={value}
              locale="ko"
              formatDay={(locale, date) => date.toLocaleString("en", { day: "numeric" })}
            />

            {/* 현재시각 */}
            <Box mt={"25px"}>
              <Typography variant="h3">{currentTime.format("A h:mm")}</Typography>
              <Typography variant="h6" color={"gray"}>
                {currentTime.format("YYYY년 MM월 DD일, ddd요일")}
              </Typography>
            </Box>
          </Box>

          <Box m={"10px"}></Box>

          {/* 월표 */}
          <Box width={"130px"}>
            <Months />
          </Box>
        </Box>
      </Card>

      {/* ============================================================================= */}

      {/* 카드2 */}
      <Card sx={{ m: "10px", p: "20px" }}>
        {/* 70세 이상? */}
        <Box>
          <Box width={"120px"} display={"inline-block"}>
            <Input
              type="number"
              inputProps={{ min: 0 }}
              size="small"
              sx={{ width: "35px" }}
              onChange={(e) => {
                const value = Number(e.target.value);
                setInputAge(value);
              }}
              defaultValue={inputAge}
            />
            <Typography sx={{ display: "inline" }}>세 이상?</Typography>
          </Box>

          <Chip label={ageResult}></Chip>
          <Typography sx={{ display: "inline" }}> 이전 출생</Typography>
        </Box>

        <Box m={"20px"}></Box>

        {/* 15일 지남? */}
        <Box>
          <Box width={"120px"} display={"inline-block"}>
            <Input
              type="number"
              inputProps={{ min: 0 }}
              size="small"
              sx={{ width: "35px" }}
              defaultValue={inputDay1}
              onChange={(e) => {
                const value = Number(e.target.value);
                setInputDay1(value);
              }}
            />
            <Typography sx={{ display: "inline" }}> 일 초과?</Typography>
          </Box>

          {day1Result ? (
            <Box display={"inline"}>
              <Chip label={`${diffValue}일 지남`} color="success" sx={{ mr: "5px" }}></Chip>
              <Typography variant="caption" sx={{ display: "inline" }}>
                (체류지변경)
              </Typography>
            </Box>
          ) : (
            <Box display={"inline"}>
              <Chip label={`${diffValue}일 지남`} color="error" sx={{ mr: "5px" }}></Chip>
              <Typography variant="caption" sx={{ display: "inline" }}>
                (체류지변경)
              </Typography>
            </Box>
          )}
        </Box>

        <Box m={"20px"}></Box>

        {/* 45일 지남? */}
        <Box>
          <Box width={"120px"} display={"inline-block"}>
            <Input
              type="number"
              inputProps={{ min: 0 }}
              size="small"
              sx={{ width: "35px" }}
              defaultValue={inputDay2}
              onChange={(e) => {
                const value = Number(e.target.value);
                setInputDay2(value);
              }}
            />
            <Typography sx={{ display: "inline" }}> 일 초과?</Typography>
          </Box>

          {day2Result ? (
            <Box display={"inline"}>
              <Chip label={`${diffValue}일 지남`} color="success" sx={{ mr: "5px" }}></Chip>
              <Typography variant="caption" sx={{ display: "inline" }}>
                (여권변경)
              </Typography>
            </Box>
          ) : (
            <Box display={"inline"}>
              <Chip label={`${diffValue}일 지남`} color="error" sx={{ mr: "5px" }}></Chip>
              <Typography variant="caption" sx={{ display: "inline" }}>
                (여권변경)
              </Typography>
            </Box>
          )}
        </Box>

        <Box m={"20px"}></Box>

        <Box>
          <Box width={"120px"} display={"inline-block"}>
            <Input
              type="number"
              inputProps={{ min: 0 }}
              size="small"
              sx={{ width: "35px" }}
              defaultValue={inputDay3}
              onChange={(e) => {
                const value = Number(e.target.value);
                setInputDay3(value);
              }}
            />
            <Typography sx={{ display: "inline" }}> 일 이내?</Typography>
          </Box>

          {day3Result ? (
            <Box display={"inline"}>
              <Chip label={`${invertDiffValue}일 후`} color="success" sx={{ mr: "5px" }}></Chip>
              <Typography variant="caption" sx={{ display: "inline" }}>
                (비행기, 근로계약서)
              </Typography>
            </Box>
          ) : (
            <Box display={"inline"}>
              <Chip label={`${invertDiffValue}일 후`} color="error" sx={{ mr: "5px" }}></Chip>
              <Typography variant="caption" sx={{ display: "inline" }}>
                (비행기, 근로계약서)
              </Typography>
            </Box>
          )}
        </Box>
      </Card>

      {/* 메모장 */}
      <Card sx={{ m: "10px", p: "20px" }}>
        <Memopad />
      </Card>
    </Box>
  );
}

export default Calendar;
