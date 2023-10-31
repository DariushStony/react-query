import PDPPage from "@/pages-container/pdp";
import getServerSidePropsWrapper from "@/utils/get-server-side-props-wrapper";

export default PDPPage;

export const __getServerSideProps = getServerSidePropsWrapper({
  ssrMethos: PDPPage.apiMethods,
});
