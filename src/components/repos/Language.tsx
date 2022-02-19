import React from 'react'

interface Props {
  name: string
  selected: boolean
  onClick: (name: string) => void
}

const Language = ({ name, selected = false, onClick }: Props): JSX.Element =>
  <a
    className={`link dim ph2 pv1 ma1 black bg-${selected ? 'washed-red' : 'near-white'}`}
    onClick={() => onClick(name)}
    title={`${name} button`}
    href='#'
  >{name}
  </a>

export default Language
