import { CircularProgress } from "@material-ui/core";
import { LoaderContainer } from "./Loader.sty";
import { Space } from "../General/Space";

const Loader = ({ placeholder }: { placeholder: string }) => {
  return (
    <LoaderContainer>
      <CircularProgress />
      <Space />
      {placeholder}
    </LoaderContainer>
  );
};

export default Loader;
