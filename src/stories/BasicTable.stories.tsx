import type { Meta, StoryObj } from '@storybook/react-vite';

import { BasicTable } from './BasicTable';
import WestTable from './WestTable';

const meta = {
  component: WestTable,
  title: 'Example/Grid',
  parameters: {
    controls: {
      disableSaveFromUI: true,
    },
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof BasicTable>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const BoundaryWest: Story = {
  args: {
    coords: {
      "direction-key": 'w',
      "coords-x": 4,
      "coords-y": 4
    },
  },
};