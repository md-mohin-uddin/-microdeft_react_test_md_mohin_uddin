/* eslint-disable max-lines */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./blog.css";

export default function SinglePost({ post, onEdit, onDelete }) {
  //   const { postId, title, author, imageUrl, content, timestamp } = post;
  //   const [isEditing, setIsEditing] = useState(false);
  //   const [editedTitle, setEditedTitle] = useState(title);
  //   const [editedContent, setEditedContent] = useState(content);

  //   const handleEdit = () => {
  //     setIsEditing(true);
  //   };

  //   const handleCancelEdit = () => {
  //     setIsEditing(false);
  //   };

  //   const handleSaveEdit = () => {
  //     // Perform save logic, update the post with the edited data
  //     onEdit(postId, editedTitle, editedContent);

  //     // Exit edit mode
  //     setIsEditing(false);
  //   };

  return (
    <div className="text-center">
      <h2 className="text-3xl">Blog</h2>
      <div className="singlePost text-center">
        <label className="input input-bordered flex items-center gap-2">
          Name
          <input type="text" className="grow" placeholder="name" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Email
          <input type="text" className="grow" placeholder="name@site.com" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
        </label>
        <textarea
          className="textarea textarea-bordered"
          placeholder="Bio"
        ></textarea>
      </div>
    </div>
  );
}
