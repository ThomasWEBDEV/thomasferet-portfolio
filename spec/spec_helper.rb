# C'est ici que vous placez la configuration globale non spécifique à Rails
RSpec.configure do |config|
  # Configuration pour les sorties
  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end

  # Cette configuration permet de n'exécuter qu'un seul test en cas d'échec
  config.shared_context_metadata_behavior = :apply_to_host_groups

  # Permet d'utiliser le mot-clé 'focus'
  config.filter_run_when_matching :focus

  # Permet de supprimer les tests déjà exécutés pour un environnement plus propre
  config.run_all_when_everything_filtered = true

  # Désactive l'ordre aléatoire si vous voulez reproduire facilement les erreurs
  config.order = :random
  Kernel.srand config.seed
end
