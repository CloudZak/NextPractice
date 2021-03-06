import { GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import { Button, Htag, P, Rating, Tag } from "../components";
import { withLayout } from "../layout/Layout";
import axios from 'axios';
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">Заголовок</Htag>
      <Button appearance="primary" arrow='right'>Primary</Button>
      <Button appearance="ghost" arrow='right'>Ghost</Button>
      <P size="m">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quis odio consequatur facere ea asperiores illum a laudantium nemo ducimus molestiae, perspiciatis inventore amet modi! Praesentium, qui rem? Optio, suscipit.</P>

      <Tag size='m' color="red">Medium</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  }
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}