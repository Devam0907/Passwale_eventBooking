// import React, { useState } from "react";
// import "./Speaker.css";

// const Speaker = () => {
//   const [title, setTitle] = useState("Speaker");
//   const [description, setDescription] = useState("");
//   const [speakers, setSpeakers] = useState([]);

//   const handleAddSpeaker = () => {
//     const newSpeaker = {
//       id: Date.now(),
//       name: `Speaker ${speakers.length + 1}`,
//     };
//     setSpeakers([...speakers, newSpeaker]);
//   };

//   const handleCancel = () => {
//     setTitle("Speaker");
//     setDescription("");
//     setSpeakers([]);
//   };

//   const handleSave = () => {
//     const data = {
//       sectionTitle: title,
//       sectionDescription: description,
//       speakerList: speakers,
//     };
//     console.log("Saved Data:", data);
//     alert("Speaker Section Saved!");
//   };

//   return (
//     <div className="speaker-wrapper">
//       <div className="form-group">
//         <label className="label">
//           Speaker Section Title <span className="required">*</span>
//         </label>
//         <div className="title-input-container">
//           <input
//             type="text"
//             className="input"
//             value={title}
//             maxLength={200}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//           <span className="max-label">Maximum Characters: 200</span>
//         </div>
//       </div>

//       <div className="form-group">
//         <label className="label">Speaker Section Description</label>
//         <div className="rich-text-box">
//           <div className="toolbar">
//             <button>B</button>
//             <button>I</button>
//             <button>U</button>
//             <button>S</button>
//             <button style={{ borderBottom: "3px solid #913d7d" }}>A</button>
//             <button>⋯</button>
//             <button>•</button>
//             <button>1.</button>
//             <button>🔗</button>
//             <button>❝❞</button>
//             <button>—</button>
//           </div>
//           <textarea
//             placeholder="Enter speaker section description here"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             maxLength={2000}
//           />
//           <div className="desc-info">
//             <span>{description.length} Characters</span>
//             <span>Maximum Characters: 2000</span>
//           </div>
//         </div>
//       </div>

//       <div className="form-group">
//         <h4 className="label">List of Speakers</h4>
//         <div className="speaker-list">
//           <div className="add-speaker" onClick={handleAddSpeaker}>
//             <div className="plus">+</div>
//             <div className="add-text">Add Speaker</div>
//           </div>
//           {speakers.map((speaker) => (
//             <div key={speaker.id} className="speaker-box">
//               {speaker.name}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="button-group">
//         <button className="cancel-btn" onClick={handleCancel}>
//           Cancel
//         </button>
//         <button className="save-btn" onClick={handleSave}>
//           Save
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Speaker;

import React, { useState, useRef } from "react";
import "./Speaker.css";

const Speaker = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [speakers, setSpeakers] = useState([]);
  const [newSpeaker, setNewSpeaker] = useState("");
  const editorRef = useRef(null);

  const handleAddSpeaker = () => {
    if (newSpeaker.trim()) {
      setSpeakers([...speakers, newSpeaker.trim()]);
      setNewSpeaker("");
    }
  };

  const handleRemoveSpeaker = (index) => {
    const updated = [...speakers];
    updated.splice(index, 1);
    setSpeakers(updated);
  };

  const formatText = (command, value = null) => {
    document.execCommand(command, false, value);
    editorRef.current.focus();
  };

  const handleLink = () => {
    const url = prompt("Enter a URL:");
    if (url) {
      formatText("createLink", url);
    }
  };

  return (
    <div className="speaker-container">
      <h2 className="section-title">Speaker</h2>

      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <div className="toolbar">
          <button onClick={() => formatText("bold")}>B</button>
          <button onClick={() => formatText("italic")}>I</button>
          <button onClick={() => formatText("underline")}>U</button>
          <button onClick={() => formatText("strikeThrough")}>S</button>
          <button className="highlight" onClick={() => formatText("backColor", "#ffff00")}>A</button>
          <button onClick={() => formatText("removeFormat")}>⋯</button>
          <button onClick={() => formatText("insertUnorderedList")}>•</button>
          <button onClick={() => formatText("insertOrderedList")}>1.</button>
          <button onClick={handleLink}>🔗</button>
          <button onClick={() => formatText("formatBlock", "blockquote")}>❝❞</button>
          <button onClick={() => formatText("insertHorizontalRule")}>—</button>
        </div>

        <div
          className="editor"
          contentEditable
          ref={editorRef}
          onInput={(e) => setDescription(e.currentTarget.innerHTML)}
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>

      <div className="form-group">
        <label>Add Speakers</label>
        <div className="add-speaker">
          <input
            type="text"
            placeholder="Enter speaker name"
            value={newSpeaker}
            onChange={(e) => setNewSpeaker(e.target.value)}
          />
          <button onClick={handleAddSpeaker}>Add</button>
        </div>
      </div>

      <div className="speakers-list">
        {speakers.map((sp, index) => (
          <div key={index} className="speaker-item">
            {sp}
            <button onClick={() => handleRemoveSpeaker(index)}>x</button>
          </div>
        ))}
      </div>

      <div className="button-row">
        <button className="cancel">Cancel</button>
        <button className="save">Save</button>
      </div>
    </div>
  );
};

export default Speaker;
