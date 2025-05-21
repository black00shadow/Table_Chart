import React, { useState } from 'react'
import styled from 'styled-components'
import { Badge, Avatar } from 'antd'
import FirstView from './chart'
import ThreeView from '@/components/three/main'
import FourView from '@/components/four/main'
import FiveView from '@/components/five/main'
import SixView from '@/components/six/main'
import SevenView from '@/components/seven/main'
import EightView from '@/components/eight/main'
import NineView from '@/components/nine/main'
import TenView from '@/components/ten/main'
import ElevenView from '@/components/eleven/main'
import TwelveView from '@/components/twelve/main'
import ThirteenView from '@/components/thirteen/main'
import FourteenView from '@/components/fourteen/main'
import FiveteenView from '@/components/fiveteen/main'
import DiscoverPage, { DiscoverData } from '../discover-page'

// 主容器
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f5f5f5;
`

// 顶部栏
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #000033;
  color: white;
  padding: 0 20px;
  height: 120px;
`

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`

const LogoImage = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #00cccc;
    border-radius: 50%;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    border: 2px solid #fff;
    border-radius: 50%;
  }
`

const BrandName = styled.div`
  font-size: 24px;
  font-weight: bold;
`

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

const ActionButton = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #0066cc;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
`

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const NotificationBadge = styled(Badge)`
  .ant-badge-count {
    background-color: #ff0000;
  }
`

const UserAvatar = styled(Avatar)`
  background-color: #87d068;
`

// 内容区域
const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`

// 侧边栏
const Sidebar = styled.div`
  width: 240px;
  background-color: #f0f0f0;
  border-right: 1px solid #e0e0e0;
  overflow-y: auto;
`

const SidebarHeader = styled.div`
  padding: 15px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #000033;
  border-bottom: 1px solid #e0e0e0;
  background-color: #000033;
  color: white;
`

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const MenuItem = styled.li<{ $active?: boolean }>`
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  border-bottom: 1px solid #e0e0e0;
  background-color: ${(props) => (props.$active ? '#0066CC' : 'transparent')};
  color: ${(props) => (props.$active ? '#fff' : '#333')};

  &:hover {
    background-color: #e6f7ff;
  }
`

const MenuIcon = styled.span`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

// 主内容区域
const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`
const HeaderIcon2 = styled.div`
  width: 62px;
  height: 51px;
  background-image: url(${require('@/assets/img/2.png')});
  cursor: pointer;
  margin-right: 10px;
`

const HeaderIcon1 = styled.div`
  width: 42px;
  height: 51px;
  background-image: url(${require('@/assets/img/1.png')});
  cursor: pointer;
  margin-right: 10px;
`
const UserAvatarIcon = styled.div`
  width: 51px;
  height: 52px;
  background-image: url(${require('@/assets/img/3.png')});
  cursor: pointer;
  margin-right: 10px;
`
// 图标组件
const Icon = ({ type }: { type: string }) => {
  const getIcon = () => {
    switch (type) {
      case 'platform':
        return '⚙️'
      case 'inbox':
        return '📥'
      case 'dashboard':
        return '📊'
      case 'calendar':
        return '📅'
      case 'clinic':
        return '🏥'
      case 'site':
        return '🏢'
      case 'booking':
        return '📒'
      case 'client':
        return '👥'
      case 'device':
        return '📱'
      case 'inventory':
        return '📦'
      case 'donor':
        return '🧬'
      case 'reports':
        return '📄'
      case 'organisation':
        return '🏛️'
      case 'authority':
        return '👮'
      case 'users':
        return '👤'
      case 'accounting':
        return '💰'
      case 'settings':
        return '⚙️'
      case 'support':
        return '🆘'
      default:
        return '•'
    }
  }

  return <MenuIcon>{getIcon()}</MenuIcon>
}

const DEFAULT_DATA:DiscoverData[] = [
  {
    iconUrl: require('@/assets/img/time.png'),
    tableTitle:'Patient Time',
    subTitle: 'Test Time',
    collectors: ['Rusira Rusira'],
    reqType: 'three',
    resType: 'PatientTime',
    contentData: [
      {
        content: 'All Tests',
        dataName: [],
        series: []
      },
      {
        content: 'Rapid Urine Drug S.',
        dataName: [],
        series: []
      },
      {
        content: 'Saliva Drug Screen',
        dataName: [],
        series: []
      },
      {
        content: 'Urine Drug Test',
        dataName: [],
        series: []
      },
      {
        content: 'Breath Alcohol Test',
        dataName: [],
        series: []
      }
    ],
    yearlyData: [
      [
        [32, 29, 29, 27, 25, 26],
        [6, 10, 14, 15, 11, 14],
        [47, 35, 38, 40, 39, 37]
      ],
      [
        [32, 29, 29, 27, 25, 26],
        [6, 10, 14, 15, 11, 14],
        [47, 35, 38, 40, 39, 37]
      ],
      [
        [32, 29, 29, 27, 25, 26],
        [6, 10, 14, 15, 11, 14],
        [47, 35, 38, 40, 39, 37]
      ],
      [
        [32, 29, 29, 27, 25, 26],
        [6, 10, 14, 15, 11, 14],
        [47, 35, 38, 40, 39, 37]
      ],
      [
        [32, 29, 29, 27, 25, 26],
        [6, 10, 14, 15, 11, 14],
        [47, 35, 38, 40, 39, 37]
      ]
    ]
  },
  {
    iconUrl: require('@/assets/img/time.png'),
    tableTitle:'Test Time',
    subTitle: 'Test Time',
    collectors: ['All'],
    reqType: 'four',
    resType: 'PatientTime',
    contentData: [
      {
        content: 'All Tests',
        dataName: [],
        series: []
      },
      {
        content: 'Rapid Urine Drug S.',
        dataName: [],
        series: []
      },
      {
        content: 'Saliva Drug Screen',
        dataName: [],
        series: []
      },
      {
        content: 'Urine Drug Test',
        dataName: [],
        series: []
      },
      {
        content: 'Breath Alcohol Test',
        dataName: [],
        series: []
      }
    ],
    yearlyData: [
      [
        [32, 29, 29, 27, 25, 26],
        [6, 10, 14, 15, 11, 14],
        [47, 35, 38, 40, 39, 37]
      ],
      [
        [32, 29, 29, 27, 25, 26],
        [6, 10, 14, 15, 11, 14],
        [47, 35, 38, 40, 39, 37]
      ],
      [
        [32, 29, 29, 27, 25, 26],
        [6, 10, 14, 15, 11, 14],
        [47, 35, 38, 40, 39, 37]
      ],
      [
        [32, 29, 29, 27, 25, 26],
        [6, 10, 14, 15, 11, 14],
        [47, 35, 38, 40, 39, 37]
      ],
      [
        [32, 29, 29, 27, 25, 26],
        [6, 10, 14, 15, 11, 14],
        [47, 35, 38, 40, 39, 37]
      ]
    ]
  },
  {
    iconUrl: require('@/assets/img/timing.png'),
    tableTitle:'Test Categories',
    subTitle: 'Result',
    collectors: [],
    reqType: 'five',
    resType: 'PatientTime',
    contentData: [
      {
        content: '',
        dataName: [],
        series: []
      }
    ],
    yearlyData: [
      [
        [2300, 2300, 2300, 2300, 2300, 2300],
        [3000, 3000, 3000, 3000, 3000, 3000],
        [1200, 1200, 1200, 1200, 1200, 1200],
        [2300, 2300, 2300, 2300, 2300, 2300],
        [3000, 3000, 3000, 3000, 3000, 3000],
        [1200, 1200, 1200, 1200, 1200, 1200],
        [2300, 2300, 2300, 2300, 2300, 2300],
        [3000, 3000, 3000, 3000, 3000, 3000],
        [1200, 1200, 1200, 1200, 1200, 1200],
        [2300, 2300, 2300, 2300, 2300, 2300],
        [3000, 3000, 3000, 3000, 3000, 3000],
        [1200, 1200, 1200, 1200, 1200, 1200],
      ]
    ]
  },
  {
    iconUrl: require('@/assets/img/6.png'),
    tableTitle:'Rapid Urine Drug Screen Results',
    subTitle: 'Result',
    collectors: [],
    reqType: 'six',
    resType: 'PatientTime',
    contentData: [
      {
        content: 'Negative',
        dataName: [],
        series: []
      },
      {
        content: 'Non Negative',
        dataName: [],
        series: []
      },
      {
        content: 'Invalid',
        dataName: [],
        series: []
      },
      {
        content: 'Sent to Lab (RFT)',
        dataName: [],
        series: []
      },
      {
        content: 'Refusal',
        dataName: [],
        series: []
      }
    ],
    yearlyData: [
      [
        [9222, 1022, 4411, 1244, 3050, 4000],
        [9111, 1110, 1144, 1442, 3040, 4000],
      ],
      [
        [9322, 1650, 1331, 1762, 3400, 4000],
        [9111, 1045, 1441, 1892, 3500, 4000],
      ],
      [
        [9222, 1022, 4411, 1244, 3050, 4000],
        [9111, 1110, 1144, 1442, 3040, 4000],
      ],
      [
        [9322, 1650, 1331, 1762, 3400, 4000],
        [9111, 1045, 1441, 1892, 3500, 4000],
      ],
      [
        [9322, 1650, 1331, 1762, 3400, 4000],
        [9111, 1045, 1441, 1892, 3500, 4000],
      ]
    ]
  },
  {
    iconUrl: require('@/assets/img/6.png'),
    tableTitle:'Urine Drug Test Results (Laboratory Test)',
    subTitle: 'Result',
    collectors: [],
    reqType: 'seven',
    resType: 'PatientTime',
    contentData: [
      {
        content: 'Sent to Lab (RFT)',
        dataName: [],
        series: []
      },
      {
        content: 'Refusal',
        dataName: [],
        series: []
      }
    ],
    yearlyData: [
      [
        [9222, 1022, 4411, 1244, 3050, 4000],
        [9, 10, 11, 12, 300, 4000]
      ],
      [
        [9322, 1650, 1331, 1762, 3400, 4000],
        [2239, 4510, 1111, 1276, 3050, 4000]
      ]
    ]
  },
  {
    iconUrl: require('@/assets/img/6.png'),
    tableTitle:'Breath Alcohol Test Results',
    subTitle: 'Result',
    collectors: [],
    reqType: 'eight',
    resType: 'PatientTime',
    contentData: [
      {
        content: 'Negative',
        dataName: [],
        series: []
      },
      {
        content: 'Non Negative',
        dataName: [],
        series: []
      },
      {
        content: 'Invalid',
        dataName: [],
        series: []
      }
    ],
    yearlyData: [
      [
        [9322, 1650, 1331, 1762, 3400, 4000],
        [9111, 1045, 1441, 1892, 3500, 4000]
      ],
      [
        [9322, 1650, 1331, 1762, 3400, 4000],
        [9111, 1045, 1441, 1892, 3500, 4000]
      ],
      [
        [9322, 1650, 1331, 1762, 3400, 4000],
        [9111, 1045, 1441, 1892, 3500, 4000]
      ]
    ]
  },
  {
    iconUrl: require('@/assets/img/6.png'),
    tableTitle:'Drug Classes - Negative Results',
    subTitle: 'Result',
    collectors: [],
    reqType: 'nine',
    resType: 'PatientTime',
    contentData: [
      {
        content: '',
        dataName: [],
        series: []
      },
      {
        content: 'Synthetic',
        dataName: [],
        series: []
      }
    ],
    yearlyData: [
      [
        [9222, 1022, 4411, 1244, 3050, 4000],
        [9111, 1110, 1144, 1442, 3040, 4000],
        [9322, 1650, 1331, 1762, 3400, 4000],
        [9111, 1045, 1441, 1892, 3500, 4000],
        [9, 10, 11, 12, 300, 4000],
        [9, 10, 11, 12, 300, 4000],
        [9, 10, 11, 12, 300, 4000]
      ],
      [
        [9322, 1650, 1331, 1762, 3400, 4000],
        [9111, 1045, 1441, 1892, 3500, 4000]
      ] 
    ]
  },
  {
    iconUrl: require('@/assets/img/6.png'),
    tableTitle:'Drug Classes - Non Negative Results',
    subTitle: 'Result',
    collectors: [],
    reqType: 'ten',
    resType: 'PatientTime',
    contentData: [
      {
        content: '',
        dataName: [],
        series: []
      },
      {
        content: 'Synthetic',
        dataName: [],
        series: []
      }
    ],
    yearlyData: [
      [
        [9222, 1022, 4411, 1244, 3050, 4000],
        [9111, 1110, 1144, 1442, 3040, 4000],
        [9322, 1650, 1331, 1762, 3400, 4000],
        [9111, 1045, 1441, 1892, 3500, 4000],
        [9, 10, 11, 12, 300, 4000],
        [9, 10, 11, 12, 300, 4000],
        [9, 10, 11, 12, 300, 4000]
      ],
      [
        [9322, 1650, 1331, 1762, 3400, 4000],
        [9111, 1045, 1441, 1892, 3500, 4000]
      ] 
    ]
  },
  {
    iconUrl: require('@/assets/img/6.png'),
    tableTitle:'Drug Classes - Invalid Results',
    subTitle: 'Results',
    collectors: [],
    reqType: 'eleven',
    resType: 'PatientTime',
    contentData: [
      {
        content: '',
        dataName: [],
        series: []
      },
      {
        content: 'Synthetic',
        dataName: [],
        series: []
      }
    ],
    yearlyData: [
      [
        [9222, 1022, 4411, 1244, 3050, 4000],
        [9111, 1110, 1144, 1442, 3040, 4000],
        [9322, 1650, 1331, 1762, 3400, 4000],
        [9111, 1045, 1441, 1892, 3500, 4000],
        [9, 10, 11, 12, 300, 4000],
        [9, 10, 11, 12, 300, 4000],
        [9, 10, 11, 12, 300, 4000]
      ],
      [
        [9322, 1650, 1331, 1762, 3400, 4000],
        [9111, 1045, 1441, 1892, 3500, 4000]
      ] 
    ]
  },
  {
    iconUrl: require('@/assets/img/2.png'),
    tableTitle:'Collector Performance',
    subTitle: 'Proceed Tests',
    collectors: [],
    reqType: 'twelve',
    resType: 'PatientTime',
    contentData: [
      {
        content: '',
        dataName: [],
        series: []
      },
      {
        content: 'Collectors',
        dataName: [],
        series: []
      }
    ],
    yearlyData: [
      [
        [9322, 1650, 1331, 1762, 3400, 4000],
        [9111, 1045, 1441, 1892, 3500, 4000],
        [9111, 1045, 1441, 1892, 3500, 4000]
      ],
      [
        [9222, 1022, 4411, 1244, 3050, 4000],
        [9111, 1110, 1144, 1442, 3040, 4000],
        [9322, 1650, 1331, 1762, 3400, 4000],
        [9111, 1045, 1441, 1892, 3500, 4000],
        [9, 10, 11, 12, 300, 4000],
        [9, 10, 11, 12, 300, 4000],
        [9, 10, 11, 12, 300, 4000],
        [9, 10, 11, 12, 300, 4000]
      ]
    ]
  },
  {
    iconUrl: require('@/assets/img/2.png'),
    tableTitle:'Collector Rankings',
    subTitle: 'Rankings',
    collectors: [],
    reqType: 'thirteen',
    resType: 'PatientTime',
    contentData: [
      {
        content: '',
        dataName: [],
        series: []
      }
    ],
    yearlyData: [
      [
        [9, 10, 11, 12, 300, 4000],
        [9, 10, 11, 12, 300, 4000],
        [9, 10, 11, 12, 300, 4000],
        [9, 10, 11, 12, 300, 4000],
        [9, 10, 11, 12, 300, 4000],
        [9, 10, 11, 12, 300, 4000],
        [9, 10, 11, 12, 300, 4000],
        [9, 10, 11, 12, 300, 4000]
      ]
    ]
  },
  {
    iconUrl: require('@/assets/img/3.png'),
    tableTitle:'Patient',
    subTitle: 'Appointments',
    collectors: [],
    reqType: 'fourteen',
    resType: 'PatientTime',
    contentData: [
      {
        content: 'Sex',
        dataName: [],
        series: []
      },
      {
        content: 'Medication',
        dataName: [],
        series: []
      },
      {
        content: 'Attendance',
        dataName: [],
        series: []
      }
    ],
    yearlyData: [
      [
        [9, 10, 11, 12, 300, 4000],
        [9, 10, 11, 12, 300, 4000],
        [9, 10, 11, 12, 300, 4000]
      ],
      [
        [9, 10, 11, 12, 300, 4000],
        [9, 10, 11, 12, 300, 4000],
        [9, 10, 11, 12, 300, 4000]
      ],
      [
        [9322, 1650, 1331, 1762, 3400, 4000],
        [9111, 1045, 1441, 1892, 3500, 4000],
        [2239, 4510, 1111, 1276, 3050, 4000],
        [2239, 4510, 1111, 1276, 3050, 4000]
      ]
    ]
  },
  {
    iconUrl: require('@/assets/img/3.png'),
    tableTitle:'Patient Communication',
    subTitle: 'Reports',
    collectors: [],
    reqType: 'fiveteen',
    resType: 'PatientTime',
    contentData: [
      {
        content: 'Result Reports',
        dataName: [],
        series: []
      },
      {
        content: 'Attendance Cert.',
        dataName: [],
        series: []
      }
    ],
    yearlyData: [
      [
        [9, 10, 11, 12, 300, 4000],
        [9, 10, 11, 12, 300, 4000],
        [9, 10, 11, 12, 300, 4000],
        [9, 10, 11, 12, 300, 4000]
      ],
      [
        [9322, 1650, 1331, 1762, 3400, 4000],
        [2239, 4510, 1111, 1276, 3050, 4000],
        [2239, 4510, 1111, 1276, 3050, 4000]
      ]
    ]
  }
]

// 主组件
const SAClinicsDashboard: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState('dashboard')
  const [timeRange, setTimeRange] = useState<
    'today' | 'currentWeek' | 'currentMonth' | 'currentYear'
  >('today')

  const menuItems = [
    { key: 'platform', label: 'Platform Management', icon: 'platform' },
    { key: 'inbox', label: 'Inbox', icon: 'inbox' },
    { key: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { key: 'calendar', label: 'Calendar', icon: 'calendar' },
    { key: 'clinic', label: 'In-Clinic Appointments', icon: 'clinic' },
    { key: 'site', label: 'On-Site Jobs', icon: 'site' },
    { key: 'booking', label: 'Online Booking Management', icon: 'booking' },
    { key: 'client', label: 'Client Management', icon: 'client' },
    { key: 'device', label: 'Device Management', icon: 'device' },
    { key: 'inventory', label: 'Inventory Management', icon: 'inventory' },
    { key: 'donor', label: 'Donor Records', icon: 'donor' },
    { key: 'reports', label: 'Collection Reports', icon: 'reports' },
    {
      key: 'organisation',
      label: 'Collection Organisation',
      icon: 'organisation'
    },
    { key: 'authority', label: 'Authorising Authority', icon: 'authority' },
    { key: 'users', label: 'Users', icon: 'users' },
    { key: 'accounting', label: 'Accounting', icon: 'accounting' },
    { key: 'settings', label: 'Settings', icon: 'settings' },
    { key: 'support', label: 'Support', icon: 'support' }
  ]

  return (
    <AppContainer>
      <Header>
        <LogoSection>
          <Logo>
            <LogoImage />
          </Logo>
          <BrandName>SA Clinics</BrandName>
        </LogoSection>
        <HeaderActions>
          <ActionButton>
            <HeaderIcon1></HeaderIcon1>
            <div>In-Clinic Appointment</div>
          </ActionButton>
          <ActionButton>
            <HeaderIcon2></HeaderIcon2>
            <div>On-Site Job</div>
          </ActionButton>
          <NotificationBadge count={2}>
            <span
              style={{ fontSize: '20px', color: 'white', cursor: 'pointer' }}
            >
              🔔
            </span>
          </NotificationBadge>
          <UserSection>
            <span>First Name</span>
            <UserAvatarIcon />
            {/* <UserAvatar size="large" /> */}
          </UserSection>
        </HeaderActions>
      </Header>
      <ContentContainer>
        <Sidebar>
          <SidebarHeader>Collection Manager™</SidebarHeader>
          <SidebarMenu>
            {menuItems.map((item) => (
              <MenuItem
                key={item.key}
                $active={activeMenu === item.key}
                onClick={() => setActiveMenu(item.key)}
              >
                <Icon type={item.icon} />
                {item.label}
              </MenuItem>
            ))}
          </SidebarMenu>
        </Sidebar>
        <MainContent>
          <FirstView timeRange={timeRange} />
          {
            DEFAULT_DATA.map((data)=> <DiscoverPage {...data} key={data.reqType}/>)
          }

          {/* <ThreeView />
          <FourView />
          <FiveView />
          <SixView />
          <SevenView />
          <EightView />
          <NineView />
          <TenView />
          <ElevenView />
          <TwelveView />
          <ThirteenView />
          <FourteenView />
          <FiveteenView /> */}
        </MainContent>
      </ContentContainer>
    </AppContainer>
  )
}

export default SAClinicsDashboard
