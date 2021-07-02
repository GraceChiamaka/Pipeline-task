import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Shape from "../Shape";
import { ShapeProps } from "../Shape";

test("Should Render Shape Component", () => {
	render(<Shape shape="square" color="gray" />);
	const alertElement = screen.getByTestId("shape-display");
	expect(alertElement).toBeInTheDocument();
});

test("matches snapshot", () => {
	const shape: ShapeProps = {
		shape: "oval",
		color: "blue",
	};
	const tree = renderer
		.create(<Shape shape={shape.shape} color={shape.color} />)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
