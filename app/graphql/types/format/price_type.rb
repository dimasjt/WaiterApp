Types::Format::PriceType = GraphQL::ObjectType.define do
  name "Price"

  field :number, types.Int do
    resolve ->(price, args, ctx) {
      price.to_i
    }
  end

  field :human, types.String do
    resolve ->(price, args, ctx) {
      Money.new(price, :idr).format
    }
  end
end
