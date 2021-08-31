import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Tile from '../components/Tile';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Renders with the provided ID', () => {
    act(() => {
        render(<Tile id={27} isSelected={false} />, container);
    });
    expect(container.textContent).toBe('Tile 27');

    act(() => {
        render(<Tile id={1234} isSelected={false} />, container);
    });
    expect(container.textContent).toBe('Tile 1234');
});