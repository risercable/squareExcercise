import type { Meta, StoryObj } from '@storybook/react-vite';

import WestTable from './WestTable';
import { useArgs, useEffect } from 'storybook/internal/preview-api';

const meta: Meta<typeof WestTable> = {
  component: WestTable,
  args: {
    coords: {
      "direction-key": "w",
      "coords-x": 4,
      "coords-y": 4,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story, context) => {
      const [, , resetArgs] = useArgs();

      useEffect(() => {
        resetArgs();
      }, []);

      return <Story {...context} />                  ;
    },
  ],
};