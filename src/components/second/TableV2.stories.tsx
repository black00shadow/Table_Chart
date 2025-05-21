/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TableV2 from './table';

const meta: Meta<typeof TableV2> = {
  title: 'Dashboard/TableV2',
  component: TableV2,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TableV2>;

const sampleTableData = [
  [
    {
      time: 'today',
      info: [
        { name: 'AMP', data: [1200, 900, 1500] },
        { name: 'BZO', data: [1600, 800, 1300] },
      ],
    },
    {
      time: 'today',
      info: [
        { name: 'Cannabinoid', data: [90] },
        { name: 'Cathinone', data: [70] },
      ],
    },
  ],
];

export const Default: Story = {
  args: {
    timeRange: 'today',
    tableData: sampleTableData,
    onChange: () => {
      console.log('TableV2 onChange triggered');
    },
  },
};
