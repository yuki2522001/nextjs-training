'use client';

import { Button } from "@/components";

const Home = () => (
  // TODO: Just show UI to review
  <div className="flex justify-between w-96 p-10">
    <Button color="info">Info</Button>
    <Button color="success">Success</Button>
    <Button color="warning">Warning</Button>
    <Button color="danger">Danger</Button>
  </div>
);

export default Home;
