import Skeleton from "antd/es/skeleton";
import styles from './style.module.css'


type TableSkeletonProps = {
  length?: number;
};

const TableSkeleton = ({length = 6}:TableSkeletonProps) => {
  return (
    <div>
        {Array.from({ length: length }).map((_, index) => (
          <div key={index} className={styles.skeletonRow}>
            <Skeleton.Input block={true}  active />
          </div>
        ))}
      </div>
    // </div>
  );
};

export default TableSkeleton;
