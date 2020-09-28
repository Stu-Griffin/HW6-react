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
const Luke = "data:image/jpeg;base64,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";
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

    authorName: createStore(rootReducer, ""),

    imgPublication: createStore(rootReducer, ""),

    textValue: "",
    textPublication: createStore(rootReducer, ""),

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
  changeTextValue = (event) => {
    this.setState({
      textValue: event.target.value,
      textPublication: createStore(rootReducer, event.target.value),
    })
  }
  selectAuthor = () => {
    var item1 = document.getElementById('selectAuthor').options[document.getElementById('selectAuthor').selectedIndex].value;
    (item1 === "anakin") ? this.setState({
      authorAvatar: createStore(rootReducer, Anakin),
      authorName: createStore(rootReducer, "Anakin"),
    }) : this.setState({
      authorAvatar: createStore(rootReducer, Luke),
      authorName: createStore(rootReducer, "Luke"),
    })
  }
  selectImg = () => {
    var item2 = document.getElementById('selectImg').options[document.getElementById('selectImg').selectedIndex].value;
    (item2 === "anakinImg") ? this.setState({
      imgPublication: createStore(rootReducer, Anakin)
    }) : this.setState({
      imgPublication: createStore(rootReducer, Ray)
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
                  <select id="selectAuthor" onChange={this.selectAuthor}>
                    <option>Select your avatar</option>
                    <option value="anakin">Anakin</option>
                    <option value="luke">Luke</option>
                  </select>
                  <input placeholder="text" value={this.state.textValue} onChange={this.changeTextValue}/>
                  <select id="selectImg" onChange={this.selectImg}>
                    <option>Select your img</option>
                    <option value="anakinImg">Anakin</option>
                    <option value="rayImg">Ray</option>
                  </select>
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