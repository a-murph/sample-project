import React from 'react';

const defaultTiles = [
    {id: 1, isSelected: false},
    {id: 2, isSelected: false},
    {id: 3, isSelected: true},
    {id: 4, isSelected: false},
    {id: 5, isSelected: false},
    {id: 6, isSelected: true}
];

const TileContext = React.createContext({
    tiles: defaultTiles,
    toggleTile: () => {},
    setTiles: () => {}
});

export default TileContext;