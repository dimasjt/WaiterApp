# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(
  first_name: "Rick",
  last_name: "Sanchez",
  email: "rick@mailinator.com",
  password: "letmein123!",
  phone: "088123123123"
)

shop = Shop.create(
  name: "Bebek Ijo",
  city: "Bandung",
  user: user
)
