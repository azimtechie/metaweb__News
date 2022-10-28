import { FullscreenOutlined, CopyOutlined, ShareAltOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { RWebShare } from "react-web-share";
import "./NewsCard.css"

const { Meta } = Card;
const NewsCard = (props) => {
  const { item } = props;
  return (
    <>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src={item.urlToImage === null ? "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/2/7/5/5/9/shutterstock_791755993-9bd0420257868e3c.jpg" : item.urlToImage}
          />
        }
        actions={[
          <a target={'_blank'} href={item.url}><FullscreenOutlined key="setting" /></a>,
          <CopyOutlined key="edit" />,
          <RWebShare
            key="share"
            data={{
              text: item.description,
              url: item.url,
              title: item.title,
            }}
          >
            <button className="card__share"><ShareAltOutlined /></button>
          </RWebShare>
        ]}

      >
        <Meta
          title={item.title}
          description={item.description}
        />
      </Card>
    </>
  );
};

export default NewsCard;