import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import HTMLReactHookForm from './index';

describe("HTMLReactHookForm /", () => {

    it('renders component', () => {
        render(<HTMLReactHookForm/>)

        const el = screen.getByTestId("react-hook-form")
        expect(el).toBeInTheDocument()
    })

    it('testing checkboxes', () => {
        render(<HTMLReactHookForm/>)

        const hindiEl = screen.getByTestId("hindi")
        expect(hindiEl).not.toBeChecked()

        const farsiEl = screen.getByTestId("farsi")
        expect(farsiEl).not.toBeChecked()

        const afrikaansEl = screen.getByTestId("afrikaans")
        expect(afrikaansEl).not.toBeChecked()

        const nahuatlEl = screen.getByTestId("nahuatl")
        expect(nahuatlEl).not.toBeChecked()

        const mayaEl = screen.getByTestId("maya")
        expect(mayaEl).not.toBeChecked()

        userEvent.click(hindiEl)
        expect(hindiEl).toBeChecked()

        userEvent.click(hindiEl)
        expect(hindiEl).not.toBeChecked()
    })

    it('testing next question button', () => {
        render(<HTMLReactHookForm/>)

        const buttonEl = screen.getByTestId("inputBtn")
        userEvent.click(buttonEl)
        expect(buttonEl).not.toBeInTheDocument()

        const moroccoEl = screen.getByTestId("morocco")
        expect(moroccoEl).not.toBeChecked()

        const tunisiaEl = screen.getByTestId("tunisia")
        expect(tunisiaEl).not.toBeChecked()

        const ghanaEl = screen.getByTestId("ghana")
        expect(ghanaEl).not.toBeChecked()

        const nigeriaEl = screen.getByTestId("nigeria")
        expect(nigeriaEl).not.toBeChecked()

        const lesothoEl = screen.getByTestId("lesotho")
        expect(lesothoEl).not.toBeChecked()

        const submitEl = screen.getByTestId("submitBtn")
        expect(submitEl).toBeInTheDocument()
    })

    it('testing radio buttons', () => {
        render(<HTMLReactHookForm/>)

        const buttonEl = screen.getByTestId("inputBtn")
        userEvent.click(buttonEl)

        const ghanaEl = screen.getByTestId("ghana")
        const nigeriaEl = screen.getByTestId("nigeria")

        userEvent.click(ghanaEl)
        expect(ghanaEl).toBeChecked()

        userEvent.click(nigeriaEl)
        expect(ghanaEl).not.toBeChecked()
        expect(nigeriaEl).toBeChecked()
    })

})