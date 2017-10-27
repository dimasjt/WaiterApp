json.extract! order, :id, :number, :total, :sub_total, :discount, :payment_method, :shop_id, :created_at, :updated_at
json.url order_url(order, format: :json)
