# Fichier de configuration minimal pour simuler une application Rails

# 'rails/all' inclut Active Model, Active Record, etc. (ce qui manquait).
require 'rails/all' 

module PortfolioThomas
  class Application < Rails::Application
    # Initialisation minimale
    config.load_defaults 7.0
    config.root = File.expand_path('..', __dir__)

    # Les railtie sont maintenant inclus via 'rails/all'
  end
end
