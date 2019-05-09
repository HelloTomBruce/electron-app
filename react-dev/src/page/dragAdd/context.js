import React from 'react'

const defaultContext = {
    fileArr: [],
    removeOne: () => {},
    updateFileName: () => {},
    onSortFiles: () => {}
}

export const DragAddContext = React.createContext(defaultContext)