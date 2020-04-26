import React, { useState } from "react";
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [isZoomed, SetIsZoomed] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }



  function handleClick() {
    SetIsZoomed(true);
  }

  return (
    <div>
      <form className="create-note">

        {isZoomed && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        <textarea
          name="content"
          onClick={handleClick}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isZoomed ? 3 : 1}
        />
        <Zoom in={isZoomed}>
          <Fab onClick={submitNote}> <AddCircleSharpIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
