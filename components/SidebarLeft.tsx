import { Sidebar, InputItem, DropdownItem, Icon, Item, Logo, LogoText } from 'react-sidebar-ui'
import 'react-sidebar-ui/dist/index.css'
import '../components/styles/sidebarleft.module.css'
//import styles from '../components/styles/sidebarleft.module.css'
import Link from 'next/link'

const SidebarLeft = () => (
  <div>
    <Sidebar bgColor="black" isCollapsed={true}>
      <div style={{ marginTop: '100px' }}></div>
      <LogoText>
        <a href="https://www.lexer.co.jp/en">LEXER RESEARCH</a>
      </LogoText>
      <Link href="/">
        <Item bgColor="black">Home</Item>
      </Link>
      {/*       <Link href="/posts/gdfindiproject">
        <Item bgColor="black">Run GD.findi Project</Item>
      </Link> */}
      <Link href="/posts/workloadchart">
        <Item bgColor="black">Workload Gantt Chart</Item>
      </Link>
      {/*       <Link href="/posts/openfactory">
        <Item bgColor="black">Open Factory</Item>
      </Link>
      <Link href="/posts/monitoring">
        <Item bgColor="black">Monitoring</Item>
      </Link>
      <DropdownItem
        values={[
          <Link href="/posts/productionorder1">- Constraint1</Link>,
          <Link href="/posts/productionorder2">- Constraint2</Link>,
        ]}
        bgColor={'black'}
      >
        Production Order
      </DropdownItem>
      <DropdownItem
        values={[
          <Link href="/posts/knowledgedb">- Set Knowledge DB</Link>,
          <Link href="/posts/scheduling">- Generate Scheduling</Link>,
        ]}
        bgColor={'black'}
      >
        Production Scheduling
      </DropdownItem> */}
    </Sidebar>
  </div>
)

export default SidebarLeft
