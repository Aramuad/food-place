100.times do
  Food.create(
    name: Faker::Food.dish
    description: Faker::Food.description
    price: Faker::Commerce.price
  )
end