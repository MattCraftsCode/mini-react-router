import React from "react";
import { useHistory, useLocation, useParams } from "../react-router/hooks";
import { UserAPI } from "../utils";

function UserDetail(props) {
  // 获取 state 数据
  // console.log(props.location.state);
  console.log(props.match.params);
  // const user = props.location?.state || {};

  console.log("useHistory", useHistory());
  console.log("useLocation", useLocation());
  console.log("useParams", useParams());

  const id = props.match?.params?.id ? parseInt(props.match?.params?.id) : 0;

  const user = UserAPI.find(id);

  return <div>用户详情: {user.name}</div>;
}

export default UserDetail;
