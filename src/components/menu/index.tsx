import React from 'react'
import { Button } from 'antd'
import styled from 'styled-components'

export type MenuConfig = {
  key: string
  title: string
  subTitle: string
  timeRange: string
  component: React.ReactNode
  chartComponent: React.ReactNode
}

const MenuButton = styled(Button)<{ $isActive?: boolean }>`
  &.ant-btn {
    width: 100%;
    text-align: left;
    margin-bottom: 8px;
    ${(props) =>
      props.$isActive &&
      `
      background-color: #1890ff;
      color: white;
      &:hover { background-color: #40a9ff; }
    `}
  }
`

export const DynamicMenu: React.FC<{
  config: MenuConfig[]
  selectedKey: string
  onSelect: (key: string) => void
}> = ({ config, selectedKey, onSelect }) => {
  return (
    <>
      {config.map((item) => (
        <MenuButton
          key={item.key}
          $isActive={selectedKey === item.key}
          onClick={() => onSelect(item.key)}
        >
          {item.title}
        </MenuButton>
      ))}
    </>
  )
}
