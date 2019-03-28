import React from 'react'

const defaultContext = {
    fileArr: [],
    removeOne: () => {},
    onSortFiles: () => {}
}

export const DragAddContext = React.createContext(defaultContext)