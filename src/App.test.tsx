import {getByText, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import App from './App';

describe("<App /", () => {


    test('render component', () => {
        render(<App />)
        const el = screen.getByTestId("app")
        expect(el).toBeInTheDocument()

    })

})