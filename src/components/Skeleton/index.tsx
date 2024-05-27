import React from "react";
import { SkeletonElement } from "./styles";

export interface SkeletonProps {
  type: "title" | "text" | "image" | "thumbnail";
}

function Skeleton({ type }: SkeletonProps) {
  return <SkeletonElement type={type} />;
}

export default Skeleton;
