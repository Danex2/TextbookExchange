import React from "react";
import DashboardItem from "./DashboardItem";

function DashboardComponent(props) {
  return (
    <div className="card-grid">
      {props.posts.map(post => {
        return <DashboardItem key={post._id} {...props} post={post} />;
      })}
    </div>
  );
}

export default DashboardComponent;
