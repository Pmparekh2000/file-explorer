import React, { useState } from 'react'

const FileFolderExplorer = ({fileFolderData = {}}) => {
    const [showFolder, setShowFolder] = useState(false);
    const handleFolderClick = () => {
        if (fileFolderData.type === 'folder') {
            setShowFolder((prevValue) => !prevValue);
        }
    }
  return (
    <div className='filefolderexplorer-container'>
        <h5>
            {fileFolderData.type === 'folder' ? (showFolder ? '📂' : '📁') : '📄'}
            <span onClick={handleFolderClick}>{fileFolderData.name}</span>
        </h5>
        {
            showFolder && fileFolderData?.children?.map((childData, index) => {
                return (
                    <FileFolderExplorer key={index} fileFolderData={childData} />
                )
            })
        }
    </div>
  )
}

export default FileFolderExplorer