import { FormikHelpers } from 'formik';

export interface IGeneralHandleOnSubmit<T> {
  (values: T, actions: FormikHelpers<T>): void;
}

/**
 * TodoUpBar
 */

namespace TodoUpBarInitials {
  export interface IInitialValues {
    keyword: string;
  }

  export const initialValues: IInitialValues = {
    keyword: ''
  };

  export interface IHandleOnSubmit extends IGeneralHandleOnSubmit<IInitialValues> {}
}

/**
 * SendResetPasswordForm
 */

namespace SendResetPasswordFormInitials {
  export interface IInitialValues {
    email: string;
  }

  export const initialValues: IInitialValues = {
    email: ''
  };

  export interface IHandleOnSubmit extends IGeneralHandleOnSubmit<IInitialValues> {}
}

/**
 * ResetPasswordForm
 */

namespace ResetPasswordFormInitials {
  export interface IInitialValues {
    newpassword: string;
    confirmnewpassword: string;
  }

  export const initialValues: IInitialValues = {
    newpassword: '',
    confirmnewpassword: ''
  };

  export interface IHandleOnSubmit extends IGeneralHandleOnSubmit<IInitialValues> {}
}

/**
 * RegisterForm
 */

namespace RegisterFormInitials {
  export interface IInitialValues {
    email: string;
    password: string;
    confirmpassword: string;
  }

  export const initialValues: IInitialValues = {
    email: '',
    password: '',
    confirmpassword: ''
  };

  export interface IHandleOnSubmit extends IGeneralHandleOnSubmit<IInitialValues> {}
}

/**
 * LoginForm
 */

namespace LoginFormInitials {
  export interface IInitialValues {
    email: string;
    password: string;
  }

  export const initialValues: IInitialValues = {
    email: '',
    password: ''
  };

  export interface IHandleOnSubmit extends IGeneralHandleOnSubmit<IInitialValues> {}
}

/**
 * EditTodoForm
 */

namespace EditTodoFormInitials {
  export interface IInitialValues {
    name: string;
    description: string;
    isCompleted: boolean;
    isPrivate: boolean;
  }

  export const initialValues: IInitialValues = {
    name: '',
    description: '',
    isCompleted: false,
    isPrivate: false
  };

  export interface IHandleOnSubmit extends IGeneralHandleOnSubmit<IInitialValues> {}
}

/**
 * CreateTodoForm
 */

namespace CreateTodoFormInitials {
  export interface IInitialValues {
    name: string;
    description: string;
    isCompleted: boolean;
    isPrivate: boolean;
  }

  export const initialValues: IInitialValues = {
    name: '',
    description: '',
    isCompleted: false,
    isPrivate: false
  };

  export interface IHandleOnSubmit extends IGeneralHandleOnSubmit<IInitialValues> {}
}

/**
 * Export
 */

export {
  TodoUpBarInitials,
  SendResetPasswordFormInitials,
  ResetPasswordFormInitials,
  RegisterFormInitials,
  LoginFormInitials,
  EditTodoFormInitials,
  CreateTodoFormInitials
};
