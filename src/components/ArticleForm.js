import styled from "styled-components";
import {
  BsFillBellFill,
  BsFillLightbulbFill,
  BsFillPinFill,
  BsBrightnessHighFill,
  BsFillCameraReelsFill,
  BsCalendarCheckFill,
  BsClock,
} from "react-icons/bs";

import { GoLocation } from "react-icons/go";

import { Form, Button } from "react-bootstrap";

const ArticleForm = () => {
  return (
    <>
      <Section>
        <UlList>
          <li>
            <BsFillBellFill />
            <a
              href="https://www.vscinemas.com.tw/vsTicketing/ticketing/ticket.aspx"
              target="_blank"
            >
              線上訂票
            </a>
          </li>
          <li>
            <BsFillLightbulbFill />
            <a href="#popup1">售票公告</a>
          </li>
          <li>
            <BsFillPinFill />
            <a href="#popup2">入場須知</a>
          </li>
          <li>
            <BsBrightnessHighFill />
            <a href="https://www.vscinemas.com.tw/ShowTimes/" target="_blank">
              場次查詢
            </a>
          </li>
        </UlList>
        <SearchArea>
          <SearchAreaTable>
            <li id="tab1" class="select">
              快速訂票
            </li>
            <li id="tab2" class="">
              快搜空位
            </li>
          </SearchAreaTable>
          <SearchForm className="bookGroup">
            <GoLocation className="span" />
            <FormSelect
              aria-label="Default select example"
              style={{ width: 300 }}
            >
              <option>請選擇影城</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </FormSelect>
          </SearchForm>
          <SearchForm className="bookGroup">
            <BsFillCameraReelsFill className="span" />
            <FormSelect
              aria-label="Default select example"
              style={{ width: 300 }}
            >
              <option>請選擇影片</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </FormSelect>
          </SearchForm>
          <SearchForm className="bookGroup">
            <BsCalendarCheckFill className="span" />
            <FormSelect
              aria-label="Default select example"
              style={{ width: 300 }}
            >
              <option>請選擇日期</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </FormSelect>
          </SearchForm>
          <SearchForm className="bookGroup">
            <BsClock className="span" />
            <FormSelect
              aria-label="Default select example"
              style={{ width: 300 }}
            >
              <option>請選擇場次</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </FormSelect>
          </SearchForm>
          <section className="btnArea">
            <Button className="Button">前往訂票</Button>{" "}
            <Button className="Button">查看座位</Button>{" "}
          </section>
        </SearchArea>
      </Section>
    </>
  );
};

export default ArticleForm;

const Section = styled.section`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  list-style: none;
    position: relative;
    display: inline-block;
    width: 59%;
`;

const UlList = styled.ul`
  position: absolute;
  z-index: 5;
  top: 50px;
  left: 1%;
  li {
    background-color: #999;
    border-bottom: 1px solid #bbb;
    color: #fff;
    padding: 0 20px;
    line-height: 2.4em;

    :before {
      position: absolute;
      width: 3px;
      left: -3px;
      color: #999;
      display: block;
    }
  }

  a {
    color: white;
    list-style: none;
    text-decoration: none;

    :hover {
      color: yellow;
    }
  }
`;

const SearchArea = styled.div`
  position: relative;
  z-index: 10;
  display: inline-block;
  background-color: #2660a9;
  color: #fff;
  margin: 30px 0 50px 22%;
  -webkit-border-radius: 15px;
  border-radius: 15px;
  width: 500px;
  height: 335px;

  
  .btnArea{
    padding-top: 5px 20px;
    text-align: center;
    min-height: 50px;
  }

  .Button {
    display: inline;
    width: 200px;
    height: 50px;
    background-color: #3096ee;
    border: #3096ee;

    margin: 0px auto;
    text-align: center;
    justify-content: center;
  }
  
`;

const SearchAreaTable = styled.ul`
  width: 100%;
  text-align: center;
  list-style: none;

  li {
    line-height: 55px;
    font-size: 21.01px;
    color: #fff;
    display: inline-block;
    width: 49%;
    line-height: 55px;
    height: 55px;
    font-size: 18.91px;
    cursor: pointer;
    overflow: hidden;

    :hover {
      color: #bfd1e8;
      text-decoration: underline;
    }
  }
`;

const FormSelect = styled(Form.Select)`
  display: inline;
  margin-right: 60px;
`;

const SearchForm = styled.li`
  padding: 5px 10%;

  .span {
    margin-right: 20px;
  }
`;
