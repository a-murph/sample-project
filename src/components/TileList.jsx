import { useContext } from 'react';
import styled from 'styled-components';
import Tile from './Tile';
import TileContext from './TileContext';

const List = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 600px;
    padding: 50px;
    background: #f0f0f0;
    margin: 10px 100px;
`;

const TileList = () => {
    const { tiles } = useContext(TileContext);

    return (
        <List>
            {tiles.map(tile => <Tile isSelected={tile.isSelected} id={tile.id} key={tile.id} />)}
        </List>
    )
};

export default TileList;