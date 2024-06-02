import React from 'react';
import { render } from '@testing-library/react-native';
import HideContent from './HideContent';

describe('HideContent', () => {
  it('renders correctly', () => {
    const { getAllByText } = render(<HideContent />);

    // Check if the component renders the masked balance text
    expect(getAllByText('*****').length).toBeGreaterThanOrEqual(1);

    // Check if the component renders the masked transaction texts
    const maskedTexts = getAllByText('*****');
    expect(maskedTexts.length).toBeGreaterThanOrEqual(5); // Adjust the number based on expected occurrences
  });
});