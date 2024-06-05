import React, { Dispatch, SetStateAction } from 'react';
import { ToggleButtonGroup } from '@mui/material';
import { useFormik } from 'formik';

import { TypeBages, bages, TodoUpBarInitials } from '../../consts';
import { useAuth } from '../../../hooks';
import { BarBox, MyTextField, MyRadioButton } from './TodoUpBar.styled';
import { BasicForm } from '../LoginForm';

interface ITodoUpBar {
  bage: TypeBages;
  setKeyword: Dispatch<SetStateAction<string>>;
  setBage: Dispatch<SetStateAction<TypeBages>>;
}

/**
 * Component
 */

export const TodoUpBar: React.FC<ITodoUpBar> = ({ bage, setKeyword, setBage }) => {
  const { isLogged } = useAuth();

  const onBageChange = (_: React.MouseEvent<HTMLElement>, newBadge: TypeBages) => {
    if (newBadge !== null) {
      setBage(newBadge);
    }
  };

  const onSearchSubmit: TodoUpBarInitials.IHandleOnSubmit = (values, actions) => {
    setKeyword(values.keyword);
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: TodoUpBarInitials.initialValues,
    onSubmit: onSearchSubmit
  });

  return (
    <BarBox>
      <ToggleButtonGroup value={bage} onChange={onBageChange} aria-label="Type of todos" exclusive>
        {bages.map((bageEl, idx) => {
          const shouldDisable = !(isLogged || bageEl === 'Public');
          return (
            <MyRadioButton key={idx} value={bageEl} aria-label={bageEl} disabled={shouldDisable}>
              {bageEl}
            </MyRadioButton>
          );
        })}
      </ToggleButtonGroup>

      <BasicForm onSubmit={formik.handleSubmit}>
        <MyTextField
          id="keyword"
          name="keyword"
          label="keyword"
          value={formik.values.keyword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.keyword && Boolean(formik.errors.keyword)}
          helperText={formik.touched.keyword && formik.errors.keyword}
          onClick={formik.handleSubmit}
        />
      </BasicForm>
    </BarBox>
  );
};
