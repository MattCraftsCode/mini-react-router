import React from "react";
import { UserAPI } from "../utils";

function UserDetail(props) {
  // 获取 state 数据
  // console.log(props.location.state);
  // console.log(props.match.params);
  // const user = props.location?.state || {};

  const id = props.match?.params?.id ? parseInt(props.match?.params?.id) : 0;

  const user = UserAPI.find(id);

  return <div>用户详情: {user.name}</div>;
}

export default UserDetail;
