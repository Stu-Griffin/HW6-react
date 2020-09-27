import React, { Component } from "react";
import Modal from "react-modal";
import Post from "./posts/post.jsx";
import { rootReducer } from "./rootReducer/rootReducer.js";
import {createStore } from 'redux';

import messageIcon from "../assets/img/comment.svg";
import repostIcon from "../assets/img/repost.svg";
import likesIcon from "../assets/img/likes.svg";
import shareIcon from "../assets/img/share.svg";
Modal.setAppElement("#root");
const Anakin = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const Ray = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const postMainInf = [
  {
    authorName: createStore(rootReducer, "Anakin Skywalker"),
    authorAvatar: createStore(rootReducer, Anakin),
    authorNickName: createStore(rootReducer, "@dart_vader"),
    postDate: createStore(rootReducer, "23/09/2020"),
    textPublication: createStore(rootReducer,"WTF? Who is Ray? Why she is Skywalker? Luke...?"),
    imgPublication: createStore(rootReducer, Ray)
  },
]
const actions = [
  {
    type: "messages",
    img: messageIcon,
  },
  {
    type: "reposts",
    img: repostIcon,
  },
  {
    type: "likes",
    img: likesIcon,
  },
  {
    type: "share",
    img: shareIcon,
  },
];
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
class Posts extends Component {
  state = {
    action: [...actions],
    data: [...postMainInf], 
    modalIsOpen: false,

    nameValue: "",
    authorName: createStore(rootReducer, ""),

    imgValue: "",
    imgPublication: createStore(rootReducer, ""),

    textValue: "",
    textPublication: createStore(rootReducer, ""),

    avatarValue: "",
    authorAvatar: createStore(rootReducer, ""),
  };
  openModal = () =>  {
    this.setState({
        modalIsOpen: true
    })
  }
  closeModal = () => {
    postMainInf.push({
      authorName: this.state.authorName,
      authorAvatar: this.state.authorAvatar,
      authorNickName: createStore(rootReducer, "@dart_vader"),
      postDate: createStore(rootReducer, "23/09/2020"),
      textPublication: this.state.textPublication,
      imgPublication: this.state.imgPublication
    })
    this.setState({
      modalIsOpen: false,
      data: [...postMainInf]
    })
  }
  ChangeNameValue = (event) => {
      this.setState({
        nameValue: event.target.value,
        authorName: createStore(rootReducer, event.target.value),
      })
  }
  ChangeImgValue = (event) => {
    this.setState({
      imgValue: event.target.value,
      imgPublication: createStore(rootReducer, event.target.value),
    })
  }
  ChangeTextValue = (event) => {
    this.setState({
      textValue: event.target.value,
      textPublication: createStore(rootReducer, event.target.value),
    })
  }
  ChangeAvatarValue = (event) => {
    this.setState({
      avatarValue: event.target.value,
      authorAvatar: createStore(rootReducer, event.target.value),
    })
  }
  render() {
    return (
      <div>
        <header>
            <button onClick={this.openModal}>Open Modal</button>
            <Modal isOpen={this.state.modalIsOpen}onAfterOpen={this.afterOpenModal}onRequestClose={this.closeModal}style={customStyles}contentLabel="Example Modal">
                <button onClick={this.closeModal}>close</button>
                <div>
                    <input placeholder="avatar" value={this.state.avatarValue} onChange={this.ChangeAvatarValue}/>
                    <input placeholder="name" value={this.state.nameValue} onChange={this.ChangeNameValue}/>
                    <input placeholder="text" value={this.state.textValue} onChange={this.ChangeTextValue}/>
                    <input placeholder="img" value={this.state.imgValue} onChange={this.ChangeImgValue}/>
                </div>
            </Modal>
        </header>
        <Post 
          data={this.state.data}
          action={this.state.action}
        />
      </div>
    );
  }
}
export default Posts;