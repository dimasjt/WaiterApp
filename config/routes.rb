Rails.application.routes.draw do
  resources :shops
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/api/graphql"
  end

  root to: "pages#home"

  devise_for :users

  namespace :admin do
    resources :shops do
      resources :products
    end
  end

  namespace :api, default: { format: :json } do
    post "login", to: "sessions#create", as: :login

    post "/graphql", to: "graphql#execute"
  end
end
