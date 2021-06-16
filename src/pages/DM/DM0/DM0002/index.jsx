import React from 'react';
import { popWindow } from "@/utils/bridge";
import './index.less';
import logo from '@/assets/logo.png';


const DM0002 = ({ history, location }) => {
  console.warn("params===========", location.state);

  function back() {
    popWindow(history);
  }

  return (
    <div className="DM0002">
      <img alt="Vue logo" src={logo} onClick={back} />
    </div>
  );
};

export default DM0002;