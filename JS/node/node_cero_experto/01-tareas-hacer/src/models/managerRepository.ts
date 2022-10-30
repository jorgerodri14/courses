interface ManagerRepository {
  createTask: () => void;
  listTask: () => void;
  completeTask: () => void;
  deleteTask: () => void;
}
