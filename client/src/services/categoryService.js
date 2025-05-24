// client/src/services/categoryService.js
import apiClient from './apiClient';

const categoryService = {
    getAllCategories: () => apiClient.get('/categories'),
    getCategoryById: (id) => apiClient.get(`/categories/${id}`),
    addCategory: (data) => apiClient.post('/categories', data),
    updateCategory: (id, data) => apiClient.put(`/categories/${id}`, data),
    deleteCategory: (id) => apiClient.delete(`/categories/${id}`)
};

export default categoryService;