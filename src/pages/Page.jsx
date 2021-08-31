import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import TileList from '../components/TileList';
import TileContext from '../components/TileContext';

const PageContainer = styled.div`
    display: flex;
`;

const Page = () => {
    const { tiles: defaultTiles } = useContext(TileContext);
    const [tiles, setTiles] = useState(defaultTiles);
    const { pageId } = useParams();

    useEffect(() => {
        const storageTiles = localStorage.getItem(`tiles-${pageId}`);
        if (storageTiles) {
            setTiles(JSON.parse(storageTiles));
        }
    }, [pageId]);

    useEffect(() => {
        localStorage.setItem(`tiles-${pageId}`, JSON.stringify(tiles));
    }, [tiles, pageId]);

    const toggleTile = (id) => {
        const tileIndex = tiles.findIndex(tile => tile.id === id);
        const newTiles = [...tiles];

        newTiles[tileIndex].isSelected = !newTiles[tileIndex].isSelected;
        setTiles(newTiles);
    }

    return (
        <TileContext.Provider value={{tiles, toggleTile, setTiles}}>
            <PageContainer>
                <TileList />
                <Sidebar />
            </PageContainer>
        </TileContext.Provider>
    );
};

export default Page;