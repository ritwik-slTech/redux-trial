import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const Table_template = () => {
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Heading</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>data</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Table_template;
