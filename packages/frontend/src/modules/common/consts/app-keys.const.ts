// Local storage keys
export const STORAGE_KEYS = {
  JWT_TOKEN: 'token'
};

// React-query keys
export const QUERY_KEYS = {
  USER: 'user',
  TODO: 'todo',
  TODOS: 'todos'
};

// Other keys
export const DEFAULT_KEYS = {
  TODO_LIMIT: 2
};

export const ROUTER_KEYS = {
  ROOT: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  TODOS: '/todo',
  SENDRESETPASSWORD: '/send-resetpassword',
  RESETPASSWORD: '/resetpassword/:resetPassToken',
  TODODETAILS: '/todo/:todoId',
  CREATETODO: '/createtoo',
  CONFIRMEMAIL: '/confirm/:confirmToken'
};
