import React from 'react';
import { useParams } from 'react-router-dom';

import { Description, ErrorBox, Title, MyButton, FlexBox } from './TodoDetails.styled';
import { Spinner } from '../Other/Spinner';
import { useNavigateBackForward, useToggle, useOneTodo, useAuth } from '../../../hooks';
import { EditTodoForm } from '../EditTodoForm';

export const TodoDetails = () => {
  const { todoId } = useParams();
  const { goBack } = useNavigateBackForward();
  const [isEditing, toggleEdit] = useToggle();
  const { data, status } = useOneTodo(todoId!);
  const { userId } = useAuth();

  if (status === 'loading') return <Spinner />;

  if (status === 'error') {
    return <ErrorBox>Error, no data to display !</ErrorBox>;
  }

  return (
    <div>
      <Title>
        {data.todo.name}
        <FlexBox>
          <MyButton onClick={() => toggleEdit()}>Edit</MyButton>
        </FlexBox>
      </Title>
      <Description>{data.todo.description}</Description>
      <MyButton onClick={goBack} isGoBack>
        Back
      </MyButton>

      {isEditing && userId === data.todo.creator && (
        <EditTodoForm {...{ isEditing, data: data.todo, status, toggleEdit }} />
      )}
    </div>
  );
};
