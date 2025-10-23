# Charge l'environnement Rails (normalement via config/application.rb)
# Charger Bundler en premier assure que toutes les gems sont disponibles, y compris Faker.
require 'bundler/setup'

# Chargement de l'application Rails
require File.expand_path('application', __dir__)
Rails.application.initialize!
