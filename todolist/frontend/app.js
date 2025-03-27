document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.getElementById('todo-list');
    const newTodoInput = document.getElementById('new-todo');
    const addTodoBtn = document.getElementById('add-todo');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    let currentFilter = 'all';
    let todos = [];
    
    // Initialize the app
    function init() {
      loadTodos();
      setupEventListeners();
    }
    
    // Load todos from server
    function loadTodos() {
      fetch('http://localhost:3000/api/todos')
        .then(response => response.json())
        .then(data => {
          todos = data;
          renderTodos();
        })
        .catch(error => console.error('Error loading todos:', error));
    }
    
    // Render todos based on current filter
    function renderTodos() {
      todoList.innerHTML = '';
      
      const filteredTodos = todos.filter(todo => {
        if (currentFilter === 'all') return true;
        if (currentFilter === 'active') return !todo.completed;
        if (currentFilter === 'completed') return todo.completed;
        return true;
      });
      
      if (filteredTodos.length === 0) {
        todoList.innerHTML = '<p class="no-todos">No todos found</p>';
        return;
      }
      
      filteredTodos.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item';
        todoItem.dataset.id = todo.id;
        
        todoItem.innerHTML = `
          <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''}>
          <span class="todo-text ${todo.completed ? 'completed' : ''}">${todo.text}</span>
          <button class="delete-todo">×</button>
        `;
        
        todoList.appendChild(todoItem);
      });
    }
    
    // Add a new todo
    function addTodo() {
      const text = newTodoInput.value.trim();
      if (!text) return;
      
      fetch('http://localhost:3000/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text })
      })
        .then(response => response.json())
        .then(newTodo => {
          todos.push(newTodo);
          renderTodos();
          newTodoInput.value = '';
        })
        .catch(error => console.error('Error adding todo:', error));
    }
    
    // Update todo (toggle complete or edit text)
    function updateTodo(id, updates) {
      fetch(`http://localhost:3000/api/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates)
      })
        .then(response => response.json())
        .then(updatedTodo => {
          const index = todos.findIndex(t => t.id === updatedTodo.id);
          if (index !== -1) {
            todos[index] = updatedTodo;
            renderTodos();
          }
        })
        .catch(error => console.error('Error updating todo:', error));
    }
    
    // Delete a todo
    function deleteTodo(id) {
      fetch(`http://localhost:3000/api/todos/${id}`, {
        method: 'DELETE'
      })
        .then(() => {
          todos = todos.filter(todo => todo.id !== id);
          renderTodos();
        })
        .catch(error => console.error('Error deleting todo:', error));
    }
    
    // Set up event listeners
    function setupEventListeners() {
      // Add todo
      addTodoBtn.addEventListener('click', addTodo);
      newTodoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTodo();
      });
      
      // Todo list events (using event delegation)
      todoList.addEventListener('click', (e) => {
        const todoItem = e.target.closest('.todo-item');
        if (!todoItem) return;
        const id = parseInt(todoItem.dataset.id);
        
        // Delete button
        if (e.target.classList.contains('delete-todo')) {
          deleteTodo(id);
        }
        
        // Checkbox toggle
        if (e.target.classList.contains('todo-checkbox')) {
          const completed = e.target.checked;
          updateTodo(id, { completed });
        }
      });
      
      // Todo text edit (double-click)
      todoList.addEventListener('dblclick', (e) => {
        if (e.target.classList.contains('todo-text')) {
          const textElement = e.target;
          const id = parseInt(textElement.closest('.todo-item').dataset.id);
          const currentText = textElement.textContent;
          
          const input = document.createElement('input');
          input.type = 'text';
          input.value = currentText;
          input.className = 'todo-edit';
          
          textElement.replaceWith(input);
          input.focus();
          
          const saveEdit = () => {
            const newText = input.value.trim();
            if (newText && newText !== currentText) {
              updateTodo(id, { text: newText });
            } else {
              renderTodos();
            }
          };
          
          input.addEventListener('blur', saveEdit);
          input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') saveEdit();
          });
        }
      });
      
      // Filter buttons
      filterButtons.forEach(button => {
        button.addEventListener('click', () => {
          filterButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
          currentFilter = button.dataset.filter;
          renderTodos();
        });
      });
    }
    
    // Initialize the app
    init();
  });