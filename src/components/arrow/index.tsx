import React from 'react'
import styled from 'styled-components'

interface ArrowProps {
  width?: string
  backgroundColor?: string
  color?: string
  fontSize?: string
  content?: string
  height?: string
  borderRadius?: string
  onClick?: () => void
}

const ArrowContainer = styled.div<ArrowProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  height: ${(props) => props.height || '32px'};
  background: ${(props) => props.backgroundColor || '#1890ff'};
  color: ${(props) => props.color || '#fff'};
  padding: 0 ${(props) => '10px'};
  font-size: ${(props) => props.fontSize || '14px'};
  cursor: pointer;
  border-radius: ${(props) => props.borderRadius || '4px'};
  user-select: none;

  &::after {
    content: '';
    position: absolute;
    right: -15px;
    width: 0;
    height: 0;
    border-top: ${(props) => `${parseInt(props.height || '32') / 2}px`} solid
      transparent;
    border-bottom: ${(props) => `${parseInt(props.height || '32') / 2}px`} solid
      transparent;
    border-left: 15px solid ${(props) => props.backgroundColor || '#1890ff'};
  }

  &:hover {
    opacity: 0.9;
  }
`

const Arrow: React.FC<ArrowProps> = ({
  width = '40px',
  backgroundColor = '#1890ff',
  color = '#fff',
  fontSize = '14px',
  content = '',
  height = '32px',
  borderRadius = '4px',
  onClick
}) => {
  return (
    <ArrowContainer
      width={width}
      backgroundColor={backgroundColor}
      color={color}
      fontSize={fontSize}
      height={height}
      borderRadius={borderRadius}
      onClick={onClick}
    >
      {content}
    </ArrowContainer>
  )
}

export default Arrow
