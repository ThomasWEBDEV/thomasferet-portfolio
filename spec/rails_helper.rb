require 'spec_helper'
# Charge l'environnement Rails
require File.expand_path('../../config/environment', __FILE__)
require 'rspec/rails'

# Inclut les gems de support de test manquantes
require 'faker'
require 'factory_bot_rails'

# Cette section qui gère Active Record est laissée commentée pour éviter l'erreur NameError
# begin
#   ActiveRecord::Migration.maintain_test_schema!
# rescue ActiveRecord::PendingMigrationError => e
#   puts e.to_s.strip
#   exit 1
# end

RSpec.configure do |config|
  # Configure l'inclusion des helpers FactoryBot globalement
  config.include FactoryBot::Syntax::Methods

  # Supprime les spécifications de RSpec de l'exécution
  config.filter_rails_from_backtrace!
  
  # Configuration pour les transactions de base de données (si base de données utilisée)
  config.use_transactional_fixtures = true
end
