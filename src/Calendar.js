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
  const [now, setNow] = useState(dayjs()); // dayjs 현재시각

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(dayjs());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  //-----------------------------------------------------------------------------
  const [age, setAge] = useState(70);
  const [ageResult, setAgeResult] = useState(0);

  useEffect(() => {
    const seventyYearsAgo = now.subtract(age, "year").format("YYYY-MM-DD");
    setAgeResult(seventyYearsAgo);
  }, [age]);

  //-----------------------------------------------------------------------------
  const [diff1, setDiff1] = useState(15);
  const [diff1Result, setDiff1Result] = useState(false);
  const [diff1Day, setDiff1Day] = useState(0);

  useEffect(() => {
    console.log(dayjs(value));
    const today = now.startOf("day");
    const selectDay = dayjs(value);
    const userdiff = Number(diff1);

    const 차이 = today.diff(selectDay, "day");
    setDiff1Day(차이);

    if (차이 >= userdiff) {
      setDiff1Result(true);
    } else {
      setDiff1Result(false);
    }
  }, [diff1, value]);
  //-----------------------------------------------------------------------------

  const [diff2, setDiff2] = useState(45);
  const [diff2Result, setDiff2Result] = useState(false);
  const [diff2Day, setDiff2Day] = useState(0);

  useEffect(() => {
    const today = now.startOf("day");
    const selectDay = dayjs(value);
    const userdiff = Number(diff2);

    const 차이 = today.diff(selectDay, "day");
    setDiff2Day(차이);

    if (차이 >= userdiff) {
      setDiff2Result(true);
    } else {
      setDiff2Result(false);
    }
  }, [diff2, value]);
  //-----------------------------------------------------------------------------
  const [diff3, setDiff3] = useState(7);
  const [diff3Result, setDiff3Result] = useState(false);
  const [diff3Day, setDiff3Day] = useState(0);

  useEffect(() => {
    const today = now.startOf("day");
    const selectDay = dayjs(value);
    const userdiff = Number(diff3);

    const 차이 = selectDay.diff(today, "day");
    setDiff3Day(차이);

    if (차이 <= userdiff && 차이 >= 0) {
      setDiff3Result(true);
    } else {
      setDiff3Result(false);
    }
  }, [diff3, value]);
  //-----------------------------------------------------------------------------
  return (
    <Box>
      {/* 카드1 */}
      <Card sx={{ m: "10px", p: "20px" }}>
        <Typography variant="h4">🔔 띵동 데스크탑</Typography>

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
              <Typography variant="h3">{now.format("A h:mm")}</Typography>
              <Typography variant="h6" color={"gray"}>
                {now.format("YYYY년 MM월 DD일, ddd요일")}
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
          <Input
            type="number"
            inputProps={{ min: 0 }}
            size="small"
            sx={{ width: "35px" }}
            onChange={(e) => {
              const value = Number(e.target.value);
              setAge(value);
            }}
            defaultValue={age}
          />
          <Typography sx={{ display: "inline" }}>세 이상 ⮕ </Typography>

          <Chip label={ageResult}></Chip>
          <Typography sx={{ display: "inline" }}> 이전 출생</Typography>
        </Box>

        <Box m={"20px"}></Box>

        {/* 15일 지남? */}
        <Box>
          <Input
            type="number"
            inputProps={{ min: 0 }}
            size="small"
            sx={{ width: "35px" }}
            defaultValue={diff1}
            onChange={(e) => {
              const value = Number(e.target.value);
              setDiff1(value);
            }}
          />
          <Typography sx={{ display: "inline" }}> 일 초과? ⮕ </Typography>

          {diff1Result ? (
            <Box display={"inline"}>
              <Chip label={`${diff1Day}일 지남`} color="success" sx={{ mr: "5px" }}></Chip>
              <Typography variant="caption" sx={{ display: "inline" }}>
                (체류지 변경)
              </Typography>
            </Box>
          ) : (
            <Box display={"inline"}>
              <Chip label={`${diff1Day}일 지남`} color="error" sx={{ mr: "5px" }}></Chip>
              <Typography variant="caption" sx={{ display: "inline" }}>
                (체류지 변경)
              </Typography>
            </Box>
          )}
        </Box>

        <Box m={"20px"}></Box>

        {/* 45일 지남? */}
        <Box>
          <Input
            type="number"
            inputProps={{ min: 0 }}
            size="small"
            sx={{ width: "35px" }}
            defaultValue={diff2}
            onChange={(e) => {
              const value = Number(e.target.value);
              setDiff2(value);
            }}
          />
          <Typography sx={{ display: "inline" }}> 일 초과? ⮕ </Typography>

          {diff2Result ? (
            <Box display={"inline"}>
              <Chip label={`${diff2Day}일 지남`} color="success" sx={{ mr: "5px" }}></Chip>
              <Typography variant="caption" sx={{ display: "inline" }}>
                (여권변경)
              </Typography>
            </Box>
          ) : (
            <Box display={"inline"}>
              <Chip label={`${diff2Day}일 지남`} color="error" sx={{ mr: "5px" }}></Chip>
              <Typography variant="caption" sx={{ display: "inline" }}>
                (여권변경)
              </Typography>
            </Box>
          )}
        </Box>

        <Box m={"20px"}></Box>

        <Box>
          {/* <Typography>선택일기준 오늘이 7일 안임?</Typography> */}
          <Input
            type="number"
            inputProps={{ min: 0 }}
            size="small"
            sx={{ width: "35px" }}
            defaultValue={diff3}
            onChange={(e) => {
              const value = Number(e.target.value);
              setDiff3(value);
            }}
          />
          <Typography sx={{ display: "inline" }}> 일 이내? ⮕ </Typography>

          {diff3Result ? (
            <Box display={"inline"}>
              <Chip label={`${diff3Day}일 후`} color="success" sx={{ mr: "5px" }}></Chip>
              <Typography variant="caption" sx={{ display: "inline" }}>
                (비행기, 근로계약서)
              </Typography>
            </Box>
          ) : (
            <Box display={"inline"}>
              <Chip label={`${diff3Day}일 후`} color="error" sx={{ mr: "5px" }}></Chip>
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
