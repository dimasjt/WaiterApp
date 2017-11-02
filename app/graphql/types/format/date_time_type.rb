Types::Format::DateTimeType = GraphQL::ObjectType.define do
  name "DateTime"

  field :format, types.String do
    resolve ->(time, args, ctx) {
      time.to_formatted_s(:db)
    }
  end

  field :human, types.String do
    resolve ->(time, args, ctx) {
      time.to_formatted_s(:long)
    }
  end

  field :unix, types.Int do
    resolve ->(time, args, ctx) {
      time.utc.to_i * 1000
    }
  end
end
