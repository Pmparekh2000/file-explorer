import { createContext, useState } from "react";
import { DUMMY_FILE_FOLDER_DATA, FILE, FOLDER } from "../utils/constants";

export const FileFolderExplorerContext = createContext();

const FileFolderExplorerContextWrapper = ({children}) => {
    const [nodes, setNodes] = useState(DUMMY_FILE_FOLDER_DATA);
    const [currentNodeId, setCurrentNodeId] = useState(27);

    const handleDeleteNode = (currentNodeId) => {
        const copyNodes = {...nodes};
        const parentId = copyNodes[currentNodeId].parentId;
        copyNodes[parentId].children = copyNodes[parentId].children.filter((idx) => idx !== currentNodeId);

        // BFS
        const queue = [currentNodeId];
        while (queue.length > 0) {
            const id = queue.shift();
            queue.push(...copyNodes[id].children);
            delete copyNodes[id];
        };
        setNodes(copyNodes);
    };

    const handleAddNode = (parentNodeId, nodeName) => {
        const copyNodes = {...nodes};
        copyNodes[currentNodeId] = {
            id: currentNodeId,
            name: nodeName,
            type: nodeName.includes(".") ? FILE : FOLDER,
            parentId: parentNodeId,
            children: [],
        };
        console.log(parentNodeId);
        
        copyNodes[parentNodeId].children = [currentNodeId, ...copyNodes[parentNodeId].children];
        setCurrentNodeId(currentNodeId+1);
        setNodes(copyNodes);
    };

    return (
        <FileFolderExplorerContext.Provider value={{ nodes, handleDeleteNode, handleAddNode }}>
            {children}
        </FileFolderExplorerContext.Provider>
    )
};

export default FileFolderExplorerContextWrapper;

