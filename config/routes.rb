Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"

  namespace :api, default: { format: :json } do
    resources :users
  end
end
