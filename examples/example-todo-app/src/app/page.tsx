import { Button } from "@/components";

const Home = () => {
  //TODO: Just show UI to reivew
  return (
    <div className="p-10 w-96 flex justify-between">
      <Button
        variant="info"
        children='SAVE' loading={false} />
      <Button
        variant="success"
        children='FINISHED' loading={false} />
      <Button
        variant="warning"
        children='GET TASKS' loading={false} />
      <Button
        variant="danger"
        children='DELETE' loading={false} />
    </div>
  );
}

export default Home;
