import React, { useContext, useEffect, useRef, useState } from 'react'
import { FileFolderExplorerContext } from '../context/FileFolderExplorerContext';

const FileFolderExplorer = ({ id = 1 }) => {

    const [showChildrens, setShowChildrens] = useState(false);
    const [input, setInput] = useState('');
    const [showInput, setShowInput] = useState(false);
    const inputRef = useRef(null);
    const { nodes, handleDeleteNode, handleAddNode } = useContext(FileFolderExplorerContext);

    useEffect(() => {
        return () => {
            inputRef.current = null;
        };
    }, []);

    useEffect(() => {
        if (showInput) {
            inputRef.current.focus();
        }
    }, [showInput]);

    const handleFolderClick = () => {
        if (nodes[id].type === 'folder') {
            setShowChildrens((prevValue) => !prevValue);
        }
    }

    const handleShowInput = (val) => {
        setShowInput((_) => val);
        setInput((_) => '');
    }

  return (
    <div className='filefolderexplorer-container'>
        <h5>
            {nodes[id].type === 'folder' ? (showChildrens ? '📂' : '📁') : '📄'}
            <span onClick={handleFolderClick}>{nodes[id].name}</span>
            <span onClick={() => handleDeleteNode(id)}>❌</span>
            {nodes[id].type === 'folder' ? <span onClick={() => handleShowInput(true)}>➕</span> : <></>}
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