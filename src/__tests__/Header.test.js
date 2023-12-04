import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Header from "../components/Header"

describe("<Header />", () => {
    it("renders without crashing", () => {
        render(
            <Header />
        )
        // screen.debug()
        // screen.logTestingPlaygroundURL();

        const header = screen.getByRole('button', {
            name: /search/i
          })
          expect(header).toBeInTheDocument()
    })
})