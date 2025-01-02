'use client'

// Libs
import { TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";

// Components
import { Button, Input, Table } from "@/components";

// Constants
import { columns, rows } from "@/constants/table";

const HomePage = () => {
  return (
    <section className="vh-100 bg-primary">
      <div className="container py-5 h-100">
        <div className="flex justify-center items-center h-100">
          <div className="col col-lg-9 col-xl-7">
            <div className="rounded-default">
              <div className="p-4 bg-white">
                <h4 className="text-center my-3 pb-3 text-sm text-accent-primary">To Do App</h4>
                <form className="flex justify-around items-center mx-auto mb-4 pb-2 w-80">
                  <Input placeholder="Enter a task here" className="w-44"/>
                  <Button color="info">SAVE</Button>
                  <Button color="warning">GET TASK</Button>
                </form>
                <Table aria-label="Information Task Table">
                  <TableHeader columns={columns} className="pl-0 table mb-4">
                    {(column) => (
                      <TableColumn key={column.uid}>
                        {column.name}
                      </TableColumn>
                    )}
                  </TableHeader>
                  <TableBody>
                    {rows.map((item) => {
                      const { id, task, status } = item
                      return (
                        <TableRow key={id}>
                          <TableCell className="w-12">
                            {id}
                          </TableCell>
                          <TableCell className="w-72">{task}</TableCell>
                          <TableCell className="w-24">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage;
