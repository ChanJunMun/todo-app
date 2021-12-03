import { Paper } from '@material-ui/core';
import { List } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import Todo from './Todo';
import { TodosContext } from "./context/todos.context";

import React, {useContext} from 'react';

function TodoList() {
  const todos = useContext(TodosContext);
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <React.Fragment key={i}>
              <Todo
                {...todo}
                key={todo.id}
                />
                {i < todos.length -1 && <Divider />}
              </React.Fragment>
          ))}
        </List>
      </Paper>
    );
    return null;
}

export default TodoList;
