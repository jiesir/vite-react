import React from 'react';
import { rpc, pushWindow } from "@/utils/bridge";
import { useSelector } from 'react-redux';
import './index.less';


const DM0001 = ({ history, location }) => {
  console.warn("params===========", location.state);
  const userInfo = useSelector(state => state.userInfo);

  const add = () => {
    rpc("SQ1004").then((res) => {
      console.warn("res:", res);
    });
  };

  const jump = () => {
    pushWindow(history, "/DM/DM0/DM0002", { a: 1, b: 2 });
  };

  return (
    <div className="DM0001">
      <div className="DM0001-title" onClick={add}>点我请求接口</div>
      <div className="DM0001-body" onClick={jump}> 点我跳转页面</div>
      <div className="DM0001-bottom">我只是显示数据 {'=>'} { userInfo.name } </div>
    </div >
  );
};

export default DM0001;