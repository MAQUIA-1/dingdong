import { Box, Table, TableBody, TableRow, TableCell } from "@mui/material";

const Months = () => {
  return (
    <Box border={"solid #9c9c9c 1px"} borderRadius={"5px"}>
      <Table size="small">
        <TableBody>
          <TableRow>
            <TableCell align="left">JAN</TableCell>
            <TableCell align="right">1월</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">FEB</TableCell>
            <TableCell align="right">2월</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">MAR</TableCell>
            <TableCell align="right">3월</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">APR</TableCell>
            <TableCell align="right">4월</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">MAY</TableCell>
            <TableCell align="right">5월</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">JUN</TableCell>
            <TableCell align="right">6월</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">JUL</TableCell>
            <TableCell align="right">7월</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">AUG</TableCell>
            <TableCell align="right">8월</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">SEP</TableCell>
            <TableCell align="right">9월</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">OCT</TableCell>
            <TableCell align="right">10월</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">NOV</TableCell>
            <TableCell align="right">11월</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">DEC</TableCell>
            <TableCell align="right">12월</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default Months;
