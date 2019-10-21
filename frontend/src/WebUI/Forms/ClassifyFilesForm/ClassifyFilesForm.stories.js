import React, { useState } from 'react';
import {
  storiesOf
} from '@storybook/react';
import ClassifyFilesForm from './index';
import config from './config';
import { createStyles } from '@material-ui/core';

const categoryName = 'AssembledComponents/Forms';

storiesOf(categoryName, module).add('ClassifyFilesForm', () => {
  const [state, setState] = useState({});
  const onChange = ({
    name,
    value
  }) => {
    setState({
      ...state,
      [name]: value,
    })
  };
  const classes = createStyles({
    textField: {
      width: 'auto',
      height: 20,
    },
  })
  const i18n = {
    classifyFiles: {
      title: 'Formulario para clasificar una evaluación',
      course: 'Curso',
      year: 'Año',
      section: 'Sección',
      semester: 'Semestre',
      sheetId: 'Google Sheet ID',
    },
  };
  const defaultProps = {
    config: config({
      onChange,
      state,
      i18n,
      classes,
      defaultValue: {},
    }),
    title: 'Formulario para clasificar una evaluación',
    i18n: {
      cancel: 'Cancelar',
      submit: 'Crear',
    },
  };
  return <ClassifyFilesForm {...defaultProps} />;
});

