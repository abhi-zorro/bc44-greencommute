import { render, screen } from '@testing-library/react';
import ReactTestRenderer from 'react-test-renderer';
import LocationField from '.';

describe('Location Field Molecule', () => {
  test('Random location', () => {
    render(<LocationField location='Random Location' onChangeHandler={() => {}}></LocationField>);
    expect(screen.getByTestId('textfield-loc')).toBeInTheDocument();
  });
});

describe('Location Field Snapshot', () => {
  it('renders location field correctly', () => {
    const tree = ReactTestRenderer.create(
      <LocationField location='Test Location' onChangeHandler={() => {}}></LocationField>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
