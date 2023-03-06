
export const formValidation = (form) => {
  let errors = {}

  // Name
  if (!form.name) errors.name = 'Please enter a valid name'
  if (form.name.length > 35) errors.name = 'Must have 35 characters maximum'

  // Description
  if (!form.description) errors.description = 'Please enter a valid description'

  // Platforms
  if (!form.platforms) errors.platforms = 'Please enter at least one valid platform'

  // Image 
  if (!/^https?:\/\//.test(form.image)) errors.image = 'Please enter a valid URL'

  // Released
  if (!form.released) errors.released = 'Please enter a valid date'
  if (Date.parse(form.released) > Date.now()) errors.released = `Maximun date limit is: ${new Date().toLocaleDateString()}`
  if (Date.parse(form.released) < 0) errors.released = `Minimun date is: ${new Date(0).toLocaleDateString()}`

  // Rating
  if (!form.rating) errors.rating = 'Please enter a valid rating number'

  // Genres
  if (!form.genres || form.genres.length === 0) errors.genres = 'Please enter at least one valid genre'

  return errors
}