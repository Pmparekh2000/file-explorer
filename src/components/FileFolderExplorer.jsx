import React, { useContext, useEffect, useRef, useState } from 'react'
import { FileFolderExplorerContext } from '../context/FileFolderExplorerContext';

const FileFolderExplorer = ({ id = 1 }) => {

    const { nodes, handleDeleteNode, handleAddNode, handleEditNode } = useContext(FileFolderExplorerContext);
    
    const [showChildrens, setShowChildrens] = useState(false);
    const [input, setInput] = useState('');
    const [editInput, setEditInput] = useState(nodes[id].name);
    console.log('nodes object is', nodes[id].name);
    console.log('editInput value is', editInput);
    
    const [showInput, setShowInput] = useState(false);
    const inputRef = useRef(null);
    const [showEdit, setShowEdit] = useState(false);
    const editRef = useRef(null);
    const prevInputValueRef = useRef(nodes[id].name);

    useEffect(() => {
        return () => {
            inputRef.current = null;
            editRef.current = null;
            prevInputValueRef.current = null;
        };
    }, []);

    useEffect(() => {
        setEditInput(nodes[id].name);
        prevInputValueRef.current = nodes[id].name;
    }, [nodes]);

    useEffect(() => {
        if (showInput) {
            inputRef.current.focus();
        }
        if (showEdit) {
            editRef.current.focus();
        }
    }, [showInput, showEdit]);

    const handleFolderClick = () => {
        if (nodes[id].type === 'folder') {
            setShowChildrens((prevValue) => !prevValue);
        }
    }

    const handleShowInput = (val) => {
        setShowInput((_) => val);
        setInput((_) => '');
    }

    const handleEditKeyUp = (e, id, editInput) => {
        const { key } = e;
        if (key === "Enter") {
            handleEditNode(id, editInput);
            prevInputValueRef.current = editInput;
        }
        if (key === "Enter" || key === "Escape") {
            setEditInput(prevInputValueRef.current);
            setShowEdit(false);
        }
    };

  return (
    <div className='filefolderexplorer-container'>
        <h5>
            {nodes[id].type === 'folder' ? (showChildrens ? '📂' : '📁') : '📄'}
            {!showEdit ?
                <span onClick={handleFolderClick}>{nodes[id].name}</span> :
                <input
                    type='text'
                    ref={editRef}
                    value={editInput}
                    onChange={(e) => setEditInput(e.target.value)}
                    onKeyUp={(e) => handleEditKeyUp(e, id, editInput)}
                />
            }
            <span onClick={() => handleDeleteNode(id)}>❌</span>
            {nodes[id].type === 'folder' ? <span onClick={() => handleShowInput(true)}>➕</span> : <></>}
            {!showEdit ? <span onClick={() => setShowEdit(true)}>🖊️</span> : <></>}
        </h5>
        <div>
            {showInput && <input type='text' ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} />}
            {showInput && <button onClick={() => {
                handleShowInput(false);
                handleAddNode(id, input);
            }}>Add</button>}
            {showInput && <button onClick={() => handleShowInput(false)}>Cancel</button>}
        </div>
        {
            showChildrens && nodes[id]?.children?.map((childData, index) => {
                return (
                    <FileFolderExplorer key={index} id={childData} />
                )
            })
        }
    </div>
  )
}

export default FileFolderExplorer