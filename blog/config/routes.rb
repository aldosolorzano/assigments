Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  match "/delayed_job" => DelayedJobWeb, :anchor => false, via: [:get, :post]

  root 'posts#index'

  resources :posts, shallow:true do
    resources :comments, only: [:create, :destroy]
    resources :likes , only: [:create, :destroy]
  end
  resources :users, only:[:new,:create,:edit,:update],shallow: true do
    resources :likes, only:[:index]
  end
  resources :sessions, only:[:new,:create] do
    delete :destroy, on: :collection
  end
  resources :password_reset, only:[:new,:create]
end
