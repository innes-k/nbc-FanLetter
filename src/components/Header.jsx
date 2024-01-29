import React from 'react'
import * as styles from "./Header.styles"
import NavButtons from './NavButtons'

function Header() {
  return (
    <styles.HeaderCss>
        <styles.HeaderH1>에스파 팬레터 컬렉션</styles.HeaderH1>
        <NavButtons/>
    </styles.HeaderCss>
  )
}

export default Header