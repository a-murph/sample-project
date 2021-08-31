import { useContext } from 'react';
import styled from 'styled-components';
import TileContext from './TileContext';

const TileItem = styled.div`
    display: flex;
    width: 100px;
    height: 100px;
    float: left;
    margin: 10px;
    background: ${props => props.isSelected ? 'green' : 'purple'};
`;

const Tile = ({ id, isSelected }) => {
    const { toggleTile } = useContext(TileContext);

    const handleClick = () => {
        toggleTile(id);
    };

    return <TileItem onClick={handleClick} isSelected={isSelected}>Tile {id}</TileItem>;
}

export default Tile;
