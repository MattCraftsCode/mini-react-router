import React, { createRef } from "react";
import { Prompt } from "../react-router";
import { UserAPI } from "../utils";

class UserCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isBocking: false,
    };

    this.myRef = createRef();
  }

  submit = (e) => {
    e.preventDefault();
    this.setState({ isBocking: false }, () => {
      console.log("first");
      UserAPI.add({
        id: Date.now(),
        name: `创建: ${this.myRef.current.value}`,
      });

      this.props.history.push({ pathname: "/user/list" });
    });
  };

  render() {
    return (
      <div>
        <Prompt
          when={this.state.isBocking}
          message={({ pathname }) => `您是否确定退出 ${pathname}？`}
        />
        <form action="#" onSubmit={this.submit}>
          <input
            type="text"
            ref={this.myRef}
            onChange={(e) => {
              this.setState(
                { isBocking: this.myRef.current.value.length > 0 },
                () => {
                  console.log(this.state);
                }
              );
            }}
          />
          <input type="submit" value="创建" />
        </form>
      </div>
    );
  }
}

export default UserCreate;
