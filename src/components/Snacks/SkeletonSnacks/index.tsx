import React from "react";
import { Container } from "./styles";
import Skeleton from "../../Skeleton";

function SkeletonSnack() {
  return (
    <div className='skeleton-wrapper'>
      <Container>
        <Skeleton type='title' />
        <Skeleton type='thumbnail' />
        <Skeleton type='title' />
        <Skeleton type='title' />

        <div>
          <Skeleton type='title' />
          <Skeleton type='image' />
        </div>
      </Container>
    </div>
  );
}

export default SkeletonSnack;
