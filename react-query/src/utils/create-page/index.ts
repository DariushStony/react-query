interface ICreatePageProps {
  component: () => JSX.Element;
  apiMethods: any;
}

const createPage = ({ component, apiMethods }: ICreatePageProps) => {
  // DOES Lots of stuff

  return Object.assign(component, { apiMethods });
};

export default createPage;
