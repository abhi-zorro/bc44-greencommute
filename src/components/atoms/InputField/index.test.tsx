import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import InputComponent from '.';

describe('Atoms', () => {
  test('renders input field', () => {
    const handleClick = () => {
      console.info('You clicked the Chip.');
    };

    const handleDelete = () => {
      console.info('You clicked the delete icon.');
    };
    render(
      <InputComponent placeholder={'Search by job location'} handleClick={handleClick} handleDelete={handleDelete} />
    );

    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });
});

describe('Input atom', () => {
  it('renders correctly', () => {
    const handleClick = () => {
      console.info('You clicked the Chip.');
    };

    const handleDelete = () => {
      console.info('You clicked the delete icon.');
    };
    const tree = renderer
      .create(
        <InputComponent placeholder={'Search by job location'} handleClick={handleClick} handleDelete={handleDelete} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
