import * as actions from './todos'; 

describe('Todos Actions', () => { 

  it('should create an action to add a Todo', () => { 
    const text = "Testing add todo"; 
    const expectedAction = { 
      type: actions.ADD_TODO, 
      title: text, 
      status: actions.ACTIVE 
    }     

    expect(actions.addTodo(text)).toEqual(expectedAction) 
  }) 

  it('should create an action to toogle a Todo', () => {
    const id = 1;
    const expectedAction = {
      type: actions.TOGGLE_TODO,
      id
    }

    expect(actions.toggleTodo(id)).toEqual(expectedAction)
  })

  
})