import { render, fireEvent, waitFor } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"

import { RemoteControlSettings } from "../RemoteControlSettings"

describe("RemoteControlSettings", () => {
	const defaultProps = {
		remoteControlEnabled: false,
		remoteControlSocketPath: "",
		setCachedStateField: vi.fn(),
	}

	it("renders the enable checkbox", () => {
		const { getByTestId } = render(<RemoteControlSettings {...defaultProps} />)
		expect(getByTestId("remote-control-enabled-checkbox")).toBeTruthy()
	})

	it("does not render the socket path input when disabled", () => {
		const { queryByTestId } = render(<RemoteControlSettings {...defaultProps} />)
		expect(queryByTestId("remote-control-socket-path-input")).toBeNull()
	})

	it("reflects the enabled state on the checkbox", () => {
		const { getByTestId } = render(<RemoteControlSettings {...defaultProps} remoteControlEnabled={true} />)
		const checkbox = getByTestId("remote-control-enabled-checkbox") as HTMLInputElement
		expect(checkbox.checked).toBe(true)
	})

	it("renders the socket path input when enabled", () => {
		const { getByTestId } = render(
			<RemoteControlSettings
				{...defaultProps}
				remoteControlEnabled={true}
				remoteControlSocketPath="/tmp/foo.sock"
			/>,
		)
		const input = getByTestId("remote-control-socket-path-input") as HTMLInputElement
		expect(input.value).toBe("/tmp/foo.sock")
	})

	it("calls setCachedStateField when the enable checkbox is toggled", async () => {
		const setCachedStateField = vi.fn()
		const { getByTestId } = render(
			<RemoteControlSettings {...defaultProps} setCachedStateField={setCachedStateField} />,
		)

		fireEvent.click(getByTestId("remote-control-enabled-checkbox"))

		await waitFor(() => {
			expect(setCachedStateField).toHaveBeenCalledWith("remoteControlEnabled", true)
		})
	})

	it("calls setCachedStateField when the socket path input changes", async () => {
		const setCachedStateField = vi.fn()
		const { getByTestId } = render(
			<RemoteControlSettings
				{...defaultProps}
				remoteControlEnabled={true}
				setCachedStateField={setCachedStateField}
			/>,
		)

		const input = getByTestId("remote-control-socket-path-input")
		fireEvent.input(input, { target: { value: "/tmp/custom.sock" } })

		await waitFor(() => {
			expect(setCachedStateField).toHaveBeenCalledWith("remoteControlSocketPath", "/tmp/custom.sock")
		})
	})
})
