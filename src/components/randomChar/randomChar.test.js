import React from 'react';
import RandomChar from './randomChar';
import renderer from 'react-test-renderer';

describe('Testing </RanomChar>', () => {
  it ('RandomChar rendered correctly', () => {
    const char = renderer.create(<RandomChar/>).toJSON();
    expect(char).toMatchSnapshot();
  })
})