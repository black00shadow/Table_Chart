export interface RequestType {
  url: string
  type: string
  body: string
}
export type TableType =
  | 'second'
  | 'three'
  | 'four'
  | 'five'
  | 'six'
  | 'seven'
  | 'eight'
  | 'nine'
  | 'ten'
  | 'eleven'
  | 'twelve'
  | 'thirteen'
  | 'fourteen'
  | 'fiveteen'

const tableData = {
  second: {
    TestTypes: [
      [
        {
          time: 'today',
          info: [
            {
              name: 'Urine Drug Screen',
              data: [24]
            },
            {
              name: 'Oral Fluid Drug Screen',
              data: [24]
            },
            {
              name: 'Urine Drug Test',
              data: [10]
            },
            {
              name: 'Breath Alcohol Screen',
              data: [25]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Urine Drug Screen',
              data: [65]
            },
            {
              name: 'Oral Fluid Drug Screen',
              data: [65]
            },
            {
              name: 'Urine Drug Test',
              data: [45]
            },
            {
              name: 'Breath Alcohol Screen',
              data: [45]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Urine Drug Screen',
              data: [345]
            },
            {
              name: 'Oral Fluid Drug Screen',
              data: [345]
            },
            {
              name: 'Urine Drug Test',
              data: [120]
            },
            {
              name: 'Breath Alcohol Screen',
              data: [230]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Urine Drug Screen',
              data: [2345]
            },
            {
              name: 'Oral Fluid Drug Screen',
              data: [2345]
            },
            {
              name: 'Urine Drug Test',
              data: [2790]
            },
            {
              name: 'Breath Alcohol Screen',
              data: [3800]
            }
          ]
        }
      ],
      [
        {
          time: 'today',
          info: [
            {
              name: 'Observed',
              data: [30]
            },
            {
              name: 'Witnessed',
              data: [10]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Observed',
              data: [150]
            },
            {
              name: 'Witnessed',
              data: [45]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Observed',
              data: [570]
            },
            {
              name: 'Witnessed',
              data: [120]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Observed',
              data: [7800]
            },
            {
              name: 'Witnessed',
              data: [1500]
            }
          ]
        }
      ],
      [
        {
          time: 'today',
          info: [
            {
              name: 'Single',
              data: [12]
            },
            {
              name: 'Multiple',
              data: [28]
            },
            {
              name: 'Renewal',
              data: [10]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Single',
              data: [23]
            },
            {
              name: 'Multiple',
              data: [67]
            },
            {
              name: 'Renewal',
              data: [40]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Single',
              data: [100]
            },
            {
              name: 'Multiple',
              data: [310]
            },
            {
              name: 'Renewal',
              data: [200]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Single',
              data: [1340]
            },
            {
              name: 'Multiple',
              data: [1500]
            },
            {
              name: 'Renewal',
              data: [1200]
            }
          ]
        }
      ]
    ]
  },
  three: {
    PatientTime: [
      [
        {
          time: 'today',
          info: [
            {
              name: 'Average',
              data: [21]
            },
            {
              name: 'Shortest',
              data: [10]
            },
            {
              name: 'Longest',
              data: [35]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Average',
              data: [23]
            },
            {
              name: 'Shortest',
              data: [8]
            },
            {
              name: 'Longest',
              data: [37]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Average',
              data: [22]
            },
            {
              name: 'Shortest',
              data: [8]
            },
            {
              name: 'Longest',
              data: [48]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Average',
              data: [21]
            },
            {
              name: 'Shortest',
              data: [7]
            },
            {
              name: 'Longest',
              data: [48]
            }
          ]
        }
      ],
      [
        {
          time: 'today',
          info: [
            {
              name: 'Average',
              data: [21]
            },
            {
              name: 'Shortest',
              data: [9]
            },
            {
              name: 'Longest',
              data: [35]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Average',
              data: [19]
            },
            {
              name: 'Shortest',
              data: [9]
            },
            {
              name: 'Longest',
              data: [55]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Average',
              data: [29]
            },
            {
              name: 'Shortest',
              data: [9]
            },
            {
              name: 'Longest',
              data: [48]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Average',
              data: [22]
            },
            {
              name: 'Shortest',
              data: [7]
            },
            {
              name: 'Longest',
              data: [55]
            }
          ]
        }
      ],
      [
        {
          time: 'today',
          info: [
            {
              name: 'Average',
              data: [21]
            },
            {
              name: 'Shortest',
              data: [9]
            },
            {
              name: 'Longest',
              data: [35]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Average',
              data: [19]
            },
            {
              name: 'Shortest',
              data: [9]
            },
            {
              name: 'Longest',
              data: [55]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Average',
              data: [29]
            },
            {
              name: 'Shortest',
              data: [9]
            },
            {
              name: 'Longest',
              data: [48]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Average',
              data: [22]
            },
            {
              name: 'Shortest',
              data: [7]
            },
            {
              name: 'Longest',
              data: [55]
            }
          ]
        }
      ],
      [
        {
          time: 'today',
          info: [
            {
              name: 'Average',
              data: [21]
            },
            {
              name: 'Shortest',
              data: [9]
            },
            {
              name: 'Longest',
              data: [35]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Average',
              data: [19]
            },
            {
              name: 'Shortest',
              data: [9]
            },
            {
              name: 'Longest',
              data: [55]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Average',
              data: [29]
            },
            {
              name: 'Shortest',
              data: [9]
            },
            {
              name: 'Longest',
              data: [48]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Average',
              data: [22]
            },
            {
              name: 'Shortest',
              data: [7]
            },
            {
              name: 'Longest',
              data: [55]
            }
          ]
        }
      ],
      [
        {
          time: 'today',
          info: [
            {
              name: 'Average',
              data: [8]
            },
            {
              name: 'Shortest',
              data: [7]
            },
            {
              name: 'Longest',
              data: [10]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Average',
              data: [10]
            },
            {
              name: 'Shortest',
              data: [7]
            },
            {
              name: 'Longest',
              data: [15]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Average',
              data: [12]
            },
            {
              name: 'Shortest',
              data: [6]
            },
            {
              name: 'Longest',
              data: [17]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Average',
              data: [12]
            },
            {
              name: 'Shortest',
              data: [5]
            },
            {
              name: 'Longest',
              data: [17]
            }
          ]
        }
      ]
    ]
  },
  four: {
    PatientTime: [
      [
        {
          time: 'today',
          info: [
            {
              name: 'Average',
              data: [21]
            },
            {
              name: 'Shortest',
              data: [10]
            },
            {
              name: 'Longest',
              data: [35]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Average',
              data: [23]
            },
            {
              name: 'Shortest',
              data: [8]
            },
            {
              name: 'Longest',
              data: [37]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Average',
              data: [22]
            },
            {
              name: 'Shortest',
              data: [8]
            },
            {
              name: 'Longest',
              data: [48]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Average',
              data: [21]
            },
            {
              name: 'Shortest',
              data: [7]
            },
            {
              name: 'Longest',
              data: [48]
            }
          ]
        }
      ],
      [
        {
          time: 'today',
          info: [
            {
              name: 'Average',
              data: [21]
            },
            {
              name: 'Shortest',
              data: [9]
            },
            {
              name: 'Longest',
              data: [35]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Average',
              data: [19]
            },
            {
              name: 'Shortest',
              data: [9]
            },
            {
              name: 'Longest',
              data: [55]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Average',
              data: [29]
            },
            {
              name: 'Shortest',
              data: [9]
            },
            {
              name: 'Longest',
              data: [48]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Average',
              data: [22]
            },
            {
              name: 'Shortest',
              data: [7]
            },
            {
              name: 'Longest',
              data: [55]
            }
          ]
        }
      ],
      [
        {
          time: 'today',
          info: [
            {
              name: 'Average',
              data: [21]
            },
            {
              name: 'Shortest',
              data: [9]
            },
            {
              name: 'Longest',
              data: [35]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Average',
              data: [19]
            },
            {
              name: 'Shortest',
              data: [9]
            },
            {
              name: 'Longest',
              data: [55]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Average',
              data: [29]
            },
            {
              name: 'Shortest',
              data: [9]
            },
            {
              name: 'Longest',
              data: [48]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Average',
              data: [22]
            },
            {
              name: 'Shortest',
              data: [7]
            },
            {
              name: 'Longest',
              data: [55]
            }
          ]
        }
      ],
      [
        {
          time: 'today',
          info: [
            {
              name: 'Average',
              data: [21]
            },
            {
              name: 'Shortest',
              data: [9]
            },
            {
              name: 'Longest',
              data: [35]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Average',
              data: [19]
            },
            {
              name: 'Shortest',
              data: [9]
            },
            {
              name: 'Longest',
              data: [55]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Average',
              data: [29]
            },
            {
              name: 'Shortest',
              data: [9]
            },
            {
              name: 'Longest',
              data: [48]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Average',
              data: [22]
            },
            {
              name: 'Shortest',
              data: [7]
            },
            {
              name: 'Longest',
              data: [55]
            }
          ]
        }
      ],
      [
        {
          time: 'today',
          info: [
            {
              name: 'Average',
              data: [8]
            },
            {
              name: 'Shortest',
              data: [7]
            },
            {
              name: 'Longest',
              data: [10]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Average',
              data: [10]
            },
            {
              name: 'Shortest',
              data: [7]
            },
            {
              name: 'Longest',
              data: [15]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Average',
              data: [12]
            },
            {
              name: 'Shortest',
              data: [6]
            },
            {
              name: 'Longest',
              data: [17]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Average',
              data: [12]
            },
            {
              name: 'Shortest',
              data: [5]
            },
            {
              name: 'Longest',
              data: [17]
            }
          ]
        }
      ]
    ]
  },
  five: {
    PatientTime: [
      [
        {
          time: 'today',
          info: [
            {
              name: 'Rail (Cat 1)',
              data: [24]
            },
            {
              name: 'Rail (Cat 2)',
              data: [10]
            },
            {
              name: 'Rail (Cat 3)',
              data: [25]
            },
            {
              name: 'Court Medical',
              data: [24]
            },
            {
              name: 'Driving Medical',
              data: [10]
            },
            {
              name: 'Diving Medical',
              data: [25]
            },
            {
              name: 'Incident Medical',
              data: [24]
            },
            {
              name: 'MRO',
              data: [10]
            },
            {
              name: 'MRO (12 mths)',
              data: [25]
            },
            {
              name: 'In House (Pre Em)',
              data: [24]
            },
            {
              name: 'Lab (Pre Em)',
              data: [10]
            },
            {
              name: 'Other',
              data: [25]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Rail (Cat 1)',
              data: [65]
            },
            {
              name: 'Rail (Cat 2)',
              data: [45]
            },
            {
              name: 'Rail (Cat 3)',
              data: [45]
            },
            {
              name: 'Court Medical',
              data: [65]
            },
            {
              name: 'Driving Medical',
              data: [45]
            },
            {
              name: 'Diving Medical',
              data: [45]
            },
            {
              name: 'Incident Medical',
              data: [65]
            },
            {
              name: 'MRO',
              data: [45]
            },
            {
              name: 'MRO (12 mths)',
              data: [45]
            },
            {
              name: 'In House (Pre Em)',
              data: [65]
            },
            {
              name: 'Lab (Pre Em)',
              data: [45]
            },
            {
              name: 'Other',
              data: [45]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Rail (Cat 1)',
              data: [345]
            },
            {
              name: 'Rail (Cat 2)',
              data: [120]
            },
            {
              name: 'Rail (Cat 3)',
              data: [230]
            },
            {
              name: 'Court Medical',
              data: [345]
            },
            {
              name: 'Driving Medical',
              data: [120]
            },
            {
              name: 'Diving Medical',
              data: [230]
            },
            {
              name: 'Incident Medical',
              data: [345]
            },
            {
              name: 'MRO',
              data: [120]
            },
            {
              name: 'MRO (12 mths)',
              data: [230]
            },
            {
              name: 'In House (Pre Em)',
              data: [345]
            },
            {
              name: 'Lab (Pre Em)',
              data: [120]
            },
            {
              name: 'Other',
              data: [230]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Rail (Cat 1)',
              data: [2345]
            },
            {
              name: 'Rail (Cat 2)',
              data: [2790]
            },
            {
              name: 'Rail (Cat 3)',
              data: [3800]
            },
            {
              name: 'Court Medical',
              data: [2345]
            },
            {
              name: 'Driving Medical',
              data: [2790]
            },
            {
              name: 'Diving Medical',
              data: [3800]
            },
            {
              name: 'Incident Medical',
              data: [2345]
            },
            {
              name: 'MRO',
              data: [2790]
            },
            {
              name: 'MRO (12 mths)',
              data: [3800]
            },
            {
              name: 'In House (Pre Em)',
              data: [2345]
            },
            {
              name: 'Lab (Pre Em)',
              data: [2790]
            },
            {
              name: 'Other',
              data: [3800]
            }
          ]
        }
      ]
    ]
  },
  six: {
    PatientTime: [
      [
        {
          time: 'today',
          info: [
            {
              name: 'Sample 1',
              data: [10]
            },
            {
              name: 'Sample 2',
              data: [25]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Sample 1',
              data: [45]
            },
            {
              name: 'Sample 2',
              data: [45]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Sample 1',
              data: [120]
            },
            {
              name: 'Sample 2',
              data: [230]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Sample 1',
              data: [2790]
            },
            {
              name: 'Sample 2',
              data: [3800]
            }
          ]
        }
      ],
      [
        {
          time: 'today',
          info: [
            {
              name: 'Sample 1',
              data: [10]
            },
            {
              name: 'Sample 2',
              data: [25]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Sample 1',
              data: [45]
            },
            {
              name: 'Sample 2',
              data: [45]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Sample 1',
              data: [120]
            },
            {
              name: 'Sample 2',
              data: [230]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Sample 1',
              data: [2790]
            },
            {
              name: 'Sample 2',
              data: [3800]
            }
          ]
        }
      ],
      [
        {
          time: 'today',
          info: [
            {
              name: 'Sample 1',
              data: [10]
            },
            {
              name: 'Sample 2',
              data: [25]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Sample 1',
              data: [45]
            },
            {
              name: 'Sample 2',
              data: [45]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Sample 1',
              data: [120]
            },
            {
              name: 'Sample 2',
              data: [230]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Sample 1',
              data: [2790]
            },
            {
              name: 'Sample 2',
              data: [3800]
            }
          ]
        }
      ],
      [
        {
          time: 'today',
          info: [
            {
              name: 'Sample 1',
              data: [10]
            },
            {
              name: 'Sample 2',
              data: [25]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Sample 1',
              data: [45]
            },
            {
              name: 'Sample 2',
              data: [45]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Sample 1',
              data: [120]
            },
            {
              name: 'Sample 2',
              data: [230]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Sample 1',
              data: [2790]
            },
            {
              name: 'Sample 2',
              data: [3800]
            }
          ]
        }
      ],
      [
        {
          time: 'today',
          info: [
            {
              name: 'Sample 1',
              data: [10]
            },
            {
              name: 'Sample 2',
              data: [25]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Sample 1',
              data: [45]
            },
            {
              name: 'Sample 2',
              data: [45]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Sample 1',
              data: [120]
            },
            {
              name: 'Sample 2',
              data: [230]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Sample 1',
              data: [2790]
            },
            {
              name: 'Sample 2',
              data: [3800]
            }
          ]
        }
      ]
    ]
  },
  seven: {
    PatientTime: [
      [
        {
          time: 'today',
          info: [
            {
              name: 'Sample 1',
              data: [10]
            },
            {
              name: 'Sample 2',
              data: [25]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Sample 1',
              data: [45]
            },
            {
              name: 'Sample 2',
              data: [45]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Sample 1',
              data: [120]
            },
            {
              name: 'Sample 2',
              data: [230]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Sample 1',
              data: [2790]
            },
            {
              name: 'Sample 2',
              data: [3800]
            }
          ]
        }
      ],
      [
        {
          time: 'today',
          info: [
            {
              name: 'Sample 1',
              data: [10]
            },
            {
              name: 'Sample 2',
              data: [25]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Sample 1',
              data: [45]
            },
            {
              name: 'Sample 2',
              data: [45]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Sample 1',
              data: [120]
            },
            {
              name: 'Sample 2',
              data: [230]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Sample 1',
              data: [2790]
            },
            {
              name: 'Sample 2',
              data: [3800]
            }
          ]
        }
      ]
    ]
  },
  eight: {
    PatientTime: [
      [
        {
          time: 'today',
          info: [
            {
              name: 'Sample 1',
              data: [10]
            },
            {
              name: 'Sample 2',
              data: [25]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Sample 1',
              data: [45]
            },
            {
              name: 'Sample 2',
              data: [45]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Sample 1',
              data: [120]
            },
            {
              name: 'Sample 2',
              data: [230]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Sample 1',
              data: [2790]
            },
            {
              name: 'Sample 2',
              data: [3800]
            }
          ]
        }
      ],
      [
        {
          time: 'today',
          info: [
            {
              name: 'Sample 1',
              data: [10]
            },
            {
              name: 'Sample 2',
              data: [25]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Sample 1',
              data: [45]
            },
            {
              name: 'Sample 2',
              data: [45]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Sample 1',
              data: [120]
            },
            {
              name: 'Sample 2',
              data: [230]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Sample 1',
              data: [2790]
            },
            {
              name: 'Sample 2',
              data: [3800]
            }
          ]
        }
      ],
      [
        {
          time: 'today',
          info: [
            {
              name: 'Sample 1',
              data: [10]
            },
            {
              name: 'Sample 2',
              data: [25]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Sample 1',
              data: [45]
            },
            {
              name: 'Sample 2',
              data: [45]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Sample 1',
              data: [120]
            },
            {
              name: 'Sample 2',
              data: [230]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Sample 1',
              data: [2790]
            },
            {
              name: 'Sample 2',
              data: [3800]
            }
          ]
        }
      ],
      [
        {
          time: 'today',
          info: [
            {
              name: 'Sample 1',
              data: [10]
            },
            {
              name: 'Sample 2',
              data: [25]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Sample 1',
              data: [45]
            },
            {
              name: 'Sample 2',
              data: [45]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Sample 1',
              data: [120]
            },
            {
              name: 'Sample 2',
              data: [230]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Sample 1',
              data: [2790]
            },
            {
              name: 'Sample 2',
              data: [3800]
            }
          ]
        }
      ],
      [
        {
          time: 'today',
          info: [
            {
              name: 'Sample 1',
              data: [10]
            },
            {
              name: 'Sample 2',
              data: [25]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Sample 1',
              data: [45]
            },
            {
              name: 'Sample 2',
              data: [45]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Sample 1',
              data: [120]
            },
            {
              name: 'Sample 2',
              data: [230]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Sample 1',
              data: [2790]
            },
            {
              name: 'Sample 2',
              data: [3800]
            }
          ]
        }
      ],
      [
        {
          time: 'today',
          info: [
            {
              name: 'Sample 1',
              data: [10]
            },
            {
              name: 'Sample 2',
              data: [25]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Sample 1',
              data: [45]
            },
            {
              name: 'Sample 2',
              data: [45]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Sample 1',
              data: [120]
            },
            {
              name: 'Sample 2',
              data: [230]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Sample 1',
              data: [2790]
            },
            {
              name: 'Sample 2',
              data: [3800]
            }
          ]
        }
      ]
    ]
  },
  nine: {
    PatientTime: [
      [
        {
          time: 'today',
          info: [
            {
              name: 'AMP',
              data: [24]
            },
            {
              name: 'BZO',
              data: [10]
            },
            {
              name: 'COC',
              data: [25]
            },
            {
              name: 'MET',
              data: [24]
            },
            {
              name: 'OPI',
              data: [10]
            },
            {
              name: 'OXY',
              data: [25]
            },
            {
              name: 'THC',
              data: [24]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'AMP',
              data: [65]
            },
            {
              name: 'BZO',
              data: [45]
            },
            {
              name: 'COC',
              data: [45]
            },
            {
              name: 'MET',
              data: [65]
            },
            {
              name: 'OPI',
              data: [45]
            },
            {
              name: 'OXY',
              data: [45]
            },
            {
              name: 'THC',
              data: [65]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'AMP',
              data: [345]
            },
            {
              name: 'BZO',
              data: [120]
            },
            {
              name: 'COC',
              data: [230]
            },
            {
              name: 'MET',
              data: [345]
            },
            {
              name: 'OPI',
              data: [120]
            },
            {
              name: 'OXY',
              data: [230]
            },
            {
              name: 'THC',
              data: [345]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'AMP',
              data: [2345]
            },
            {
              name: 'BZO',
              data: [2790]
            },
            {
              name: 'COC',
              data: [3800]
            },
            {
              name: 'MET',
              data: [2345]
            },
            {
              name: 'OPI',
              data: [2790]
            },
            {
              name: 'OXY',
              data: [3800]
            },
            {
              name: 'THC',
              data: [2345]
            }
          ]
        }
      ],
      [
        {
          time: 'today',
          info: [
            {
              name: 'Cannabinoid',
              data: [25]
            },
            {
              name: 'Cathinone',
              data: [24]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Cannabinoid',
              data: [45]
            },
            {
              name: 'Cathinone',
              data: [65]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Cannabinoid',
              data: [230]
            },
            {
              name: 'Cathinone',
              data: [345]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Cannabinoid',
              data: [3800]
            },
            {
              name: 'Cathinone',
              data: [2345]
            }
          ]
        }
      ]
    ]
  },
  ten: {
    PatientTime: [
      [
        {
          time: 'today',
          info: [
            {
              name: 'AMP',
              data: [24]
            },
            {
              name: 'BZO',
              data: [10]
            },
            {
              name: 'COC',
              data: [25]
            },
            {
              name: 'MET',
              data: [24]
            },
            {
              name: 'OPI',
              data: [10]
            },
            {
              name: 'OXY',
              data: [25]
            },
            {
              name: 'THC',
              data: [24]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'AMP',
              data: [65]
            },
            {
              name: 'BZO',
              data: [45]
            },
            {
              name: 'COC',
              data: [45]
            },
            {
              name: 'MET',
              data: [65]
            },
            {
              name: 'OPI',
              data: [45]
            },
            {
              name: 'OXY',
              data: [45]
            },
            {
              name: 'THC',
              data: [65]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'AMP',
              data: [345]
            },
            {
              name: 'BZO',
              data: [120]
            },
            {
              name: 'COC',
              data: [230]
            },
            {
              name: 'MET',
              data: [345]
            },
            {
              name: 'OPI',
              data: [120]
            },
            {
              name: 'OXY',
              data: [230]
            },
            {
              name: 'THC',
              data: [345]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'AMP',
              data: [2345]
            },
            {
              name: 'BZO',
              data: [2790]
            },
            {
              name: 'COC',
              data: [3800]
            },
            {
              name: 'MET',
              data: [2345]
            },
            {
              name: 'OPI',
              data: [2790]
            },
            {
              name: 'OXY',
              data: [3800]
            },
            {
              name: 'THC',
              data: [2345]
            }
          ]
        }
      ],
      [
        {
          time: 'today',
          info: [
            {
              name: 'Cannabinoid',
              data: [25]
            },
            {
              name: 'Cathinone',
              data: [24]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Cannabinoid',
              data: [45]
            },
            {
              name: 'Cathinone',
              data: [65]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Cannabinoid',
              data: [230]
            },
            {
              name: 'Cathinone',
              data: [345]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Cannabinoid',
              data: [3800]
            },
            {
              name: 'Cathinone',
              data: [2345]
            }
          ]
        }
      ]
    ]
  },
  eleven: {
    PatientTime: [
      [
        {
          time: 'today',
          info: [
            {
              name: 'AMP',
              data: [24]
            },
            {
              name: 'BZO',
              data: [10]
            },
            {
              name: 'COC',
              data: [25]
            },
            {
              name: 'MET',
              data: [24]
            },
            {
              name: 'OPI',
              data: [10]
            },
            {
              name: 'OXY',
              data: [25]
            },
            {
              name: 'THC',
              data: [24]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'AMP',
              data: [65]
            },
            {
              name: 'BZO',
              data: [45]
            },
            {
              name: 'COC',
              data: [45]
            },
            {
              name: 'MET',
              data: [65]
            },
            {
              name: 'OPI',
              data: [45]
            },
            {
              name: 'OXY',
              data: [45]
            },
            {
              name: 'THC',
              data: [65]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'AMP',
              data: [345]
            },
            {
              name: 'BZO',
              data: [120]
            },
            {
              name: 'COC',
              data: [230]
            },
            {
              name: 'MET',
              data: [345]
            },
            {
              name: 'OPI',
              data: [120]
            },
            {
              name: 'OXY',
              data: [230]
            },
            {
              name: 'THC',
              data: [345]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'AMP',
              data: [2345]
            },
            {
              name: 'BZO',
              data: [2790]
            },
            {
              name: 'COC',
              data: [3800]
            },
            {
              name: 'MET',
              data: [2345]
            },
            {
              name: 'OPI',
              data: [2790]
            },
            {
              name: 'OXY',
              data: [3800]
            },
            {
              name: 'THC',
              data: [2345]
            }
          ]
        }
      ],
      [
        {
          time: 'today',
          info: [
            {
              name: 'Cannabinoid',
              data: [25]
            },
            {
              name: 'Cathinone',
              data: [24]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Cannabinoid',
              data: [45]
            },
            {
              name: 'Cathinone',
              data: [65]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Cannabinoid',
              data: [230]
            },
            {
              name: 'Cathinone',
              data: [345]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Cannabinoid',
              data: [3800]
            },
            {
              name: 'Cathinone',
              data: [2345]
            }
          ]
        }
      ]
    ]
  },
  twelve: {
    PatientTime: [
      [
        {
          time: 'today',
          info: [
            {
              name: 'Average',
              data: [21]
            },
            {
              name: 'Minimum',
              data: [7]
            },
            {
              name: 'Maximum',
              data: [35]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Average',
              data: [32]
            },
            {
              name: 'Minimum',
              data: [9]
            },
            {
              name: 'Maximum',
              data: [55]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Average',
              data: [29]
            },
            {
              name: 'Minimum',
              data: [10]
            },
            {
              name: 'Maximum',
              data: [48]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Average',
              data: [35]
            },
            {
              name: 'Minimum',
              data: [10]
            },
            {
              name: 'Maximum',
              data: [60]
            }
          ]
        }
      ],
      [
        {
          time: 'today',
          info: [
            {
              name: 'Collector Name 1',
              data: [25]
            },
            {
              name: 'Collector Name 2',
              data: [29]
            },
            {
              name: 'Collector Name 3',
              data: [30]
            },
            {
              name: 'Collector Name 4',
              data: [35]
            },
            {
              name: 'Collector Name 5',
              data: [32]
            },
            {
              name: 'Collector Name 6',
              data: [25]
            },
            {
              name: 'Collector Name 7',
              data: [31]
            },
            {
              name: 'Collector Name 8',
              data: [36]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Collector Name 1',
              data: [30]
            },
            {
              name: 'Collector Name 2',
              data: [45]
            },
            {
              name: 'Collector Name 3',
              data: [44]
            },
            {
              name: 'Collector Name 4',
              data: [30]
            },
            {
              name: 'Collector Name 5',
              data: [33]
            },
            {
              name: 'Collector Name 6',
              data: [30]
            },
            {
              name: 'Collector Name 7',
              data: [38]
            },
            {
              name: 'Collector Name 8',
              data: [43]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Collector Name 1',
              data: [39]
            },
            {
              name: 'Collector Name 2',
              data: [40]
            },
            {
              name: 'Collector Name 3',
              data: [33]
            },
            {
              name: 'Collector Name 4',
              data: [35]
            },
            {
              name: 'Collector Name 5',
              data: [40]
            },
            {
              name: 'Collector Name 6',
              data: [38]
            },
            {
              name: 'Collector Name 7',
              data: [37]
            },
            {
              name: 'Collector Name 8',
              data: [38]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Collector Name 1',
              data: [40]
            },
            {
              name: 'Collector Name 2',
              data: [39]
            },
            {
              name: 'Collector Name 3',
              data: [41]
            },
            {
              name: 'Collector Name 4',
              data: [38]
            },
            {
              name: 'Collector Name 5',
              data: [42]
            },
            {
              name: 'Collector Name 6',
              data: [43]
            },
            {
              name: 'Collector Name 7',
              data: [37]
            },
            {
              name: 'Collector Name 8',
              data: [40]
            }
          ]
        }
      ]
    ]
  },
  thirteen: {
    PatientTime: [
      [
        {
          time: 'today',
          info: [
            {
              name: 'Collector Name 1',
              data: [1]
            },
            {
              name: 'Collector Name 2',
              data: [2]
            },
            {
              name: 'Collector Name 3',
              data: [3]
            },
            {
              name: 'Collector Name 4',
              data: [4]
            },
            {
              name: 'Collector Name 5',
              data: [5]
            },
            {
              name: 'Collector Name 6',
              data: [6]
            },
            {
              name: 'Collector Name 7',
              data: [7]
            },
            {
              name: 'Collector Name 8',
              data: [8]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Collector Name 1',
              data: [2]
            },
            {
              name: 'Collector Name 2',
              data: [7]
            },
            {
              name: 'Collector Name 3',
              data: [1]
            },
            {
              name: 'Collector Name 4',
              data: [8]
            },
            {
              name: 'Collector Name 5',
              data: [6]
            },
            {
              name: 'Collector Name 6',
              data: [5]
            },
            {
              name: 'Collector Name 7',
              data: [4]
            },
            {
              name: 'Collector Name 8',
              data: [3]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Collector Name 1',
              data: [7]
            },
            {
              name: 'Collector Name 2',
              data: [5]
            },
            {
              name: 'Collector Name 3',
              data: [3]
            },
            {
              name: 'Collector Name 4',
              data: [2]
            },
            {
              name: 'Collector Name 5',
              data: [8]
            },
            {
              name: 'Collector Name 6',
              data: [1]
            },
            {
              name: 'Collector Name 7',
              data: [6]
            },
            {
              name: 'Collector Name 8',
              data: [4]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Collector Name 1',
              data: [4]
            },
            {
              name: 'Collector Name 2',
              data: [3]
            },
            {
              name: 'Collector Name 3',
              data: [1]
            },
            {
              name: 'Collector Name 4',
              data: [6]
            },
            {
              name: 'Collector Name 5',
              data: [8]
            },
            {
              name: 'Collector Name 6',
              data: [2]
            },
            {
              name: 'Collector Name 7',
              data: [7]
            },
            {
              name: 'Collector Name 8',
              data: [5]
            }
          ]
        }
      ]
    ]
  },
  fourteen: {
    PatientTime: [
      [
        {
          time: 'today',
          info: [
            {
              name: 'Male',
              data: [18]
            },
            {
              name: 'Female',
              data: [10]
            },
            {
              name: 'Other',
              data: [0]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Male',
              data: [45]
            },
            {
              name: 'Female',
              data: [40]
            },
            {
              name: 'Other',
              data: [1]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Male',
              data: [230]
            },
            {
              name: 'Female',
              data: [200]
            },
            {
              name: 'Other',
              data: [10]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Male',
              data: [3800]
            },
            {
              name: 'Female',
              data: [3400]
            },
            {
              name: 'Other',
              data: [200]
            }
          ]
        }
      ],
      [
        {
          time: 'today',
          info: [
            {
              name: 'Male',
              data: [10]
            },
            {
              name: 'Female',
              data: [5]
            },
            {
              name: 'Other',
              data: [0]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Male',
              data: [35]
            },
            {
              name: 'Female',
              data: [25]
            },
            {
              name: 'Other',
              data: [1]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Male',
              data: [180]
            },
            {
              name: 'Female',
              data: [150]
            },
            {
              name: 'Other',
              data: [4]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Male',
              data: [2000]
            },
            {
              name: 'Female',
              data: [1500]
            },
            {
              name: 'Other',
              data: [100]
            }
          ]
        }
      ],
      [
        {
          time: 'today',
          info: [
            {
              name: 'Presented',
              data: [20]
            },
            {
              name: 'No Shows',
              data: [1]
            },
            {
              name: 'Rescheduled',
              data: [2]
            },
            {
              name: 'Cancelled',
              data: [2]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Presented',
              data: [62]
            },
            {
              name: 'No Shows',
              data: [2]
            },
            {
              name: 'Rescheduled',
              data: [7]
            },
            {
              name: 'Cancelled',
              data: [3]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Presented',
              data: [417]
            },
            {
              name: 'No Shows',
              data: [7]
            },
            {
              name: 'Rescheduled',
              data: [14]
            },
            {
              name: 'Cancelled',
              data: [5]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Presented',
              data: [7040]
            },
            {
              name: 'No Shows',
              data: [40]
            },
            {
              name: 'Rescheduled',
              data: [100]
            },
            {
              name: 'Cancelled',
              data: [50]
            }
          ]
        }
      ]
    ],
    center: [
      [
        {
          name: '2017',
          data: [100, 120, 110]
        },
        {
          name: '2018',
          data: [300, 10, 120]
        },
        {
          name: '2019',
          data: [500, 320, 140]
        }
      ],
      [
        {
          name: '2017',
          data: [200, 140, 110]
        },
        {
          name: '2018',
          data: [100, 120, 410]
        },
        {
          name: '2019',
          data: [300, 120, 110]
        }
      ],
      [
        {
          name: '2017',
          data: [200, 140, 110, 567, 261]
        },
        {
          name: '2018',
          data: [100, 120, 410, 462, 129]
        },
        {
          name: '2019',
          data: [300, 120, 110, 192, 253]
        }
      ]
    ]
  },
  fiveteen: {
    PatientTime: [
      [
        {
          time: 'today',
          info: [
            {
              name: 'Rapid (Negative)',
              data: [10]
            },
            {
              name: 'Saliva (Negative)',
              data: [10]
            },
            {
              name: 'Breath (Negative)',
              data: [10]
            },
            {
              name: 'Breath (Negative)',
              data: [15]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Rapid (Negative)',
              data: [45]
            },
            {
              name: 'Saliva (Negative)',
              data: [45]
            },
            {
              name: 'Breath (Negative)',
              data: [40]
            },
            {
              name: 'Breath (Negative)',
              data: [60]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Rapid (Negative)',
              data: [230]
            },
            {
              name: 'Saliva (Negative)',
              data: [230]
            },
            {
              name: 'Breath (Negative)',
              data: [200]
            },
            {
              name: 'Breath (Negative)',
              data: [240]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Rapid (Negative)',
              data: [400]
            },
            {
              name: 'Saliva (Negative)',
              data: [400]
            },
            {
              name: 'Breath (Negative)',
              data: [300]
            },
            {
              name: 'Breath (Negative)',
              data: [500]
            }
          ]
        }
      ],
      [
        {
          time: 'today',
          info: [
            {
              name: 'Male',
              data: [10]
            },
            {
              name: 'Female',
              data: [5]
            },
            {
              name: 'Other',
              data: [0]
            }
          ]
        },
        {
          time: 'currentWeek',
          info: [
            {
              name: 'Male',
              data: [35]
            },
            {
              name: 'Female',
              data: [25]
            },
            {
              name: 'Other',
              data: [1]
            }
          ]
        },
        {
          time: 'currentMonth',
          info: [
            {
              name: 'Male',
              data: [180]
            },
            {
              name: 'Female',
              data: [150]
            },
            {
              name: 'Other',
              data: [4]
            }
          ]
        },
        {
          time: 'currentYear',
          info: [
            {
              name: 'Male',
              data: [800]
            },
            {
              name: 'Female',
              data: [500]
            },
            {
              name: 'Other',
              data: [50]
            }
          ]
        }
      ]
    ],
    center: [
      [
        {
          name: '2017',
          data: [100, 120, 110, 230]
        },
        {
          name: '2018',
          data: [300, 10, 120, 200]
        },
        {
          name: '2019',
          data: [500, 320, 140, 20]
        }
      ],
      [
        {
          name: '2017',
          data: [200, 140, 110, 210, 250, 300]
        },
        {
          name: '2018',
          data: [100, 120, 410, 230, 250, 390]
        },
        {
          name: '2019',
          data: [300, 120, 110, 530, 270, 300]
        }
      ]
    ]
  }
}

const getData = (req: RequestType) => {
  const body: {
    type: TableType
  } = JSON.parse(req.body)
  const code = 200
  const msg = '请求成功'
  const data: Record<string, any> = tableData[body.type]

  return {
    code,
    data,
    msg
  }
}

export default {
  getData
}
