import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Faq from "../pages/Faq"

describe("<Faq />", () => {
    it("renders without crashing", () => {
        render(
            <Faq />
        )
        // screen.debug()
        // screen.logTestingPlaygroundURL();

        const contact = screen.getByRole('button', {
            name: /faq 1/i
          })
          expect(contact).toBeInTheDocument()

    })
})