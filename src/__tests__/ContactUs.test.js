import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ContactUs from "../pages/ContactUs"

describe("<ContactUs />", () => {
    it("renders without crashing", () => {
        render(
            <ContactUs />
        )


        const contact = screen.getByRole('heading', {
            name: /city hall/i
          })
          expect(contact).toBeInTheDocument()

    })
})

describe("<ContactUs />", () => {
    it("renders without crashing", () => {
        render(
            <ContactUs />
        )


        const textbox = screen.getByRole('textbox', {
            name: /name:/i
          })
          expect(textbox).toBeInTheDocument()
    })
})