Rails.application.routes.draw do
  # devise_for :users
  root to: "pages#home"

  namespace :api, default: { format: :json } do
    post "login", to: "sessions#create", as: :login

    resources :users
  end
end
