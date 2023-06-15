import React, { useEffect, useState } from 'react'
import AddNote from './AddNote'
import axios from 'axios'

const Notes = () => {
    const [data, setData] = useState([])
    const getData = () => {
        axios.get(`http://localhost:8080/notes`).then((res) => {
            console.log(res.data);
            setData(res.data)
        })
    }
    useEffect(() => {
        getData();
    }, []);

    const deleteNote = (id) => {
        axios.delete(`http://localhost:8080/notes/${id}`).then(() => {
            alert("Deleted")
            getData()
        })
    }

    return (
        <div>
            <h1>Notes</h1>
            <AddNote />
            <div style={{ marginTop: "10px", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "10px" }}>
                {data.map((el) => (
                    <div key={el.id} style={{ padding: "15px", boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset" }}>
                        <p>{el.note}</p>
                        <button onClick={() => { deleteNote(el.id) }}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Notes