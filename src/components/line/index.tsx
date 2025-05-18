import React from 'react'
import styled from 'styled-components'

interface LineProps {
  width?: string
  color?: string
  margin?: string
  height?: string
}

const StyledLine = styled.div<LineProps>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '1px'};
  background-color: ${(props) => props.color || '#e5e7eb'};
  margin: ${(props) => props.margin || '16px 0'};
`

const Line: React.FC<LineProps> = ({ width, color, margin, height }) => {
  return (
    <StyledLine width={width} color={color} margin={margin} height={height} />
  )
}

export default Line
