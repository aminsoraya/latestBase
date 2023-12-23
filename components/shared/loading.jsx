import styles from "@/styles/loading.module.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const Loading = () => {
  return <div className={styles.loading}>Loading Data ...</div>;
};

export const SkeletonLoading = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Skeleton />
    </SkeletonTheme>
  );
};

export default Loading;
