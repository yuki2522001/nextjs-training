'use client';

import { Button } from "@/components";

const Home = () => (
  // TODO: Just show UI to review
  <div className="flex justify-between w-96 p-10">
    <Button color="info">SAVE</Button>
    <Button color="success">FINISHED</Button>
    <Button color="warning">GET TASKS</Button>
    <Button color="danger">DELETE</Button>
  </div>
);

export default Home;
