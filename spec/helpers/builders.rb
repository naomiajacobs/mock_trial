define_builder(Player) do |klass, overrides|
  new_klass = klass.new
  new_klass.first_name = overrides[:first_name] || 'Naomi'
  new_klass.last_name = overrides[:last_name] || 'Jacobs'
  new_klass
end
