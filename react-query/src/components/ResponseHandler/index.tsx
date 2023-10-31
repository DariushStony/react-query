import { FC, ReactNode } from "react";

interface IResponseHandlerProps {
  isLoading?: boolean;
  isEmpty?: boolean;
  emptyMessage?: string;
  isError?: boolean;
  errorMessage?: string;
  children: ReactNode;
}

const ResponseHandler: FC<IResponseHandlerProps> = ({
  isLoading,
  isEmpty,
  emptyMessage,
  isError,
  errorMessage,
  children,
}) => {
  if (isLoading)
    return (
      <div>Loading....</div>
    );

  if (isError)
    return (
      <div>FUCKED UP</div>
    );

  if (isEmpty)
    return (
      <div>There is NO Content</div>
    );

  return children;
};

export default ResponseHandler;
