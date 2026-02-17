import type { Meta, StoryObj } from '@storybook/react-vite';

import BoundarySouth from './BoundarySouth';

const meta = {
  component: BoundarySouth,
} satisfies Meta<typeof BoundarySouth>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};