Types::Format::PriceType = GraphQL::ObjectType.define do
  name "Price"

  field :number, types.Float do
    resolve ->(price, args, ctx) {
      price
    }
  end

  field :human, types.String do
    resolve ->(price, args, ctx) {
      Money.new(price, :idr).format
    }
  end
end
