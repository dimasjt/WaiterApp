Types::UserType = GraphQL::ObjectType.define do
  name "User"

  field :id, types.ID
  field :email, types.String
  field :first_name, types.String
  field :last_name, types.String
  field :role, types.String
  field :phone, types.String
end
