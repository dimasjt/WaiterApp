WaiterAppSchema = GraphQL::Schema.define do
  mutation(Types::MutationType)
  query(Types::QueryType)

  rescue_from ActiveRecord::RecordInvalid do |e|
    e.message
  end
end
