import type { Meta, StoryObj } from '@storybook/react-vite';

import { BasicTable } from './BasicTable';

const meta = {
  component: BasicTable,
} satisfies Meta<typeof BasicTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    "label": "label"
  },
};