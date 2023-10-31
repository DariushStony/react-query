import ResponseHandler from "@/components/ResponseHandler";
import usePDPViewController from "./hooks/useViewController";

const PDPPageComponent = () => {
  const { data, isLoading } = usePDPViewController();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>PDP Page</h1>
      <ResponseHandler isLoading={isLoading}>
        {data?.map((todo: any) => (
          <ul key={todo.id}>
            <li>{todo.id}</li>
            <li>{todo.title}</li>
          </ul>
        ))}
      </ResponseHandler>
    </>
  );
};

export default PDPPageComponent;
