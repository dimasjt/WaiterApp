# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171120040205) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "carts", force: :cascade do |t|
    t.bigint "shop_id"
    t.bigint "order_id"
    t.decimal "total_price", default: "0.0"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "status"
    t.string "table_number"
    t.index ["order_id"], name: "index_carts_on_order_id"
    t.index ["shop_id"], name: "index_carts_on_shop_id"
  end

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.bigint "shop_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["shop_id"], name: "index_categories_on_shop_id"
  end

  create_table "images", force: :cascade do |t|
    t.string "file"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_images_on_user_id"
  end

  create_table "items", force: :cascade do |t|
    t.bigint "product_id"
    t.bigint "cart_id"
    t.integer "quantity", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cart_id"], name: "index_items_on_cart_id"
    t.index ["product_id"], name: "index_items_on_product_id"
  end

  create_table "orders", force: :cascade do |t|
    t.string "customer_name"
    t.string "number"
    t.decimal "total"
    t.decimal "sub_total"
    t.decimal "discount"
    t.integer "payment_method"
    t.bigint "shop_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "cart_id"
    t.decimal "total_pay", default: "0.0"
    t.decimal "return_cash", default: "0.0"
    t.index ["cart_id"], name: "index_orders_on_cart_id"
    t.index ["number"], name: "index_orders_on_number", unique: true
    t.index ["shop_id"], name: "index_orders_on_shop_id"
  end

  create_table "products", force: :cascade do |t|
    t.string "name"
    t.decimal "price", default: "0.0"
    t.bigint "shop_id"
    t.string "image"
    t.bigint "category_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "description"
    t.string "sku"
    t.string "barcode"
    t.datetime "deleted_at"
    t.boolean "in_stock", default: true, null: false
    t.index ["category_id"], name: "index_products_on_category_id"
    t.index ["shop_id"], name: "index_products_on_shop_id"
  end

  create_table "shops", force: :cascade do |t|
    t.string "name"
    t.bigint "user_id"
    t.integer "subscription", default: 0
    t.string "city"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_shops_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: ""
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.integer "failed_attempts", default: 0, null: false
    t.string "unlock_token"
    t.datetime "locked_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name"
    t.string "last_name"
    t.string "phone"
    t.integer "role", default: 0
    t.string "pin", limit: 4
    t.integer "shop_id"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["shop_id"], name: "index_users_on_shop_id"
    t.index ["unlock_token"], name: "index_users_on_unlock_token", unique: true
  end

  add_foreign_key "carts", "orders"
  add_foreign_key "carts", "shops"
  add_foreign_key "images", "users"
  add_foreign_key "items", "carts"
  add_foreign_key "items", "products"
  add_foreign_key "orders", "shops"
  add_foreign_key "products", "categories"
  add_foreign_key "products", "shops"
  add_foreign_key "shops", "users"
end
