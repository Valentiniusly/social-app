import React from 'react';
import {
  Container,
  Picture,
  Content,
  Name,
  Date,
  Text,
  Likes,
  Delete,
  Expand,
} from './styles/post';

export default function Post({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Post.Picture = function PostPicture({ src, ...restProps }) {
  return (
    <Picture {...restProps}>
      <img src={src} alt="Post user pic" />
    </Picture>
  );
};

Post.Content = function PostContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

Post.Name = function PostName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

Post.Date = function PostDate({ children, ...restProps }) {
  return <Date {...restProps}>{children}</Date>;
};

Post.Text = function PostText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Post.Likes = function PostLikes({ like, liked, children, ...restProps }) {
  return (
    <Likes {...restProps} onClick={like}>
      <i className={liked ? 'fas fa-heart' : 'far fa-heart'} />
      &nbsp;{children}
    </Likes>
  );
};

Post.Delete = function PostDelete({ remove, ...restProps }) {
  return (
    <Delete {...restProps} onClick={remove}>
      <i className="far fa-trash-alt" />
    </Delete>
  );
};

Post.Expand = function PostExpand({ ...restProps }) {
  return (
    <Expand {...restProps}>
      <i className="fas fa-arrows-alt-v" />
    </Expand>
  );
};
