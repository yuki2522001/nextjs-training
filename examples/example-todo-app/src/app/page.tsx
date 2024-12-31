'use client';

import { Button, Input } from "@/components";

const Home = () => {
  // TODO: Just show UI to review
  return (
    <div className="p-10 h-80 flex flex-col justify-between">
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
    </div>
  )
}

export default Home;
