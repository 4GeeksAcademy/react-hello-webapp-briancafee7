export const initialStore = () => {
  return {
    contactos: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))

      };

    default:
      throw Error('Unknown action.');

    case "agregar_contacto":
      return {
        ...store,
        contactos: [...store.contactos, action.payload]
      };

    default:
      return state;
  }
}
