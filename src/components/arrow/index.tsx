import React from 'react'
import styled from 'styled-components'

interface ArrowProps {
  width?: string
  backgroundColor?: string
  color?: string
  fontSize?: string
  content?: string
  height?: string
  onClick?: () => void
  isContent: boolean
}

const ArrowContainer = styled.div<Omit<ArrowProps, 'isContent' | 'backgroundColor'>>`
  position: relative;
  display: inline-flex;
  align-items: center;
  height: ${(props) => props.height};
  color: ${(props) => props.color || '#fff'};
  padding: 0 16px;
  font-size: ${(props) => props.fontSize};
  cursor: pointer;
  border-radius: 0;
  user-select: none;

  &::after {
    content: '';
    position: absolute;
    right: -15px;
    width: 0;
    height: 0;
    border-top: ${(props) => `${parseInt(props.height || '32') / 2}px solid transparent`};
    border-bottom: ${(props) => `${parseInt(props.height || '32') / 2}px solid transparent`};
    border-left: 15px solid ${(props) => props.style?.backgroundColor || '#1890ff'};
  }

  &:hover {
    opacity: 0.9;
  }
`

const Arrow: React.FC<ArrowProps> = ({
  isContent = true,
  width = '100%',
  color = '#fff',
  content = '',
  onClick
}) => {
  const backgroundColor = isContent ? '#176CC9' : "#3E93F7";
  return (
    <ArrowContainer
      style={{
        width,
        backgroundColor
      }}
      color={color}
      fontSize={isContent ? '16px' : '14px'}
      height={isContent ? '40px' : '36px'}
      onClick={onClick}
    >
      {content}
    </ArrowContainer>
  );
};

export default Arrow;