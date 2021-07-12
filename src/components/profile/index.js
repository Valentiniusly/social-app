import React from 'react';
import {
  Container,
  Picture,
  Name,
  Status,
  Location,
  Link,
  Date,
  Edit,
  AddPost,
} from './styles/profile';

export default function Profile({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Profile.Picture = function ProfilePicture({ children, src, ...restProps }) {
  return <Picture {...restProps} src={src} alt="Profile pic" />;
};

Profile.Name = function ProfileName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

Profile.Status = function ProfileStatus({ children, ...restProps }) {
  return <Status {...restProps}>{children}</Status>;
};

Profile.Location = function ProfileLocation({ children, ...restProps }) {
  return (
    <Location {...restProps}>
      <i className="fas fa-map-marker-alt" />
      &nbsp;
      {children}
    </Location>
  );
};

Profile.Link = function ProfileLink({ children, ...restProps }) {
  return (
    <Link {...restProps} rel="noreferrer">
      <i className="fas fa-link" />
      &nbsp;
      {children}
    </Link>
  );
};

Profile.Date = function ProfileDate({ children, ...restProps }) {
  return (
    <Date {...restProps}>
      <i className="far fa-calendar" />
      &nbsp;
      {children}
    </Date>
  );
};

Profile.Edit = function ProfileEdit({ ...restProps }) {
  return (
    <Edit {...restProps}>
      <i className="fas fa-user-edit" />
    </Edit>
  );
};

Profile.AddPost = function ProfileAddPost({ ...restProps }) {
  return (
    <AddPost {...restProps}>
      <i className="fas fa-plus" />
    </AddPost>
  );
};
