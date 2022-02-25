import styled from "styled-components";

const Homenews = () => {

  const newsName = [
    "台北京站威秀影城營運公告",
    "花蓮新天堂樂園威秀影城營業公告",
    "花旗銀行優惠說明",
    "會員系統例行維護公告",
    "逾期團券使用免收手續費（09/24更新）",
    "iShow會員餐飲效期展延公告",
    "團體優待票履約展延公告",
  ];

  const time = [
    "2022/02/17"
  ];

  const lists = newsName.map((list) => <li key={list}><time>{time}</time>{list}</li>)

  return (
    <Section>
      <h2>
        最新公告
        <span>
          <a href="event/news.aspx">MORE</a>
        </span>
      </h2>{" "}
      <ul>{lists}</ul>
    </Section>
  );
};

export default Homenews;

const Section = styled.section`
  display: inline-block;
  width: 40%;
  vertical-align: top;

  h2 {
    font-size: 26px;
    line-height: 41.6px;
    font-weight: 400;
    color: #2f96ee;
    margin: 20px 0;
    padding-left: 30px;
  }

  span {
    color: #999;
    font-size: 16px;
    margin-left: 5px;

    :before {
      content: " / ";
    }
  }

  li{
    position: relative;
    margin: 0 0 20px;
    padding-left: 120px;
    
  }
  
  time{
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    font-size: 14px;
    color: #FFF;
    background-color: #2f96ee;
    padding: 2px 10px;
    margin-right: 10px;
  }
`;
