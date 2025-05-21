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
  background-image: url(${require('@/assets/img/logo.png')});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`


const BrandName = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  font-family: 'Inter', sans-serif !important;
`

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-right: 2%;
`

const ActionButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #003B8E;
  color: #fff;
  border: 1.5px solid #fff;
  border-radius: 8px;
  padding: 0 18px;
  height: 40px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #0056cc;
    color: #fff;
  }
`

const NotificationBadge = styled(Badge)`
  .ant-badge-count {
    background-color: #ff0000;
    color: #fff;
    font-weight: bold;
    box-shadow: none;
    min-width: 20px;
    height: 20px;
    line-height: 20px;
    font-size: 13px;
  }
`

const UserSection = styled.div`
  display: flex;
  align-items: center;
  background: #2386E6;
  color: #fff;
  border-radius: 8px;
  padding: 0 28px 0 18px;
  height: 40px;
  font-size: 18px;
  font-weight: 500;
  gap: 12px;
`

const UserAvatarIcon = styled.div`
  width: 32px;
  height: 32px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2386E6;
  font-size: 22px;
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
  background-color: #fff;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: 'Roboto', 'Open Sans', Arial, Helvetica, sans-serif;
`

const SidebarHeader = styled.div`
  padding: 18px 20px 12px 20px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #000033;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
  position: sticky;
  top: 0;
  z-index: 2;
`

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
  overflow-y: auto;
  background: #fff;
`

const MenuItem = styled.li<{ $active?: boolean; $highlight?: boolean }>`
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  background-color: ${(props) =>
    props.$active ? '' : props.$highlight ? '#e6f7ff' : '#fff'};
  color: #0A1766;
  font-weight: ${(props) => (props.$active ? 'bold' : 'normal')};
  transition: background 0.2s, color 0.2s;

  &:hover {
    background-color: #e6f7ff;
    color: #0A1766;
  }
`

const MenuIcon = styled.span`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0A1766;
  font-size: 20px;
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

// 图标组件
const Icon = ({ type }: { type: string }) => {
  const getIcon = () => {
    switch (type) {
      case 'platform':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24"><path d="M5 3L19 3V21H5L5 3ZM7 5V19H17V5H7ZM13 7V17H11V7H13Z" fill="#005277" /></svg>
        );
      case 'inbox':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24"><path d="M3 5L21 5V11H13V15H11V11H3V5ZM5 7V9H19V7H5Z" fill="#005277"/></svg>
        );
      case 'dashboard':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24"><path d="M10 3H3V21H10V3ZM21 3H14V10H21V3ZM21 14H14V21H21V14ZM10 14H3V21H10V14Z" fill="#005277" /></svg>
        );
      case 'calendar':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24"><path d="M5 3V1H7V3H17V1H19V3H21V9H3V3H5ZM3 11H21V21H3V11ZM5 13V19H7V13H5ZM9 13V19H11V13H9ZM13 13V19H15V13H13ZM17 13V19H19V13H17Z" fill="#005277" /></svg>
        );
      case 'clinic':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24"><path d="M3 3H21V21H3V3ZM9 5V15H15V5H9ZM5 5H7V7H5V5ZM5 9H7V11H5V9ZM5 13H7V15H5V13ZM17 5H19V7H17V5ZM17 9H19V11H17V9ZM17 13H19V15H17V13ZM13 7V9H11V7H13ZM11 11V13H13V11H11Z" fill="#005277" /></svg>
        );
      case 'site':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24"><path d="M3 3H9V21H3V3ZM11 7H21V21H11V7ZM13 9V19H19V9H13ZM11 3H21V5H11V3Z" fill="#005277" /></svg>
        );
      case 'booking':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24"><path d="M3 3H21V21H3V3ZM5 5V7H19V5H5ZM5 9H19V19H5V9ZM13 9V15H15V11H17V17H19V19H5V17H7V15H9V13H11V9H13Z" fill="#005277" /></svg>
        );
      case 'client':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24"><path d="M0 21V20C0 17.3 2.7 15 6 15H18C21.3 15 24 17.3 24 20V21H0ZM9 10C9 7.8 10.8 6 13 6C15.2 6 17 7.8 17 10C17 12.2 15.2 14 13 14C10.8 14 9 12.2 9 10Z" fill="#005277" /></svg>
        );
      case 'device':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24"><path d="M7 1H17V3H7V1ZM5 3C3.9 3 3 3.9 3 5V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V5C21 3.9 20.1 3 19 3H17V5H7V3H5ZM5 5H19V11H5V5ZM5 13V21H11V13H5Z" fill="#005277" /></svg>
        );
      case 'inventory':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24"><path d="M1 4L23 4V19H1V4ZM3 6V17H21V6H3ZM6 6V8H8V6H6ZM10 6V8H12V6H10ZM14 6V8H16V6H14ZM18 6V8H20V6H18ZM6 10V12H8V10H6ZM10 10V12H12V10H10ZM14 10V12H16V10H14ZM18 10V12H20V10H18Z" fill="#005277" /></svg>
        );
      case 'donor':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 4C10.9 4 10 4.9 10 6V18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18V6C14 4.9 13.1 4 12 4ZM6 11C4.9 11 4 11.9 4 13V18C4 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18V13C8 11.9 7.1 11 6 11ZM18 11C16.9 11 16 11.9 16 13V18C16 19.1 16.9 20 18 20C19.1 20 20 19.1 20 18V13C20 11.9 19.1 11 18 11Z" fill="#005277" /></svg>
        );
      case 'reports':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24"><path d="M4 2C3.4 2 3 2.4 3 3V21C3 21.6 3.4 22 4 22H20C20.6 22 21 21.6 21 21V6L15 2H4ZM5 20V4H14V10H20V20H5ZM7 12H11V14H7V12ZM7 16H17V18H7V16Z" fill="#005277" /></svg>
        );
      case 'organisation':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24"><path d="M3 3H21V21H3V3ZM5 5V10H10V5H5ZM5 12V17H17V12H5ZM19 5V10H14V5H19Z" fill="#005277" /></svg>
        );
      case 'authority':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24"><path d="M3 3H21V21H3V3ZM5 5V12H19V5H5ZM5 14V19H13V14H5ZM15 14V19H19V14H15Z" fill="#005277" /></svg>
        );
      case 'users':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="#005277" strokeWidth="2"></circle><path d="M16 14c-.8-.7-2.5-2-4-2s-3.2 1.3-4 2v4h8v-4zM12 6a4 4 0 0 1 4 4H8a4 4 0 0 1 4-4z" fill="#005277" /></svg>
        );
      case 'accounting':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24"><path d="M6 1V3H4V7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H20V3H18V1H16V3H8V1H6Z" fill="#005277" /><path d="M8 9H16V19H8V9Z" fill="none"/></svg>
        );
      case 'settings':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" fill="#005277" /><path d="M12 22c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.55-.45-1-1-1s-1 .45-1 1v.68C7.64 5.36 6 7.93 6 11v5l-2 2v1h16v-1l-2-2z" fill="#005277" /></svg>
        );
      case 'support':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24"><path d="M6 21V19H5C4.5 19 4 18.5 4 18V8C4 7.5 4.5 7 5 7H7C7.5 7 8 6.5 8 6V4C8 3.5 8.5 3 9 3H15C15.5 3 16 3.5 16 4V6C16 6.5 16.5 7 17 7H19C19.5 7 20 7.5 20 8V18C20 18.5 19.5 19 19 19H18V21H6Z" fill="#005277" /></svg>
        );
      default:
        return (
          <svg fill="#000000" height="24" width="24" version="1.1" id="Layer_1" viewBox="0 0 330 330"><path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"/></svg>
        );
    }
  };
  return <MenuIcon>{getIcon()}</MenuIcon>;
};

const DEFAULT_DATA:DiscoverData[] = [
  {
    iconUrl: require('@/assets/img/title.png'),
    tableTitle:'Tests Processed',
    subTitle: 'Test',
    collectors: [],
    reqType: 'second',
    resType: 'TestTypes',
    contentData: [
      {
        content: '',
        dataName: [],
        series: []
      },
      {
        content: '',
        dataName: [],
        series: []
      },
      {
        content: '',
        dataName: [],
        series: []
      }
    ],
    yearlyData: [
      [
        [32, 29, 29, 27, 25, 26],
        [6, 10, 14, 15, 11, 14],
        [6, 10, 14, 15, 11, 14],
        [47, 35, 38, 40, 39, 37]
      ],
      [
        [32, 29, 29, 27, 25, 26],
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
    tableTitle:'Rapid Oral Fluid Drug Screen Results',
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
        content: 'Invaild',
        dataName: [],
        series: []
      },
      {
        content: 'Sent to Lab(RFT)',
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
      ],
      [
        [9322, 1650, 1331, 1762, 3400, 4000],
        [2239, 4510, 1111, 1276, 3050, 4000]
      ],
      [
        [9322, 1650, 1331, 1762, 3400, 4000],
        [2239, 4510, 1111, 1276, 3050, 4000]
      ]
    ]
  },
  {
    iconUrl: require('@/assets/img/6.png'),
    tableTitle:'Hair Drug Test (Laboratory Test)',
    subTitle: 'Result',
    collectors: [],
    reqType: 'nine',
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
        [9222, 1022, 4411, 1244, 3050, 4000],
        [9, 10, 11, 12, 300, 4000]
      ]
    ]
  },
  {
    iconUrl: require('@/assets/img/6.png'),
    tableTitle:'Breath Alcohol Test Results',
    subTitle: 'Result',
    collectors: [],
    reqType: 'ten',
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
    iconUrl: require('@/assets/img/6.png'),
    tableTitle:'Drug Classes - Non Negative Results',
    subTitle: 'Result',
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
    reqType: 'thirteen',
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
    reqType: 'fourteen',
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
    reqType: 'fiveteen',
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
        [1, 5, 7, 5, 6, 2],
        [3, 3, 3, 8, 4, 8],
        [7, 1, 5, 3, 2, 4],
        [8, 4, 2, 7, 5, 7],
        [6, 8, 1, 2, 7, 1],
        [2, 6, 4, 6, 1, 6],
        [4, 2, 6, 1, 3, 5],
        [5, 7, 8, 4, 8, 3]
      ]
    ]
  },
  {
    iconUrl: require('@/assets/img/3.png'),
    tableTitle:'Patient',
    subTitle: 'Appointments',
    collectors: [],
    reqType: 'sixteen',
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
    reqType: 'seventeen',
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
    { key: 'support', label: 'Support', icon: 'support' },
    { key: 'hide', label: '', icon: 'logout' }
  ]

  return (
    <AppContainer>
      <Header>
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            {/* Leftmost: Logo and Collection Manager with drop shadow */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: 240,
              minWidth: 240,
              justifyContent: 'center',
              height: '100%',
              boxShadow: '0px 3px 6px 0px rgba(0,0,0,0.161)',
              overflow: 'visible',
              background: 'inherit'
            }}>
              <Logo>
                <LogoImage />
              </Logo>
            </div>
            {/* Center: SA Clinics */}
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: '100%', padding: '0 0 0 32px' }}>
              <BrandName>SA Clinics</BrandName>
            </div>
          </div>
        <HeaderActions>
          <ActionButton>
            <span style={{fontSize: '18px', marginRight: 6}}>📅</span>
            In-Clinic Appointment
          </ActionButton>
          <ActionButton>
            <span style={{fontSize: '18px', marginRight: 6}}>🛠️</span>
            On Site Job
          </ActionButton>
          <NotificationBadge count={2}>
            <span style={{ fontSize: '22px', color: 'white', cursor: 'pointer' }}>🔔</span>
          </NotificationBadge>
          <UserSection>
            First Name
            <UserAvatarIcon>
              <span role="img" aria-label="user">👤</span>
            </UserAvatarIcon>
          </UserSection>
        </HeaderActions>
      </Header>
      <ContentContainer>
        <Sidebar>
          <SidebarHeader>Collection Manager™</SidebarHeader>
          <SidebarMenu>
            {menuItems.map((item, idx) => (
              <MenuItem
                key={item.key}
                $active={activeMenu === item.key}
                $highlight={idx >= 11}
                onClick={() => setActiveMenu(item.key)}
                style={{
                  borderBottom: idx == menuItems.length - 2 ? '1px solid #e0e0e0' : "",
                  float: idx == menuItems.length - 1 ? 'right' : 'none',
                  backgroundColor:
                    idx == menuItems.length - 1
                      ? 'white'
                      : idx == 0
                      ? '#156CC9'
                      : ''
                }}
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
