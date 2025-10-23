require 'rails_helper'

RSpec.describe "Environnement de test", type: :model do
  it "permet d'utiliser FactoryBot et Faker" do
    name = Faker::Name.name
    puts "Nom généré par Faker : #{name}"
    expect(name).to be_a(String)
  end
end
