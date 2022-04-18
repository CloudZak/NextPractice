import React, { useEffect, useState } from "react";
import { Button, Htag, P, Rating, Tag } from "../components";
import { withLayout } from "../layout/Layout";

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">Заголовок</Htag>
      <Button appearance="primary" arrow='right'>Primary</Button>
      <Button appearance="ghost" arrow='right'>Ghost</Button>
      <P size="m">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quis odio consequatur facere ea asperiores illum a laudantium nemo ducimus molestiae, perspiciatis inventore amet modi! Praesentium, qui rem? Optio, suscipit.</P>
      <Tag size='s'>Small</Tag>
      <Tag color='primary'>Primary</Tag>
      <Tag size='m' color="red">Medium</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);