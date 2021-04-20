import React from 'react'
import { Quill } from 'react-quill';
import "react-quill/dist/quill.snow.css";
// import './styles.css'

// Add sizes to whitelist and register them
const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);

export const modules = {
  toolbar: {
    container: "#toolbar"
  }
};

export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "code-block"
];


export default function CustomQuillToolbar() {
  
  return (
    <div id="toolbar">
      <select className="ql-size" defaultValue="large">
        <option value="extra-small">extra-small</option>
        <option value="small" >small</option>
        <option value="medium">medium</option>
        <option value="large">large</option>
      </select>

      <select className="ql-header" defaultValue="1">
        <option value="1">Heading 1</option>
        <option value="2">Heading 2</option>
        <option value="3">Heading 3</option>
      </select>

      <select className="ql-color" />

      <button className="ql-bold"></button>

      <button className="ql-italic"></button>

      <button className="ql-underline"></button>
      
      <button className="ql-strike"></button>
    </div>
  )
}
