import { useTodos } from "../api/get-api-product-details";

const usePDPViewController = () => {
  // states
  // context
  // query (api call)
  // using services

  // example
  // _doSomethingPrivate() {}

  const {data, isLoading } = useTodos();

  return {data, isLoading};
};

export default usePDPViewController;
