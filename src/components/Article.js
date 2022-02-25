import styled from "styled-components";
import ArticleForm from "./ArticleForm";
import Homenews from "./Homenews";

const Article = () => {
  return (
    <>
      <ArticleConainter>
        <ArticleForm></ArticleForm>
        <Homenews></Homenews>
      </ArticleConainter>
    </>
  );
};

export default Article;

const ArticleConainter = styled.article`
  position: relative;
  z-index: 90;
  width: 1140px;
  margin: 20px auto 0;
`;
