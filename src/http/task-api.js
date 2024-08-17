import api from "./api";

const resource = "/tasks";

export const allTasks = () => api.get(resource);

export const createTask = (task) => api.post(resource, task);

export const updateTask = (taskId, task) =>
  api.put(`${resource}/${taskId}`, task);

export const deleteTask = (taskId) => api.delete(`${resource}/${taskId}`);

export const completeTask = (taskId, task) =>
  api.put(`${resource}/${taskId}/complete`, task);
