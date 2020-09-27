import React from "react";
import "./post.css";
import "../../reset.css";
import PostAnotherPosibilites from "./posibility/posibility";
import sendedIcon from "../../assets/img/tick.svg";
function Post(props) {
  return (
    <div>
      {(props.data).map((el, i) => {
        return(
          <div className="post" key={i}>
            <div className="author-inf">
              <img
                className="avatar"
                alt="avatar"
                src={el.authorAvatar.getState()}
              />
              <span className="inf">
                <p className="name">{el.authorName.getState()}</p>
                <img className="sended-icon" src={sendedIcon} alt="sended"/>
                <p>{el.authorNickName.getState()}</p>
                <p className="saparated">|</p>
                <p>{el.postDate.getState()}</p>
              </span>
            </div>
            <div className="between-line"></div>
            <div>
              <div className="main-content">
                <p>{el.textPublication.getState()}</p>
                <img
                  className="photo"
                  src={el.imgPublication.getState()}
                  alt="content"
                />
              </div>
            </div>
            <div className="posibility-box">
              {props.action.map((el, i) => {
                return(
                  <PostAnotherPosibilites
                    key={i}
                    type={el.type}
                    img={el.img}
                  />
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  );
}
export default Post;