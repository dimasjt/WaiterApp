Types::OrderType = GraphQL::ObjectType.define do
  name "Order"

  field :id, types.ID
  field :customer_name, types.String
  field :total, Types::Format::PriceType
  field :total_pay, Types::Format::PriceType
  field :return_cash, Types::Format::PriceType
  field :payment_method, types.String
  field :cart, Types::CartType
  field :created_at, Types::Format::DateTimeType
  field :updated_at, Types::Format::DateTimeType
end
