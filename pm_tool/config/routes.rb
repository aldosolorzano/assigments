Rails.application.routes.draw do
  get 'projects/index'

  get '/' => 'home#index'
  get '/about' => 'home#about'

  get '/projects' => 'projects#index'
  get 'projects/new' => 'projects#new', as: :new_project
  get '/projects/:id' => 'projects#show', as: :project
  get '/project/edit/:id' => 'projects#edit', as: :edit_project
  post '/projects' => 'projects#create'
  delete '/projects/:id' => 'projects#destroy'
  patch '/projects/:id' => 'projects#update'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
