import Skeleton from "antd/es/skeleton";

type CardSkeletonProps = {
  count?: number;
  height?: number;
  display?: string;
  gap?: string | number;
  marginBottom?: string | number;
};

const CardSkeleton = ({
  count = 1,
  height = 100,
  display,
  gap,
  marginBottom = "4px",
}: CardSkeletonProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>
          <Skeleton.Input
            style={{
              height,
              display,
              gap,
              marginBottom,
            }}
            active
            block
          />
        </div>
      ))}
    </>
  );
};

export default CardSkeleton;