import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <FooterCustom>
        <div className="footerArea">
          <ul className="footerLink">
            <a href="#" className="popupClose"></a>
            <li>
              <a href="theater/index.aspx">影城介紹</a>
            </li>
            <li>
              <a href="#" className="footerFirst">
                電影介紹
              </a>

              <ul>
                <li>
                  <a href="film/index.aspx">熱售中</a>
                </li>
                <li>
                  <a href="film/coming.aspx">即將上映</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="brand/index.aspx" className="footerFirst">
                映演品牌
              </a>
              <ul>
                <li>
                  <a href="brand/index.aspx?A=12">TITAN SCREEN</a>
                </li>

                <li>
                  <a href="brand/index.aspx?A=13">MUCROWN</a>
                </li>

                <li>
                  <a href="brand/index.aspx?A=2">IMAX</a>
                </li>

                <li>
                  <a href="brand/index.aspx?A=1">4DX</a>
                </li>

                <li>
                  <a href="brand/index.aspx?A=3">GOLD CLASS</a>
                </li>

                <li>
                  <a href="brand/index.aspx?A=6">Mappa</a>
                </li>

                <li>
                  <a href="concert/index.aspx">LIVE演唱會</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="food/index.aspx" className="footerFirst">
                餐飲與商品
              </a>
              <ul>
                <li>
                  <a href="food/index.aspx">影城餐飲</a>
                </li>
                <li>
                  <a href="https://www.unicornpopcorn.com.tw/" target="_blank">
                    UNICORN
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="event/index.aspx" className="footerFirst">
                活動公告
              </a>
              <ul>
                <li>
                  <a href="event/news.aspx">影城公告</a>
                </li>
                <li>
                  <a href="event/index.aspx">影城活動</a>
                </li>
                <li>
                  <a href="event/prize.aspx">中獎名單</a>
                </li>
                <li>
                  <a href="event/partner.aspx">合作夥伴</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="biz/index.aspx">業務專區</a>
            </li>
            <li>
              <a href="mall/index.aspx" className="footerFirst">
                威秀商場
              </a>
              <ul>
                <li>
                  <a href="mall/index.aspx">商家介紹</a>
                </li>
                <li>
                  <a href="mall/event_list.aspx">商場活動</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="ishow/index.aspx" className="footerFirst">
                iShow專區
              </a>
              <ul>
                <li>
                  <a href="https://www.vscinemas.com.tw/vsweb/ishow/card.aspx">
                    加入iShow
                  </a>
                </li>
                <li>
                  <a href="event/index.aspx?E=1">會員活動</a>
                </li>
                <li>
                  <a href="qa/qalist.aspx">會員Q&amp;A</a>
                </li>
              </ul>
            </li>
          </ul>
          <address className="copyright">
            <script type="text/javascript" charSet="utf-8"></script>
            <section className="twcaArea">
              <div className="small1 twcaseal">
                <a
                  href="https://ssl2.twca.com.tw/NCWebSSL/certinfo.htm?DNS=www.vscinemas.com.tw&amp;SerialNumber=95564223681339173939985681985773720830"
                  target="_blank"
                >
                  <img
                    src="https://www.vscinemas.com.tw/vsweb/images/twcaseal.jpg"
                    alt=""
                    border="0"
                    className="twcasealpic"
                  ></img>
                </a>
              </div>
              <script
                type="text/javascript"
                charSet="utf-8"
                src="//ssllogo.twca.com.tw/twcaseal_v3.js"
              ></script>
            </section>
            <p>
              Copyright © 2016 威秀影城 VIESHOW Cinemas. All Rights Reserved.
            </p>
            <ul className="addressLink">
              <li>
                <a href="about/index.aspx?A=1">關於威秀</a>
              </li>

              <li>
                <a href="about/recruit.aspx">人才招募</a>
              </li>
              <li>
                <a href="https://www.vscinemas.com.tw/vsweb/qa/InvoiceInfo.aspx">
                  電子發票
                </a>
              </li>
              <li>
                <a href="about/privacy.aspx">隱私權政策</a>
              </li>
              <li className="open">
                網站地圖<span className="footerOpen"></span>
              </li>
            </ul>
          </address>
        </div>
      </FooterCustom>
    </>
  );
};

export default Footer;

const FooterCustom = styled.footer`
  position: relative;
  margin: 0 auto;
  width: 100%;
  padding: 15px 0 25px;
  background-color: #2660a9;

  .footerArea {
    width: 1140px;
    margin: 0 auto;
    line-height: 1.2em;
  }

  .footerLink {
    text-align: center;
    margin: 0 auto 0 5%;
    padding: 20px 0;
    font-size: 14px;
    vertical-align: top;
    right: -5%;
    display: none;
    
    ul {
      list-style: none;
    }
    li {
        
      display: inline-block;
      width: 12%;
      vertical-align: top;
      text-align: left;
    }
  }

  .copyright {
    position: relative;
    color: #fff;
    font-size: 12px;
    font-style: normal;
    width: 100%;
    text-align: center;
    vertical-align: top;

    ul{
        display: flex;
    }
    li{
        margin: 0px auto;
    }

    a{
        color: white;
        text-decoration: none;
    }
  }
`;
