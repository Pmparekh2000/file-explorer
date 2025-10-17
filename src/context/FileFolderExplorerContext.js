import { createContext, useState } from "react";
import { DUMMY_FILE_FOLDER_DATA, FILE, FOLDER } from "../utils/constants";

export const FileFolderExplorerContext = createContext();

const FileFolderExplorerContextWrapper = ({children}) => {
    const [nodes, setNodes] = useState(DUMMY_FILE_FOLDER_DATA);

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
        const id = Date.now();
        copyNodes[id] = {
            id: id,
            name: nodeName,
            type: nodeName.includes(".") ? FILE : FOLDER,
            parentId: parentNodeId,
            children: [],
        };
        
        copyNodes[parentNodeId].children = [id, ...copyNodes[parentNodeId].children];
        setNodes(copyNodes);
    };

    const handleEditNode = (currentNodeId, newNodeName) => {
        const copyNodes = {...nodes};
        copyNodes[currentNodeId].name = newNodeName;
        setNodes(copyNodes);
    }

    return (
        <FileFolderExplorerContext.Provider value={{ nodes, handleDeleteNode, handleAddNode, handleEditNode }}>
            {children}
        </FileFolderExplorerContext.Provider>
    )
};

export default FileFolderExplorerContextWrapper;

