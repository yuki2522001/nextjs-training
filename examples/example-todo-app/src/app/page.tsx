'use client';

// Libs
import { TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";

// Components
import { Button, Input, Table } from "@/components";

// Constants
import { columns, rows } from "@/constants/table";

const Home = () => {
  // TODO: Just show UI to review
  return (
    <div className="p-10 flex flex-col justify-between">
      <div className="flex justify-between w-96">
        <Button color="info">SAVE</Button>
        <Button color="success">FINISHED</Button>
        <Button color="warning">GET TASKS</Button>
        <Button color="danger">DELETE</Button>
      </div>

      <Input placeholder="Enter a task here" />
      <Input
        color="danger"
        placeholder="Enter a task here"
        errorMessage="Please enter a task"
        isInvalid={true}
        className="text-small"
      />

      <Table aria-label="Information Task Table" >
        <TableHeader columns={columns} className="pl-0">
          {(column) => (
            <TableColumn key={column.uid}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody>
          {rows.map((item) => {
            const { id, no, task, status } = item
            return (
              <TableRow key={id}>
                <TableCell>
                  {no}
                </TableCell>
                <TableCell>{task}</TableCell>
                <TableCell>
                  {status}
                </TableCell>
                <TableCell>
                  <Button color="success" className="mr-4">FINISHED</Button>
                  <Button color="danger">DELETE</Button>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}

export default Home;
