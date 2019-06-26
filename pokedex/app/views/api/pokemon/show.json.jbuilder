
json.pokemon do
  json.extract! @pokemon, :id, :name, :attack, :defense, :poke_type, :moves, :image_url
  json.item_ids do
    json.array! @pokemon.items.map(&:id)
  end
end

json.items do
  @pokemon.items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
    end
  end
end
