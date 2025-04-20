// src/composables/useProjects.js
import { ref, computed } from 'vue'
import { projectsData } from '@/data/projects'

export function useProjects() {
  const projects = ref(projectsData)
  const activeFilter = ref('all')
  const searchQuery = ref('')
  const sortBy = ref('recent')
  
  // Computed filtered projects
  const filteredProjects = computed(() => {
    let result = [...projects.value]
    
    // Filter by category
    if (activeFilter.value !== 'all') {
      result = result.filter(project => 
        project.category === activeFilter.value || 
        project.tags.includes(activeFilter.value)
      )
    }
    
    // Filter by search query
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      result = result.filter(project => 
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }
    
    // Sort projects
    switch (sortBy.value) {
      case 'recent':
        return result.sort((a, b) => new Date(b.date) - new Date(a.date))
      case 'oldest':
        return result.sort((a, b) => new Date(a.date) - new Date(b.date))
      case 'alphabetical':
        return result.sort((a, b) => a.title.localeCompare(b.title))
      default:
        return result
    }
  })
  
  // Available categories for filtering
  const categories = computed(() => {
    const cats = ['all']
    
    projects.value.forEach(project => {
      if (project.category && !cats.includes(project.category)) {
        cats.push(project.category)
      }
      
      if (project.tags) {
        project.tags.forEach(tag => {
          if (!cats.includes(tag)) {
            cats.push(tag)
          }
        })
      }
    })
    
    return cats
  })
  
  // Function to change active filter
  const setFilter = (filter) => {
    activeFilter.value = filter
  }
  
  // Function to change sort method
  const setSortBy = (sort) => {
    sortBy.value = sort
  }
  
  // Function to set search query
  const setSearchQuery = (query) => {
    searchQuery.value = query
  }
  
  return {
    projects,
    filteredProjects,
    categories,
    activeFilter,
    searchQuery,
    sortBy,
    setFilter,
    setSortBy,
    setSearchQuery
  }
}