import components from '../components';

export default ({
  onChange,
  i18n,
  state,
  classes,
  defaultValue,
}) => [
  {
    component: components.TEXT_INPUT,
    id: 'course',
    label: i18n.classifyFiles.course,
    value: state.course || '',
    classes,
    onChange: (e) => onChange({
      name: 'course',
      value: e.target.value,
    }),
    defaultValue: defaultValue.course,
  },
  {
    component: components.TEXT_INPUT,
    id: 'year',
    label: i18n.classifyFiles.year,
    value: state.year || '',
    classes,
    onChange: (e) => onChange({
      name: 'year',
      value: e.target.value,
    }),
    defaultValue: defaultValue.year,
  },
  {
    component: components.SIMPLE_SELECT,
    id: 'semester',
    label: i18n.classifyFiles.semester,
    value: state.semester || '',
    classes,
    onChange: (e) => onChange({
      name: 'semester',
      value: e.target.value,
    }),
    options: [
    {
      value: '1',
      label: '1',
    },
    {
      value: '2',
      label: '2',
    },
    ],
    defaultValue: defaultValue.semester,
  },
  {
    component: components.NUMBER_INPUT,
    id: 'section',
    label: i18n.classifyFiles.section,
    value: state.section || 1,
    classes,
    onChange: (e) => onChange({
      name: 'section',
      value: e.target.value,
    }),
    min: 1,
    defaultValue: defaultValue.section,
  },
  {
    component: components.TEXT_INPUT,
    id: 'year',
    label: i18n.classifyFiles.sheetId,
    value: state.sheetId || '',
    classes,
    onChange: (e) => onChange({
      name: 'sheetId',
      value: e.target.value,
    }),
    defaultValue: defaultValue.sheetId,
  },
];