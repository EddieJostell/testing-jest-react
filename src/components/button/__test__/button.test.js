import React from 'react';
import ReactDOM from 'react-dom';
import Button from './../button';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TestRenderer from 'react-test-renderer';


afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div)
});

it("renders button correctly", ()=> {
   const {getByTestId} = render(<Button label="Click Me Please!"></Button>);
   expect(getByTestId('button')).toHaveTextContent("Click Me Please!");
})

it("renders button correctly", ()=> {
    const {getByTestId} = render(<Button label="Save"></Button>);
    expect(getByTestId('button')).toHaveTextContent("Save");
 })

 it("matches snapshot 1", () => {
     const tree = TestRenderer.create(<Button label="Save"></Button>).toJSON();
     expect(tree).toMatchSnapshot();
 })

 it("matches snapshot 2", () => {
    const tree = TestRenderer.create(<Button label="Click Me Please!"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
})