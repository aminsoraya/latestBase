import styles from "@/styles/loading.module.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return <div className={styles.loading}>Loading Data ...</div>;
};
export default Loading;

export const SkeletonLoading = ({height=40}) => {
  return (
    <SkeletonTheme baseColor="#807e7e" highlightColor="#444">
      <Skeleton count={1} height={height} />
    </SkeletonTheme>
  );
};
