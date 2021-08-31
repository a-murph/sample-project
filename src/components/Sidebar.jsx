import { useContext } from 'react';
import styled from 'styled-components';
import TileContext from './TileContext';

const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    width: 150px;
`;

const ButtonContainer = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
`;

const StyledButton = styled.button`
    width: 35px;
    height: 35px;
    background: ${props => props.type === 'add' ? 'green' : 'red'};
    color: #fff;
    font-weight: bold;
`;

const Sidebar = () => {
    const { tiles, setTiles } = useContext(TileContext);
    const selectedTiles = tiles.filter(tile => tile.isSelected);

    const handleAddTile = () => {
        const ids = tiles.map(tile => tile.id);
        const highestId = ids.length ? Math.max(...ids) : 0;
        setTiles([...tiles, { id: highestId + 1, isSelected: false }]);
    };

    const handleDeleteTiles = () => {
        const newTiles = tiles.filter(tile => !tile.isSelected);
        setTiles(newTiles);
    };

    return (
        <SidebarContainer>
            Selected Tiles: {selectedTiles.length}
            <ButtonContainer>
                <StyledButton type="add" onClick={handleAddTile}>+</StyledButton>
                <StyledButton type="delete" onClick={handleDeleteTiles}>X</StyledButton>
            </ButtonContainer>
        </SidebarContainer>
    );
};

export default Sidebar;