Rails.application.routes.draw do
  devise_scope :user do
    get 'login', to: 'devise/sessions#new'
  end
  devise_for :users, :controllers => {:registrations => "registrations"}
  root to: 'blogs#index'
  resources :blogs
end
