Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/api/graphql"
  end

  root to: "pages#home"

  namespace :api, default: { format: :json } do
    post "login", to: "sessions#create", as: :login

    resources :users

    post "/graphql", to: "graphql#execute"
  end
end
