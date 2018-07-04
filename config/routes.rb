Rails.application.routes.draw do
  
  get 'users/index'
  get 'users/show'
  devise_for :users, :controllers => {:registrations => "registrations"}
  get '/users/:id', to: 'users#show'
  get '/users', to: 'users#index'

  devise_scope :user do
    get 'signup', to: 'devise/registrations#new'
  end

  devise_scope :user do
    get 'login', to: 'devise/sessions#new'
  end

  root to: 'blogs#index'
  resources :blogs do
    resources :comments
  end
end
