import { StoryObj } from "@storybook/react";
import { SignIn } from "./SignIn";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { rest } from 'msw'

export default {
  title: "Pages/Sign In",
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
        handlers: [
            rest.post('/sessions', (req, res, ctx) => {
                return res(ctx.json({
                    message: 'Login realizado!'
                }))
            }),
        ],
    }
  }
};

export const Default: StoryObj = {
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement)

        userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'rafael@hotmail.com');
        userEvent.type(canvas.getByPlaceholderText('********'), '123456789');

        userEvent.click(canvas.getByRole('button'))

        waitFor(() => {
            return expect(canvas.getByText('Login realizado!')).toBeInTheDocument();
        })
    }
};
