Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/api/graphql"
  end

  root to: "pages#home"

  devise_for :users

  namespace :admin do
    root to: redirect("/admin/orders")

    resources :shops
    resources :products
    resources :categories
    resources :users
    resources :orders
  end

  namespace :api, default: { format: :json } do
    post "login", to: "sessions#create", as: :login

    post "/graphql", to: "graphql#execute"
  end

  get "app", to: "pages#app"
end
