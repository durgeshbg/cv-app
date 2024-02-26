export const empty = {
  name: '',
  email: '',
  phone: '',
  education: {
    default: {
      name: '',
      title: '',
      date: '',
      isActive: true,
    },
  },
  experience: {
    default: {
      name: '',
      position: '',
      responsibilities: '',
      fromDate: '',
      toDate: '',
      isActive: true,
    },
  },
};

export const example = {
  name: 'Mr. Bean',
  email: 'beanie@gmail.com',
  phone: '+92 72832 11289',
  education: {
    default: {
      name: 'St. Marry School',
      title: 'School',
      date: '2016-4-23',
      isActive: true,
    },
    default1: {
      name: 'Pauling High School',
      title: 'High School',
      date: '2018-7-5',
      isActive: true,
    },
    default2: {
      name: 'Northman University',
      title: 'Bachelor of Technology in Information Technology',
      date: '2022-5-30',
      isActive: true,
    },
  },
  experience: {
    default: {
      name: 'Google',
      position: 'Intern',
      responsibilities:
        'Inspecting server working, cloud infrastructure and managing testing.',
      fromDate: '2022-1-22',
      toDate: '2022-2-25',
      isActive: true,
    },
    default1: {
      name: 'Microsoft',
      position: 'Full time QA testing engineer',
      responsibilities: 'Managing QA tesing, Cloud Architect',
      fromDate: '2022-7-29',
      toDate: new Date().toISOString().split('T')[0],
      isActive: true,
    },
  },
};
