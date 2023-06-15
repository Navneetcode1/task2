import axios from 'axios';
import React, { useState } from 'react'

const AddNote = () => {
    const [note, setNote] = useState({
        note: ""
    })
    console.log(note);
    const postData = () => {
        axios.post(`http://localhost:8080/notes`, note).then((res) => {
            alert("Note Is Added")
            window.location.reload();

        })
    }
    const onChngeHandle = (e) => {
        const { name, value } = e.target
        setNote({ ...note, [name]: value })
    }
    return (
        <div style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px", padding: "5px" }}>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                <h3>AddNote</h3>
                <input style={{ width: "70%" }} type="text" name="note" value={note.note} onChange={(e) => { onChngeHandle(e) }} placeholder='write notes here' />
                <button onClick={postData}>Add Note</button>
            </div>

        </div>
    )
}

export default AddNote