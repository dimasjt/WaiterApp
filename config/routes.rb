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

  namespace :api, defaults: { format: :json } do
    post "login", to: "sessions#create", as: :login

    post :graphql, to: "graphql#execute"
    post :images, to: "images#create"
  end

  get "app", to: redirect("app/home")
  get "app/*path", to: "pages#app"
end
