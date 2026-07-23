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

    case "add_contact":
      return {
        ...store,
        contactos: [...store.contactos, action.payload]
      };

      case "cargar_contactos":
      // Reemplaza toda la lista (se usa tras el GET)
      return {
        ...store,
        contactos: action.payload
      };

    
  }
}
